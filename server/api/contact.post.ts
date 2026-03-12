export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { name, phone, message } = body

  if (!name || !phone || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Barcha maydonlarni to\'ldiring',
    })
  }

  // Sanitize & validate limits
  const cleanName = String(name).trim().slice(0, 50)
  const cleanPhone = String(phone).trim().slice(0, 17)
  const cleanMessage = String(message).trim().slice(0, 500)

  if (cleanName.length < 2) {
    throw createError({ statusCode: 400, statusMessage: 'Ism kamida 2 ta belgi bo\'lishi kerak' })
  }

  if (!/^\+998\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(cleanPhone)) {
    throw createError({ statusCode: 400, statusMessage: 'Telefon raqam noto\'g\'ri formatda' })
  }

  if (cleanMessage.length < 5) {
    throw createError({ statusCode: 400, statusMessage: 'Xabar kamida 5 ta belgi bo\'lishi kerak' })
  }

  const BOT_TOKEN = '8632539857:AAH4K9hMY5-2H_GVorxXyEL08CCbsoRWtHo'
  const CHAT_ID = '8547913097'

  // HTML belgilarni escape qilish (injection oldini olish)
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const text = [
    '📩 <b>Yangi xabar!</b>',
    '',
    `👤 <b>Ism:</b> ${esc(cleanName)}`,
    `📞 <b>Telefon:</b> ${esc(cleanPhone)}`,
    '',
    `💬 <b>Xabar:</b>`,
    esc(cleanMessage),
    '',
    `🕐 <i>${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}</i>`,
  ].join('\n')

  try {
    await $fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: CHAT_ID,
        text,
        parse_mode: 'HTML',
      },
    })
  } catch (err) {
    console.error('Telegram xatolik:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Xabar yuborishda xatolik yuz berdi',
    })
  }

  return { success: true, message: 'Xabar muvaffaqiyatli yuborildi' }
})
