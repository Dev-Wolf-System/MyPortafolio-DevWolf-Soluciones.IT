# DevWolf Premium — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar la landing de DevWolf en un sitio B2B premium con impacto visual máximo y conversión real mediante formulario, WhatsApp, páginas de servicio y secciones faltantes.

**Architecture:** Landing-First — homepage (`/`) es el hub de conversión con todas las secciones; cada servicio tiene su propia ruta estática (`/servicios/[slug]`) generada con `generateStaticParams`. Formulario de contacto via API Route + Resend.

**Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion, react-hook-form, zod, Resend

---

## File Map

### Nuevos archivos
- `src/data/services.ts` — data de los 9 servicios (slug, título, descripción, beneficios, tech stack)
- `src/app/servicios/[slug]/page.tsx` — template de página de servicio (estático)
- `src/app/api/contact/route.ts` — API route para envío de formulario vía Resend
- `src/components/sections/technologies-section.tsx` — marquee animado de logos
- `src/components/sections/process-section.tsx` — "Cómo trabajamos" (4 pasos)
- `src/components/sections/industries-section.tsx` — industrias atendidas
- `src/components/sections/testimonials-section.tsx` — 3 tarjetas de testimonios
- `src/components/ui/whatsapp-button.tsx` — botón flotante de WhatsApp
- `src/components/ui/contact-form.tsx` — formulario con react-hook-form + zod

### Archivos modificados
- `src/app/layout.tsx` — fix metadataBase URL
- `src/app/page.tsx` — agregar nuevas secciones en orden correcto
- `src/components/sections/hero-section.tsx` — fix badge + fix flecha + mesh gradient
- `src/components/sections/services-section.tsx` — links a `/servicios/[slug]`
- `src/components/sections/contact-section.tsx` — reemplazar mailto por ContactForm
- `src/components/sections/index.ts` — exportar nuevas secciones
- `src/components/ui/index.ts` — exportar nuevos componentes UI

---

## Task 1: Fix bugs críticos + metadataBase

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/components/sections/hero-section.tsx`

- [ ] **Step 1: Fix metadataBase en layout.tsx**

Cambiar línea 19 de:
```typescript
metadataBase: new URL('https://devwolf.srv878399.hstgr.cloud'),
```
A:
```typescript
metadataBase: new URL('https://devwolf.com.ar'),
```

- [ ] **Step 2: Fix badge del hero (solapa con header fijo)**

En `hero-section.tsx`, el `<div>` de Content tiene clase `"relative z-10 container max-w-6xl mx-auto text-center px-4"`. Agregar `pt-20` para compensar el header fijo de `h-16`:

```tsx
<div className="relative z-10 container max-w-6xl mx-auto text-center px-4 pt-20">
```

- [ ] **Step 3: Fix flecha scroll (solapa con botones CTA)**

La flecha está en `absolute bottom-8`. Los botones CTA están dentro del content. Mover flecha a `bottom-4` y reducir su z-index no es suficiente — hay que mover los botones CTA más arriba reduciendo el `mt-10` a `mt-6` y el padding de los botones:

```tsx
{/* CTA (fuera del grid ✔️) */}
<div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
  <Button
    size="lg"
    className="text-base px-8 py-4 shadow-lg hover:shadow-primary/30"
    asChild
  >
    <a href="#contacto">
      🚀 Diagnóstico gratuito
    </a>
  </Button>

  <Button
    variant="outline"
    size="lg"
    className="w-full sm:w-auto text-base px-8 py-4 border-primary/30 hover:bg-primary/10"
    asChild
  >
    <a href="#proyectos">
      Ver proyectos
    </a>
  </Button>
</div>
```

Y cambiar la flecha a `bottom-6`:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  className="absolute bottom-6 left-1/2 -translate-x-1/2"
>
```

- [ ] **Step 4: Verificar build sin errores**

```bash
cd /mnt/d/Proyectos-Dev/Portafolio-DevWolf-Soluciones_IT && npm run build 2>&1 | tail -20
```

Expected: `✓ Compiled successfully` sin errores TypeScript.

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx src/components/sections/hero-section.tsx
git commit -m "fix: corregir badge hero, flecha scroll y metadataBase URL"
```

---

## Task 2: Instalar dependencias nuevas

**Files:** `package.json`

- [ ] **Step 1: Instalar paquetes**

```bash
cd /mnt/d/Proyectos-Dev/Portafolio-DevWolf-Soluciones_IT && npm install react-hook-form zod @hookform/resolvers resend
```

- [ ] **Step 2: Verificar instalación**

```bash
cat package.json | grep -E '"react-hook-form|"zod|"resend'
```

Expected: los 3 paquetes aparecen en `dependencies`.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "deps: agregar react-hook-form, zod y resend"
```

---

## Task 3: Data file de servicios

**Files:**
- Create: `src/data/services.ts`

- [ ] **Step 1: Crear `src/data/services.ts`**

