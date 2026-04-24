import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  try {
    await transporter.sendMail({
      from: `"AHS Law Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      cc: process.env.MAIL_CC,
      bcc: process.env.MAIL_BCC,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        '',
        message,
      ].join('\n'),
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr/>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    res.json({ ok: true })
  } catch (err) {
    console.error('Mail error:', err)
    res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Mail server running on port ${PORT}`))
