import { createTransport } from 'nodemailer'

const emailTransport = createTransport({
  host: 'mail.netangels.ru',
  secure: false,
  debug: true,
  auth: {
    user: 'notify@ychebotaev.site',
    pass: process.env['SMTP_PASS']
  }
})

export const POST = async (req: Request) => {
  const formData = await req.formData()
  const name = formData.get('name')?.toString()
  const phone = formData.get('phone')?.toString()
  const email = formData.get('email')?.toString()
  const budget = formData.get('budget')?.toString()
  const about = formData.get('about')?.toString()

  await emailTransport.sendMail({
    from: 'noreply@lists.nashural.ru',
    to: email,
    subject: `Новый контакт: ${name}`,
    html: `<div>
<p>Имя: ${name}</p>
<p>Телефон: ${phone}</p>
<p>Емейл: ${email}</p>
<p>Бюджет: ${budget}</p>
<p>О проекте:</p>
<p>${about}</p>
</div>`
  })

  return Response.redirect('/thanks')
}