```typescript
import { Cpu, BrainCircuit, Code2, Home, Server, CloudCog, Bot, LineChart, Workflow, LucideIcon } from 'lucide-react'

export interface ServiceData {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  icon: LucideIcon
  benefits: { title: string; description: string }[]
  useCases: { title: string; description: string }[]
  techStack: string[]
  processSteps: { step: number; title: string; description: string }[]
}

export const services: ServiceData[] = [
  {
    slug: 'transformacion-digital',
    title: 'Transformación Digital Industrial',
    shortDescription: 'Modernización de procesos y sistemas mediante estrategias digitales que integran tecnología, datos y automatización.',
    longDescription: 'Diseñamos e implementamos estrategias de transformación digital end-to-end para empresas industriales y comerciales. Integramos tecnología, procesos y datos para crear organizaciones más ágiles, eficientes y competitivas en la era digital.',
    icon: Cpu,
    benefits: [
      { title: 'Reducción de costos operativos', description: 'Eliminamos ineficiencias y procesos manuales que consumen tiempo y recursos.' },
      { title: 'Visibilidad total en tiempo real', description: 'Dashboards e indicadores que permiten decisiones basadas en datos concretos.' },
      { title: 'Escalabilidad garantizada', description: 'Arquitecturas diseñadas para crecer con el negocio sin fricción.' },
      { title: 'Integración de sistemas existentes', description: 'Conectamos sistemas legados con tecnología moderna sin interrumpir operaciones.' },
    ],
    useCases: [
      { title: 'Planta industrial con sistemas aislados', description: 'Integración de sistemas SCADA, ERP y MES en una plataforma unificada con visibilidad completa.' },
      { title: 'Empresa comercial con procesos manuales', description: 'Digitalización de flujos de aprobación, reportes y comunicación interna con automatización.' },
    ],
    techStack: ['n8n', 'Node.js', 'PostgreSQL', 'Docker', 'REST APIs', 'MQTT', 'OPC-UA'],
    processSteps: [
      { step: 1, title: 'Diagnóstico', description: 'Relevamiento de sistemas, procesos y puntos de dolor actuales.' },
      { step: 2, title: 'Diseño', description: 'Arquitectura de solución personalizada con roadmap de implementación.' },
      { step: 3, title: 'Implementación', description: 'Desarrollo e integración por fases con validación continua.' },
    ],
  },
  {
    slug: 'automatizacion-ia',
    title: 'Automatización Inteligente con IA',
    shortDescription: 'Optimización de operaciones mediante automatización avanzada impulsada por inteligencia artificial.',
    longDescription: 'Implementamos soluciones de automatización inteligente que combinan IA, machine learning y flujos de trabajo orquestados para eliminar tareas repetitivas, reducir errores y liberar capacidad humana para trabajo de mayor valor.',
    icon: BrainCircuit,
    benefits: [
      { title: '+70% reducción de tareas manuales', description: 'Automatizamos flujos completos de extremo a extremo con mínima intervención humana.' },
      { title: 'Integración con cualquier sistema', description: 'Conectamos WhatsApp, email, ERPs, APIs y bases de datos en flujos automatizados.' },
      { title: 'Escalable sin aumentar personal', description: 'Procesamos más volumen de trabajo sin incrementar costos de nómina.' },
      { title: 'Aprendizaje continuo', description: 'Los modelos mejoran con el tiempo adaptándose al negocio.' },
    ],
    useCases: [
      { title: 'Atención al cliente automatizada', description: 'Agente IA que responde consultas por WhatsApp, clasifica tickets y escala casos complejos.' },
      { title: 'Procesamiento automático de documentos', description: 'Extracción de datos de facturas, contratos y formularios con IA generativa.' },
    ],
    techStack: ['n8n', 'OpenAI API', 'LangChain', 'Python', 'WhatsApp API', 'PostgreSQL', 'Redis'],
    processSteps: [
      { step: 1, title: 'Mapeo de procesos', description: 'Identificamos flujos candidatos a automatización y calculamos ROI.' },
      { step: 2, title: 'Prototipo', description: 'Automatización piloto del proceso de mayor impacto.' },
      { step: 3, title: 'Escala', description: 'Extensión a todos los procesos identificados con monitoreo continuo.' },
    ],
  },
  {
    slug: 'desarrollo-software',
    title: 'Desarrollo de Software Empresarial',
    shortDescription: 'Aplicaciones escalables y soluciones a medida orientadas a necesidades reales de negocio.',
    longDescription: 'Desarrollamos software empresarial a medida: desde CRMs y ERPs personalizados hasta plataformas SaaS completas. Código limpio, arquitectura sólida y entrega iterativa enfocada en resultados de negocio.',
    icon: Code2,
    benefits: [
      { title: 'Fit perfecto con el negocio', description: 'Soluciones diseñadas para tus procesos, no tu negocio adaptado a software genérico.' },
      { title: 'Stack moderno y mantenible', description: 'Tecnologías actuales que garantizan longevidad y facilidad de evolución.' },
      { title: 'Entrega iterativa', description: 'MVPs funcionales en semanas, no meses. Valor entregado desde el inicio.' },
      { title: 'Documentación y transferencia', description: 'Entregamos código documentado y capacitamos al equipo interno.' },
    ],
    useCases: [
      { title: 'CRM personalizado para equipo de ventas', description: 'Sistema de gestión de clientes con pipeline, automatización de seguimiento y reportes.' },
      { title: 'Plataforma SaaS B2B', description: 'Aplicación multi-tenant con autenticación, billing y dashboard de analytics.' },
    ],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'AWS'],
    processSteps: [
      { step: 1, title: 'Discovery', description: 'Definición de requerimientos, arquitectura y estimación.' },
      { step: 2, title: 'Desarrollo', description: 'Sprints de 2 semanas con demos y feedback continuo.' },
      { step: 3, title: 'Deploy y soporte', description: 'Puesta en producción, capacitación y soporte post-lanzamiento.' },
    ],
  },
  {
    slug: 'iot-domotica',
    title: 'IoT y Domótica Inteligente',
    shortDescription: 'Ecosistemas conectados para monitoreo, control y automatización en tiempo real.',
    longDescription: 'Diseñamos e implementamos soluciones IoT para hogares inteligentes, edificios comerciales y plantas industriales. Desde la selección de sensores hasta la plataforma de gestión centralizada con alertas y automatizaciones.',
    icon: Home,
    benefits: [
      { title: 'Control centralizado', description: 'Un solo panel para gestionar iluminación, climatización, seguridad y más.' },
      { title: 'Alertas y monitoreo 24/7', description: 'Notificaciones en tiempo real ante eventos críticos o anomalías.' },
      { title: 'Ahorro energético medible', description: 'Optimización automática del consumo basada en horarios y ocupación.' },
      { title: 'Integración con sistemas existentes', description: 'Compatible con KNX, Zigbee, Z-Wave, MQTT y plataformas cloud.' },
    ],
    useCases: [
      { title: 'Edificio comercial inteligente', description: 'Control de acceso, climatización y seguridad integrados en una plataforma.' },
      { title: 'Monitoreo de variables industriales', description: 'Sensores de temperatura, presión y flujo con alertas y dashboard en tiempo real.' },
    ],
    techStack: ['MQTT', 'Node-RED', 'InfluxDB', 'Grafana', 'Zigbee', 'Home Assistant', 'Docker'],
    processSteps: [
      { step: 1, title: 'Relevamiento', description: 'Estudio del espacio, necesidades y puntos de instalación.' },
      { step: 2, title: 'Instalación', description: 'Montaje de sensores, actuadores y hub central.' },
      { step: 3, title: 'Configuración', description: 'Plataforma, automatizaciones y capacitación del usuario.' },
    ],
  },
  {
    slug: 'infraestructura-it-ot',
    title: 'Arquitectura IT/OT',
    shortDescription: 'Infraestructura robusta que conecta sistemas industriales y tecnológicos con seguridad y escalabilidad.',
    longDescription: 'Diseñamos la convergencia entre tecnología de la información (IT) y tecnología operacional (OT). Implementamos redes industriales seguras, sistemas SCADA y arquitecturas que permiten visibilidad completa desde la planta hasta la gerencia.',
    icon: Server,
    benefits: [
      { title: '99.9% uptime garantizado', description: 'Infraestructura redundante diseñada para entornos críticos sin tolerancia a fallos.' },
      { title: 'Ciberseguridad industrial', description: 'Segmentación de redes, firewalls industriales y protección de activos OT.' },
      { title: 'Visibilidad planta-gerencia', description: 'Datos operacionales disponibles en tiempo real para toma de decisiones.' },
      { title: 'Escalabilidad horizontal', description: 'Arquitectura que crece con el negocio sin rediseños costosos.' },
    ],
    useCases: [
      { title: 'Planta con sistemas SCADA aislados', description: 'Integración IT/OT con convergencia segura y visibilidad unificada.' },
      { title: 'Modernización de red industrial', description: 'Migración de protocolos legacy a arquitecturas modernas con OPC-UA.' },
    ],
    techStack: ['SCADA', 'OPC-UA', 'Modbus', 'Cisco Industrial', 'Palo Alto', 'VMware', 'Kubernetes'],
    processSteps: [
      { step: 1, title: 'Auditoría', description: 'Relevamiento de infraestructura existente e identificación de riesgos.' },
      { step: 2, title: 'Diseño', description: 'Arquitectura target con roadmap de migración sin impacto operativo.' },
      { step: 3, title: 'Implementación', description: 'Despliegue por fases con validación en cada etapa.' },
    ],
  },
  {
    slug: 'cloud-microservicios',
    title: 'Cloud & Microservicios',
    shortDescription: 'Soluciones cloud-native diseñadas para alta disponibilidad y crecimiento continuo.',
    longDescription: 'Diseñamos y desplegamos arquitecturas cloud-native basadas en microservicios que garantizan alta disponibilidad, escalabilidad automática y costos optimizados. Desde la migración de monolitos hasta plataformas SaaS de nueva generación.',
    icon: CloudCog,
    benefits: [
      { title: 'Escalabilidad automática', description: 'Los servicios escalan según demanda sin intervención manual.' },
      { title: 'Costos optimizados', description: 'Pago por uso real. Sin sobredimensionamiento de infraestructura.' },
      { title: 'Deploys sin downtime', description: 'CI/CD con blue-green deployments y rollback automático.' },
      { title: 'Multi-cloud / Hybrid', description: 'AWS, GCP, Azure o infraestructura on-premise según la necesidad.' },
    ],
    useCases: [
      { title: 'Migración de monolito a microservicios', description: 'Descomposición gradual con strangler pattern sin interrumpir el negocio.' },
      { title: 'Plataforma SaaS multi-tenant', description: 'Arquitectura cloud-native con aislamiento por tenant y autoscaling.' },
    ],
    techStack: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions', 'Nginx', 'Redis'],
    processSteps: [
      { step: 1, title: 'Assess', description: 'Análisis de arquitectura actual y definición del target state.' },
      { step: 2, title: 'Migración', description: 'Containerización y despliegue iterativo en cloud.' },
      { step: 3, title: 'Optimización', description: 'Tuning de costos, performance y observabilidad.' },
    ],
  },
  {
    slug: 'agentes-inteligentes',
    title: 'Agentes Inteligentes',
    shortDescription: 'Sistemas autónomos capaces de ejecutar tareas, analizar datos y tomar decisiones.',
    longDescription: 'Desarrollamos agentes de inteligencia artificial capaces de operar de forma autónoma: buscar información, tomar decisiones, ejecutar acciones y reportar resultados. Desde chatbots avanzados hasta agentes multi-paso que orquestan procesos complejos.',
    icon: Bot,
    benefits: [
      { title: 'Operación 24/7 sin supervisión', description: 'Agentes que trabajan de forma continua sin intervención humana.' },
      { title: 'Integración con cualquier canal', description: 'WhatsApp, email, Slack, web, APIs internas y externas.' },
      { title: 'Razonamiento contextual', description: 'Comprenden el contexto de la conversación y el negocio para respuestas precisas.' },
      { title: 'Auditable y controlable', description: 'Logs completos de decisiones. Humano siempre en el loop cuando se requiere.' },
    ],
    useCases: [
      { title: 'Agente de ventas en WhatsApp', description: 'Responde consultas, califica leads y agenda reuniones automáticamente.' },
      { title: 'Agente de monitoreo industrial', description: 'Detecta anomalías, genera reportes y ejecuta acciones correctivas definidas.' },
    ],
    techStack: ['OpenAI API', 'Anthropic Claude', 'LangChain', 'n8n', 'Python', 'WhatsApp API', 'PostgreSQL'],
    processSteps: [
      { step: 1, title: 'Definición', description: 'Alcance del agente, herramientas disponibles y criterios de escalado.' },
      { step: 2, title: 'Desarrollo', description: 'Construcción, pruebas y ajuste del comportamiento.' },
      { step: 3, title: 'Deploy y monitoreo', description: 'Puesta en producción con dashboard de métricas y alertas.' },
    ],
  },
  {
    slug: 'analitica-predictiva',
    title: 'Analítica Predictiva',
    shortDescription: 'Modelos de IA para anticipar eventos, optimizar procesos y reducir riesgos.',
    longDescription: 'Construimos modelos predictivos y plataformas de analytics que transforman datos históricos en ventaja competitiva. Desde mantenimiento predictivo en planta hasta forecasting de demanda y detección de anomalías.',
    icon: LineChart,
    benefits: [
      { title: 'Anticipación de fallas', description: 'Detección temprana de problemas antes de que impacten la operación.' },
      { title: 'Optimización de recursos', description: 'Decisiones basadas en predicciones, no en intuición.' },
      { title: 'Dashboards accionables', description: 'Visualizaciones que conectan el dato con la decisión operativa.' },
      { title: 'Modelos explicables', description: 'Resultados interpretables para equipos técnicos y de negocio.' },
    ],
    useCases: [
      { title: 'Mantenimiento predictivo en planta', description: 'Sensores + ML para predecir fallas de equipos con días de anticipación.' },
      { title: 'Forecast de demanda comercial', description: 'Modelos de predicción de ventas para optimización de stock y logística.' },
    ],
    techStack: ['Python', 'scikit-learn', 'TensorFlow', 'Grafana', 'InfluxDB', 'Pandas', 'FastAPI'],
    processSteps: [
      { step: 1, title: 'Data audit', description: 'Evaluación de calidad y disponibilidad de datos históricos.' },
      { step: 2, title: 'Modelado', description: 'Entrenamiento, validación y selección del modelo.' },
      { step: 3, title: 'Integración', description: 'Deploy del modelo en producción con pipeline de actualización.' },
    ],
  },
  {
    slug: 'automatizacion-cognitiva',
    title: 'Automatización Cognitiva',
    shortDescription: 'Orquestación inteligente de procesos empresariales con mínima intervención humana.',
    longDescription: 'Combinamos RPA, IA y orquestación de flujos para automatizar procesos que requieren comprensión, juicio y adaptación. Más allá de la automatización reglas fijas — sistemas que razonan y se adaptan al contexto.',
    icon: Workflow,
    benefits: [
      { title: 'Automatización de procesos complejos', description: 'Flujos que requieren comprensión de lenguaje natural, documentos o imágenes.' },
      { title: 'Reducción de errores críticos', description: 'Validaciones automáticas que capturan errores antes de que impacten el negocio.' },
      { title: 'Adaptación al cambio', description: 'Sistemas que se ajustan cuando cambian reglas o condiciones de negocio.' },
      { title: 'ROI medible', description: 'Métricas claras de tiempo ahorrado, errores reducidos y capacidad liberada.' },
    ],
    useCases: [
      { title: 'Procesamiento de órdenes de compra', description: 'Extracción, validación y carga automática de OCs desde email a ERP.' },
      { title: 'Onboarding de clientes automatizado', description: 'Verificación de documentos, aprobación y setup de cuenta sin intervención manual.' },
    ],
    techStack: ['n8n', 'OpenAI API', 'Python', 'Tesseract OCR', 'PostgreSQL', 'Docker', 'REST APIs'],
    processSteps: [
      { step: 1, title: 'Proceso mapping', description: 'Documentación del proceso actual y diseño del flujo automatizado.' },
      { step: 2, title: 'Automatización piloto', description: 'Implementación del caso de uso de mayor ROI con validación.' },
      { step: 3, title: 'Escala', description: 'Extensión a procesos adicionales con monitoreo y mejora continua.' },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug)
}
```

