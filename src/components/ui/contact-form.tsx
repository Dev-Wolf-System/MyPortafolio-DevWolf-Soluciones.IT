'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from './button'
import { Loader2, CheckCircle2, Send } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Nombre requerido'),
  company: z.string().optional(),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type FormData = z.infer<typeof schema>

const serviceOptions = [
  'Transformación Digital',
  'Automatización con IA',
  'Desarrollo de Software',
  'IoT y Domótica',
  'Infraestructura IT/OT',
  'Cloud y Microservicios',
  'Agentes Inteligentes',
  'Analítica Predictiva',
  'Automatización Cognitiva',
  'Otro / No estoy seguro',
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      setSubmitted(true)
      reset()
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle2 className="h-16 w-16 text-primary" />
        <h3 className="text-2xl font-semibold">¡Mensaje enviado!</h3>
        <p className="text-muted-foreground">Te respondemos en menos de 24 horas hábiles.</p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium mb-1.5 block">
            Nombre <span className="text-destructive">*</span>
          </label>
          <input
            {...register('name')}
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium mb-1.5 block">Empresa</label>
          <input
            {...register('company')}
            placeholder="Tu empresa (opcional)"
            className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium mb-1.5 block">
            Email <span className="text-destructive">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="tu@empresa.com"
            className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium mb-1.5 block">Teléfono</label>
          <input
            {...register('phone')}
            placeholder="+54 9 XXX XXX XXXX"
            className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-1.5 block">Servicio de interés</label>
        <select
          {...register('service')}
          className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
        >
          <option value="">Seleccionar servicio...</option>
          {serviceOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium mb-1.5 block">
          Mensaje <span className="text-destructive">*</span>
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Contanos brevemente qué necesitás automatizar o desarrollar..."
          className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full text-base py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <><Send className="mr-2 h-4 w-4" />Enviar mensaje</>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Respuesta garantizada en menos de 24hs hábiles • Sin compromiso
      </p>
    </form>
  )
}
