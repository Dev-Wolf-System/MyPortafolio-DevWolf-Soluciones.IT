import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Nombre requerido'),
  company: z.string().optional(),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Mensaje muy corto'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'DevWolf Contacto <onboarding@resend.dev>',
      to: ['devwolf.contacto@gmail.com'],
      subject: `Nuevo contacto: ${data.name}${data.company ? ` — ${data.company}` : ''}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        ${data.company ? `<p><strong>Empresa:</strong> ${data.company}</p>` : ''}
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ''}
        ${data.service ? `<p><strong>Servicio de interés:</strong> ${data.service}</p>` : ''}
        <p><strong>Mensaje:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0].message }, { status: 400 })
    }
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Error al enviar mensaje' }, { status: 500 })
  }
}