- [ ] **Step 2: Verificar TypeScript**

```bash
cd /mnt/d/Proyectos-Dev/Portafolio-DevWolf-Soluciones_IT && npx tsc --noEmit 2>&1 | head -20
```

Expected: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/data/services.ts
git commit -m "feat: agregar data file con los 9 servicios"
```

---

## Task 4: API Route de formulario de contacto

**Files:**
- Create: `src/app/api/contact/route.ts`

- [ ] **Step 1: Crear API route**

```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

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
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Error al enviar mensaje' }, { status: 500 })
  }
}
```

- [ ] **Step 2: Agregar variable de entorno al .env.example (si existe) o crear .env.local**

```bash
echo "RESEND_API_KEY=re_your_api_key_here" >> /mnt/d/Proyectos-Dev/Portafolio-DevWolf-Soluciones_IT/.env.local.example
```

- [ ] **Step 3: Verificar TypeScript**

```bash
cd /mnt/d/Proyectos-Dev/Portafolio-DevWolf-Soluciones_IT && npx tsc --noEmit 2>&1 | head -20
```

Expected: sin errores.

- [ ] **Step 4: Commit**

```bash
git add src/app/api/contact/route.ts
git commit -m "feat: agregar API route de contacto con Resend + validación Zod"
```

---

## Task 5: Componente ContactForm

**Files:**
- Create: `src/components/ui/contact-form.tsx`
- Modify: `src/components/ui/index.ts`

- [ ] **Step 1: Crear ContactForm**

```typescript
// src/components/ui/contact-form.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from './button'
import { Loader2, CheckCircle2 } from 'lucide-react'

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
          '🚀 Enviar mensaje'
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Respuesta garantizada en menos de 24hs hábiles • Sin compromiso
      </p>
    </form>
  )
}
```

- [ ] **Step 2: Exportar desde index.ts**

Agregar al final de `src/components/ui/index.ts`:
```typescript
export { ContactForm } from './contact-form'
```

- [ ] **Step 3: Verificar TypeScript**

```bash
cd /mnt/d/Proyectos-Dev/Portafolio-DevWolf-Soluciones_IT && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/contact-form.tsx src/components/ui/index.ts
git commit -m "feat: agregar componente ContactForm con react-hook-form y zod"
```

---

## Task 6: WhatsApp Floating Button

**Files:**
- Create: `src/components/ui/whatsapp-button.tsx`
- Modify: `src/components/ui/index.ts`

- [ ] **Step 1: Crear WhatsAppButton**

```typescript
// src/components/ui/whatsapp-button.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP_NUMBER = '5493816000000' // ⚠️ Reemplazar con número real
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola DevWolf! Me interesa conocer más sobre sus servicios de automatización.'
)

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl"
          style={{ backgroundColor: '#25D366' }}
          aria-label="Contactar por WhatsApp"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#25D366' }} />

          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="h-7 w-7 relative z-10"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
