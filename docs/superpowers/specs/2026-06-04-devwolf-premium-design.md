# DevWolf Premium — Diseño Técnico

**Fecha:** 2026-06-04  
**Estado:** Aprobado  
**Dominio:** devwolf.com.ar

---

## Objetivo

Transformar la landing page actual en un sitio B2B de nivel premium que combine impacto visual con mecanismos de conversión reales, posicionando a DevWolf como referente en automatización e Industria 4.0 en Latinoamérica.

---

## Arquitectura de rutas

```
/                          → Landing principal (conversión + impacto)
/servicios/[slug]          → 9 páginas de detalle por servicio (SEO + profundidad)
```

Slugs de servicios:
- `transformacion-digital`
- `automatizacion-ia`
- `desarrollo-software`
- `iot-domotica`
- `infraestructura-it-ot`
- `cloud-microservicios`
- `agentes-inteligentes`
- `analitica-predictiva`
- `automatizacion-cognitiva`

---

## Fase 0 — Bugs críticos

1. Hero badge (cápsula flotante): agregar `pt-16` o `mt-20` para no solapar header fijo
2. Flecha scroll: mover a `bottom-4` o ajustar z-index para no solapar botones CTA
3. `metadataBase` en `layout.tsx`: cambiar a `https://devwolf.com.ar`

---

## Fase 1 — Conversión

### Formulario de contacto real
- Librería: `react-hook-form` + `zod` para validación
- Envío: API route `/api/contact` usando `Resend` (npm: `resend`)
- Campos: nombre, empresa, email, teléfono (opcional), mensaje, servicio de interés
- Feedback: estado loading + toast de éxito/error

### WhatsApp Floating Button
- Componente `<WhatsAppButton />` fijo bottom-right
- Animación: pulse ring en color verde (#25D366)
- Link: `https://wa.me/549XXXXXXXXX?text=Hola%20DevWolf...` (número a completar)
- Aparece después de 3s de scroll

### Calendly Embed
- Botón "Agendar diagnóstico" abre modal con Calendly inline embed
- Usar `@calendly/react-widget` o iframe simple
- URL de Calendly a configurar por el usuario

---

## Fase 2 — Secciones faltantes en landing

### Sección: Tecnologías (nueva)
- Posición: después de StatsSection
- Diseño: marquee horizontal animado (scroll infinito con framer-motion)
- Logos: n8n, Node.js, React, Python, Docker, SCADA, Kubernetes, PostgreSQL, MQTT, TypeScript, Next.js, TensorFlow
- Dos filas: dirección opuesta para efecto premium

### Sección: Cómo Trabajamos (nueva)
- Posición: después de ServicesSection
- Diseño: 4 pasos con línea conectora animada (entrada en viewport)
- Pasos: 1. Diagnóstico gratuito → 2. Propuesta a medida → 3. Implementación ágil → 4. Soporte continuo
- Cada paso: ícono animado + título + descripción corta

### Sección: Industrias (nueva)
- Posición: después de ProjectsSection
- Diseño: grid 3x2 con cards glassmorphism
- Sectores: Industrial/Manufactura, Agroindustria, Comercio/Retail, Salud, Logística, Construcción
- Hover: glow effect con ícono sectorial

### Sección: Testimonios (nueva)
- Posición: antes de AboutSection
- Diseño: 3 cards con quote, nombre, empresa, rol
- Animación: stagger en viewport
- Contenido: placeholder profesional hasta tener testimonios reales

### Hero — Mejoras visuales
- Fondo: mesh gradient animado CSS (keyframes, sin Three.js)
- Mantener performance (no WebGL)

---

## Fase 3 — Páginas de servicio

### Template `/servicios/[slug]`

Estructura de cada página:
1. **Hero del servicio**: ícono grande animado + título + descripción expandida + CTA
2. **Propuesta de valor**: 3-4 beneficios clave con íconos
3. **Casos de uso**: 2-3 ejemplos reales o representativos del sector
4. **Stack tecnológico**: badges con tecnologías específicas del servicio
5. **Proceso**: mini-timeline de implementación (3 pasos)
6. **CTA final**: "Agendar diagnóstico gratuito" → abre Calendly o scroll a contacto

### Generación de datos
- Archivo: `src/data/services.ts` — array con objeto por cada servicio
- Campos: `slug`, `title`, `description`, `longDescription`, `benefits[]`, `useCases[]`, `techStack[]`, `icon`
- `generateStaticParams()` en `app/servicios/[slug]/page.tsx`
- Metadata dinámica por página (título, descripción, OG)

### Actualización de ServicesSection
- Cada card: `href={/servicios/${service.slug}}`
- "Saber más →" usa `<Link>` de Next.js

---

## Stack adicional requerido

```bash
npm install react-hook-form zod @hookform/resolvers resend
```

Opcional (si se usa Calendly):
```bash
npm install react-calendly
```

---

## Consideraciones de performance

- Mesh gradient: CSS puro con `@keyframes`, sin canvas/WebGL
- Tech marquee: `framer-motion` con `useAnimationControls`, pause on hover
- Imágenes de logos: SVG inline o Next.js `<Image>` con tamaño fijo
- Páginas de servicio: generación estática (`generateStaticParams`)
- Formulario: no bloquea render (cliente puro con API route)

---

## SEO

- `metadataBase`: `https://devwolf.com.ar`
- Cada página de servicio: metadata única con keyword del servicio
- OG image: dinámica via `opengraph-image.tsx` (fase futura)
- `sitemap.xml`: generado con `app/sitemap.ts`

---

## Archivos nuevos a crear

```
src/
├── data/
│   └── services.ts                    # Data de los 9 servicios
├── app/
│   ├── servicios/
│   │   └── [slug]/
│   │       └── page.tsx               # Template de servicio
│   └── api/
│       └── contact/
│           └── route.ts               # API route de formulario
├── components/
│   ├── sections/
│   │   ├── technologies-section.tsx   # Marquee de logos
│   │   ├── process-section.tsx        # Cómo trabajamos
│   │   ├── industries-section.tsx     # Industrias
│   │   └── testimonials-section.tsx   # Testimonios
│   └── ui/
│       ├── whatsapp-button.tsx        # Botón flotante WA
│       └── contact-form.tsx           # Formulario
```

---

## Archivos modificados

```
src/app/layout.tsx                     # Fix metadataBase
src/app/page.tsx                       # Agregar nuevas secciones
src/components/sections/hero-section.tsx     # Fix bugs + mesh gradient
src/components/sections/services-section.tsx # Links a páginas de detalle
src/components/sections/contact-section.tsx  # Reemplazar mailto por form
```
