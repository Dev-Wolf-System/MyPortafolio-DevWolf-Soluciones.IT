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