```

- [ ] **Step 2: Exportar desde index.ts**

Agregar al final de `src/components/ui/index.ts`:
```typescript
export { WhatsAppButton } from './whatsapp-button'
```

- [ ] **Step 3: Agregar WhatsAppButton al layout global**

En `src/app/layout.tsx`, importar y agregar antes del cierre de `<body>`:

```typescript
import { WhatsAppButton } from '@/components/ui'

// Dentro del return, antes de </body>:
<WhatsAppButton />
```

- [ ] **Step 4: Verificar build**

```bash
cd /mnt/d/Proyectos-Dev/Portafolio-DevWolf-Soluciones_IT && npm run build 2>&1 | tail -15
```

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/whatsapp-button.tsx src/components/ui/index.ts src/app/layout.tsx
git commit -m "feat: agregar botón flotante de WhatsApp con animación"
```

---

## Task 7: TechnologiesSection (marquee animado)

**Files:**
- Create: `src/components/sections/technologies-section.tsx`
- Modify: `src/components/sections/index.ts`

- [ ] **Step 1: Crear TechnologiesSection**

```typescript
// src/components/sections/technologies-section.tsx
'use client'

import { motion } from 'framer-motion'

const techRow1 = [
  { name: 'n8n', color: '#EA4B71' },
  { name: 'Node.js', color: '#339933' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Kubernetes', color: '#326CE5' },
]

const techRow2 = [
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'SCADA', color: '#FF6B35' },
  { name: 'MQTT', color: '#660066' },
  { name: 'OPC-UA', color: '#4CAF50' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Grafana', color: '#F46800' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'TensorFlow', color: '#FF6F00' },
]

function TechBadge({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 whitespace-nowrap">
      <span
        className="h-2.5 w-2.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-medium text-muted-foreground">{name}</span>
    </div>
  )
}

function MarqueeRow({ items, reverse = false }: { items: typeof techRow1; reverse?: boolean }) {
  const doubled = [...items, ...items]

  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <motion.div
        className="flex gap-4"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {doubled.map((tech, i) => (
          <TechBadge key={`${tech.name}-${i}`} name={tech.name} color={tech.color} />
        ))}
      </motion.div>
    </div>
  )
}

export function TechnologiesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container text-center mb-14"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Stack Tecnológico
          </span>

          <h2 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Tecnologías que dominamos
          </h2>

          <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
            Usamos las herramientas correctas para cada desafío. Sin dogmatismo tecnológico, siempre enfocados en el resultado.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          <MarqueeRow items={techRow1} />
          <MarqueeRow items={techRow2} reverse />
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Exportar desde index.ts**

Agregar al final de `src/components/sections/index.ts`:
```typescript
export { TechnologiesSection } from './technologies-section'
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/technologies-section.tsx src/components/sections/index.ts
git commit -m "feat: agregar sección de tecnologías con marquee animado"
```

---

## Task 8: ProcessSection ("Cómo trabajamos")

**Files:**
- Create: `src/components/sections/process-section.tsx`
- Modify: `src/components/sections/index.ts`

- [ ] **Step 1: Crear ProcessSection**

```typescript
// src/components/sections/process-section.tsx
'use client'

