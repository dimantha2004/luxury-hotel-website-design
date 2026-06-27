import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, message } = body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  const clientName = name || 'User'
  const emailContentRows = `
    <tr class="label"><td width="110" valign="top" style="padding:8px 12px 8px 0;color:#8b7355;font-size:13px;font-family:Arial,sans-serif;font-weight:bold">Type</td><td style="padding:8px 0;color:#1a1410;font-size:14px;font-family:Arial,sans-serif;border-bottom:1px solid #eee">Contact Form Submission</td></tr>
    <tr class="label"><td width="110" valign="top" style="padding:8px 12px 8px 0;color:#8b7355;font-size:13px;font-family:Arial,sans-serif;font-weight:bold">Full Name</td><td style="padding:8px 0;color:#1a1410;font-size:14px;font-family:Arial,sans-serif;border-bottom:1px solid #eee">${name || ''}</td></tr>
    <tr class="label"><td width="110" valign="top" style="padding:8px 12px 8px 0;color:#8b7355;font-size:13px;font-family:Arial,sans-serif;font-weight:bold">Email</td><td style="padding:8px 0;color:#1a1410;font-size:14px;font-family:Arial,sans-serif;border-bottom:1px solid #eee">${email || ''}</td></tr>
    <tr class="label"><td width="110" valign="top" style="padding:8px 12px 8px 0;color:#8b7355;font-size:13px;font-family:Arial,sans-serif;font-weight:bold">Message</td><td style="padding:8px 0;color:#1a1410;font-size:14px;font-family:Arial,sans-serif">${message || ''}</td></tr>
  `

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    @media only screen and (max-width: 600px) {
      .container { padding: 20px !important; }
      .card { padding: 16px !important; }
      .label td { display: block !important; width: 100% !important; padding: 6px 0 !important; }
      .header h1 { font-size: 24px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#faf9f7">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf9f7">
    <tr>
      <td align="center" style="padding:40px 12px">
        <table role="presentation" class="container" width="100%" style="max-width:560px;background:#faf9f7" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center" class="header" style="padding:0 0 28px">
              <h1 style="color:#1a1410;font-size:28px;font-family:Arial,sans-serif;margin:0">Thilina travels & stay</h1>
              <p style="color:#8b7355;font-size:15px;font-family:Arial,sans-serif;margin:6px 0 0">New Contact Message</p>
            </td>
          </tr>
          <tr>
            <td style="background:#fff;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.06)">
              <table role="presentation" class="card" width="100%" cellpadding="0" cellspacing="0" style="padding:24px">
                <tr>
                  <td style="padding:0 0 16px;border-bottom:2px solid #8b7355">
                    <h2 style="color:#1a1410;font-size:18px;font-family:Arial,sans-serif;margin:0">Message Details</h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0 0">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${emailContentRows}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:20px 0 0">
              <p style="color:#999;font-size:11px;font-family:Arial,sans-serif;margin:0">Thilina travels & stay &bull; Sent via Contact Form</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Message from ${clientName}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    const errorMsg = err instanceof Error ? err.message : 'Failed to send email'
    return NextResponse.json({ error: errorMsg }, { status: 500 })
  }
}