import { motion } from 'framer-motion'
import { Search, FileCode2, Rocket, HeartHandshake } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Diagnóstico gratuito',
    description: 'Analizamos tus procesos actuales, identificamos cuellos de botella y calculamos el ROI potencial de la automatización. Sin costo, sin compromiso.',
    color: 'from-primary to-accent',
  },
  {
    step: '02',
    icon: FileCode2,
    title: 'Propuesta a medida',
    description: 'Diseñamos una solución específica para tu negocio: arquitectura, tecnologías, timeline y presupuesto. Nada genérico.',
    color: 'from-accent to-secondary',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Implementación ágil',
    description: 'Desarrollamos e implementamos en sprints cortos con entregables visibles desde la primera semana. Vos vés el avance en todo momento.',
    color: 'from-secondary to-primary',
  },
  {
    step: '04',
    icon: HeartHandshake,
    title: 'Soporte continuo',
    description: 'Monitoreo, mantenimiento y evolución del sistema. Somos el socio tecnológico a largo plazo, no el proveedor que desaparece.',
    color: 'from-primary to-secondary',
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Proceso
          </span>

          <h2 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Cómo trabajamos
          </h2>

          <p className="mt-5 text-muted-foreground text-lg">
            Un proceso probado que garantiza resultados medibles desde el primer sprint.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {/* Línea conectora (solo desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Número */}
              <div className={`relative mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg shadow-primary/20`}>
                <step.icon className="h-10 w-10 text-white" />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-background border border-border text-xs font-bold text-primary">
                  {step.step}
                </span>
              </div>

              <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
          >
            🚀 Empezar con el diagnóstico gratuito →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Exportar desde index.ts**

Agregar al final de `src/components/sections/index.ts`:
```typescript
export { ProcessSection } from './process-section'
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/process-section.tsx src/components/sections/index.ts
git commit -m "feat: agregar sección Cómo Trabajamos con 4 pasos animados"
```

---

## Task 9: IndustriesSection

**Files:**
- Create: `src/components/sections/industries-section.tsx`
- Modify: `src/components/sections/index.ts`

- [ ] **Step 1: Crear IndustriesSection**

```typescript
// src/components/sections/industries-section.tsx
'use client'

import { motion } from 'framer-motion'
import { Factory, Wheat, ShoppingBag, Heart, Truck, Building2 } from 'lucide-react'

const industries = [
  {
    icon: Factory,
    title: 'Industrial / Manufactura',
    description: 'SCADA, automatización de planta, convergencia IT/OT y monitoreo de procesos productivos.',
    gradient: 'from-blue-500/10 to-primary/5',
  },
  {
    icon: Wheat,
    title: 'Agroindustria',
    description: 'Monitoreo de silos, telemetría de campo, trazabilidad y control de procesos agrícolas.',
    gradient: 'from-green-500/10 to-emerald-500/5',
  },
  {
    icon: ShoppingBag,
    title: 'Comercio / Retail',
    description: 'Automatización de ventas, CRM, gestión de stock y analytics de comportamiento de clientes.',
    gradient: 'from-purple-500/10 to-pink-500/5',
  },
  {
    icon: Heart,
    title: 'Salud',
    description: 'Sistemas de gestión de turnos, reportes clínicos automatizados e integración con equipos médicos.',
    gradient: 'from-red-500/10 to-rose-500/5',
  },
  {
    icon: Truck,
    title: 'Logística',
    description: 'Tracking en tiempo real, optimización de rutas, gestión de flotas y automatización de reportes.',
    gradient: 'from-orange-500/10 to-amber-500/5',
  },
  {
    icon: Building2,
    title: 'Construcción / Real Estate',
    description: 'Domótica, BMS para edificios inteligentes, control de acceso y automatización de instalaciones.',
    gradient: 'from-cyan-500/10 to-sky-500/5',
  },
]

export function IndustriesSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Industrias
          </span>

          <h2 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Sectores que atendemos
          </h2>

          <p className="mt-5 text-muted-foreground text-lg">
            Experiencia real en entornos exigentes. Conocemos los desafíos específicos de cada industria.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className={`group rounded-2xl border border-border bg-gradient-to-br ${industry.gradient} p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300`}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <industry.icon className="h-6 w-6" />
              </div>

              <h3 className="font-heading text-lg font-semibold">{industry.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Exportar desde index.ts**

Agregar al final de `src/components/sections/index.ts`:
```typescript
export { IndustriesSection } from './industries-section'
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/industries-section.tsx src/components/sections/index.ts
git commit -m "feat: agregar sección de industrias atendidas"
```

---

## Task 10: TestimonialsSection

**Files:**
- Create: `src/components/sections/testimonials-section.tsx`
- Modify: `src/components/sections/index.ts`

- [ ] **Step 1: Crear TestimonialsSection**

```typescript
// src/components/sections/testimonials-section.tsx
'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'DevWolf transformó completamente cómo operamos nuestra planta. El sistema SCADA que implementaron nos da visibilidad total en tiempo real. Los resultados fueron inmediatos y medibles.',
    author: 'Gerente de Operaciones',
    company: 'Sector Industrial — Tucumán',
    initials: 'GO',
  },
  {
    quote: 'Automatizamos el 80% de nuestras consultas de clientes con el agente de WhatsApp que desarrollaron. Nuestro equipo ahora se enfoca en cerrar ventas, no en responder preguntas repetitivas.',
    author: 'Director Comercial',
    company: 'Empresa de Servicios — Argentina',
    initials: 'DC',
  },
  {
    quote: 'La integración IT/OT que diseñaron nos permitió conectar sistemas que llevaban 10 años aislados. La implementación fue impecable, sin afectar la operación en ningún momento.',
    author: 'CTO',
    company: 'Planta Productora — NOA',
    initials: 'CT',
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/3 to-background" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Testimonios
          </span>

          <h2 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-8 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-primary/40 mb-4 flex-shrink-0" />

              <p className="text-muted-foreground leading-relaxed flex-1 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white text-sm font-bold flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Exportar desde index.ts**

Agregar al final de `src/components/sections/index.ts`:
```typescript
export { TestimonialsSection } from './testimonials-section'
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/testimonials-section.tsx src/components/sections/index.ts
git commit -m "feat: agregar sección de testimonios"
```

---

## Task 11: Mesh gradient animado en Hero

**Files:**
- Modify: `src/components/sections/hero-section.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Agregar keyframes de mesh gradient a globals.css**

Al final de `globals.css`, antes del cierre de `@layer utilities {}`, agregar:

```css
/* === MESH GRADIENT ANIMATED === */
@keyframes mesh-move-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

@keyframes mesh-move-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-40px, 30px) scale(0.95); }
  66% { transform: translate(30px, -20px) scale(1.05); }
}

@keyframes mesh-move-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, 40px) scale(1.1); }
}

.mesh-blob-1 {
  animation: mesh-move-1 12s ease-in-out infinite;
}

.mesh-blob-2 {
  animation: mesh-move-2 15s ease-in-out infinite;
}

.mesh-blob-3 {
  animation: mesh-move-3 10s ease-in-out infinite;
}
```

- [ ] **Step 2: Reemplazar background del Hero con mesh animado**

En `hero-section.tsx`, reemplazar el bloque de Background y Glow effects:

```tsx
{/* Mesh gradient background animado */}
<div className="absolute inset-0 overflow-hidden">
  <div className="mesh-blob-1 absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/15 blur-3xl" />
  <div className="mesh-blob-2 absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl" />
  <div className="mesh-blob-3 absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
</div>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/hero-section.tsx src/app/globals.css
git commit -m "feat: agregar mesh gradient animado en hero section"
```

---

## Task 12: Actualizar ServicesSection con links a páginas

**Files:**
- Modify: `src/components/sections/services-section.tsx`

- [ ] **Step 1: Importar Link y services data, actualizar cards**

Reemplazar el contenido completo de `services-section.tsx`:

```typescript
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/data/services'

export function ServicesSection() {
  return (
    <section id="servicios" className="py-28 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Servicios
          </span>

          <h2 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Soluciones tecnológicas de alto impacto
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Ayudamos a empresas a escalar, automatizar y evolucionar mediante tecnología avanzada.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/servicios/${service.slug}`}
                className="group block rounded-2xl border border-border bg-card p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 h-full"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="mt-5 text-sm font-medium text-primary opacity-70 group-hover:opacity-100 transition flex items-center gap-1">
                  Saber más <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar TypeScript**

```bash
cd /mnt/d/Proyectos-Dev/Portafolio-DevWolf-Soluciones_IT && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/services-section.tsx
git commit -m "feat: conectar service cards con páginas de detalle /servicios/[slug]"
```

---

## Task 13: Actualizar ContactSection con formulario real

**Files:**
- Modify: `src/components/sections/contact-section.tsx`

- [ ] **Step 1: Reemplazar contact-section.tsx completo**

```typescript
'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '@/components/ui'
import { Linkedin, Phone } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contacto" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-3xl rounded-full" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 items-start">

          {/* LEFT — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 text-sm text-primary bg-primary/5 backdrop-blur">
              Consultoría & Automatización IA
            </div>

            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
              Automatizá tu empresa y
              <span className="text-primary"> escalá sin aumentar costos</span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground">
              Completá el formulario y te contactamos en menos de 24hs con un diagnóstico personalizado para tu negocio.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm flex-shrink-0">✔</span>
                <span>Diagnóstico estratégico sin costo</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm flex-shrink-0">✔</span>
                <span>Soluciones personalizadas — nada genérico</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm flex-shrink-0">✔</span>
                <span>Impacto medible desde el primer sprint</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm flex-shrink-0">✔</span>
                <span>Respuesta garantizada en menos de 24hs</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/nahuel-carlos-agustin-lobo-398230151"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                Ver perfil profesional en LinkedIn
              </a>
              <a
                href="mailto:devwolf.contacto@gmail.com"
                className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                devwolf.contacto@gmail.com
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-xl p-8">
              <ContactForm />
            </div>

            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-2xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar TypeScript**

```bash
cd /mnt/d/Proyectos-Dev/Portafolio-DevWolf-Soluciones_IT && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/contact-section.tsx
git commit -m "feat: reemplazar contacto mailto por formulario real con ContactForm"
```

---

## Task 14: Actualizar page.tsx con nuevas secciones

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Reemplazar page.tsx**

```typescript
import { Header, Footer } from '@/components/layout'
import {
  HeroSection,
  StatsSection,
  TechnologiesSection,
  ServicesSection,
  ProcessSection,
  ProjectsSection,
  IndustriesSection,
  TestimonialsSection,
  AboutSection,
  ContactSection,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col">
        <section id="hero" className="relative">
          <HeroSection />
        </section>

        <section id="stats" className="relative">
          <StatsSection />
        </section>

        <section id="tecnologias" className="relative">
          <TechnologiesSection />
        </section>

        <section id="servicios" className="relative">
          <ServicesSection />
        </section>

        <section id="proceso" className="relative">
          <ProcessSection />
        </section>

        <section id="proyectos" className="relative">
          <ProjectsSection />
        </section>

        <section id="industrias" className="relative">
          <IndustriesSection />
        </section>

        <section id="testimonios" className="relative">
          <TestimonialsSection />
        </section>

        <section id="nosotros" className="relative">
          <AboutSection />
        </section>

        <section id="contacto" className="relative">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Build completo**

```bash
cd /mnt/d/Proyectos-Dev/Portafolio-DevWolf-Soluciones_IT && npm run build 2>&1 | tail -30
```

Expected: build exitoso, sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: integrar todas las nuevas secciones en la landing"
```

---

## Task 15: Páginas de servicio — template dinámico

**Files:**
- Create: `src/app/servicios/[slug]/page.tsx`

- [ ] **Step 1: Crear página de servicio**

```typescript
// src/app/servicios/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { services, getServiceBySlug } from '@/data/services'
import { Button } from '@/components/ui/button'
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | DevWolf Soluciones IT`,
      description: service.shortDescription,
    },
  }
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const ServiceIcon = service.icon

  return (
    <div className="min-h-screen bg-background">

      {/* NAV BACK */}
      <div className="container pt-24 pb-4">
        <Link
          href="/#servicios"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Servicios
        </Link>
      </div>

      {/* HERO */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl opacity-40 rounded-full" />

        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/30">
            <ServiceIcon className="h-10 w-10 text-white" />
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {service.title}
          </h1>

          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {service.longDescription}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 py-6" asChild>
              <a href="/#contacto">🚀 Agendar diagnóstico gratuito</a>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6 border-primary/30 hover:bg-primary/10" asChild>
              <Link href="/#servicios">Ver otros servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-14">
            ¿Por qué elegirnos para esto?
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="py-20 bg-muted/20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-14">
            Casos de uso reales
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {service.useCases.map((useCase, i) => (
              <div key={i} className="relative rounded-2xl border border-border bg-card p-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <h3 className="font-heading text-xl font-semibold">{useCase.title}</h3>
                <p className="mt-3 text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-10">
            Stack tecnológico
          </h2>

          <div className="flex flex-wrap gap-3 justify-center">
            {service.techStack.map(tech => (
              <span
                key={tech}
                className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-20 bg-muted/20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-14">
            Cómo lo implementamos
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {service.processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 blur-3xl rounded-full" />

        <div className="container relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold">
            ¿Listo para implementar
            <span className="text-primary"> {service.title}?</span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Agendá un diagnóstico gratuito. Analizamos tu caso específico y te proponemos la solución óptima.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 py-6" asChild>
              <a href="/#contacto">
                🚀 Agendar diagnóstico gratuito
              </a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Sin costo • Sin compromiso • Respuesta en menos de 24hs
          </p>
        </div>
      </section>

      {/* NAVEGACIÓN A OTROS SERVICIOS */}
      <div className="container py-12 border-t border-border">
        <div className="flex items-center justify-between">
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Todos los servicios
          </Link>

          {(() => {
            const currentIndex = services.findIndex(s => s.slug === params.slug)
            const nextService = services[(currentIndex + 1) % services.length]
            return (
              <Link
                href={`/servicios/${nextService.slug}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {nextService.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )
          })()}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Build y verificar rutas estáticas generadas**

```bash
cd /mnt/d/Proyectos-Dev/Portafolio-DevWolf-Soluciones_IT && npm run build 2>&1 | grep -E "servicios|error|Error" | head -20
```

Expected: 9 rutas `/servicios/[slug]` generadas estáticamente.

- [ ] **Step 3: Commit**

```bash
git add src/app/servicios/
git commit -m "feat: agregar páginas de servicio con template premium y generación estática"
```

---

## Task 16: Build final y verificación

- [ ] **Step 1: Build de producción completo**

```bash
cd /mnt/d/Proyectos-Dev/Portafolio-DevWolf-Soluciones_IT && npm run build 2>&1
```

Expected: `Route (app)` lista con todas las rutas. Zero errores TypeScript.

- [ ] **Step 2: Verificar rutas generadas**

Output esperado del build:
```
Route (app)                              Size     First Load JS
┌ ○ /                                   ...
├ ○ /servicios/transformacion-digital   ...
├ ○ /servicios/automatizacion-ia        ...
... (9 rutas de servicios)
```

- [ ] **Step 3: Commit final**

```bash
git add -A
git commit -m "feat: DevWolf Premium — landing mejorada + 9 páginas de servicio + formulario + WhatsApp"
```

---

## Notas de configuración post-deploy

1. **Resend API Key**: Crear cuenta en resend.com, obtener API key, agregar `RESEND_API_KEY=re_xxx` en las variables de entorno del VPS (`.env` en Docker Compose) y en el `docker-compose.yml`.

2. **Número de WhatsApp**: En `src/components/ui/whatsapp-button.tsx`, reemplazar `5493816000000` con el número real en formato internacional sin `+` ni espacios.

3. **Dominio**: Actualizar `DOMAIN_NAME` en `.env` del VPS a `devwolf.com.ar`.
