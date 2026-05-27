const fs = require('fs');

const newEs = {
  nav: {
    home: "Inicio",
    about: "La Firma",
    services: "Servicios",
    cases: "Casos",
    methodology: "Metodología",
    pricing: "Honorarios",
    contact: "Solicitar Consulta",
    environment: "Medioambiente",
  },
  hero: {
    title1: "Transformamos operaciones",
    title2: "de lujo en activos de alto rendimiento",
    description: "EHP es la firma boutique de referencia para hoteles 5★, resorts premium y cadenas de lujo que buscan optimizar EBITDA, elevar su posicionamiento ESG y alcanzar excelencia operativa sostenida.",
    cta1: "Solicitar diagnóstico ejecutivo",
    cta2: "Ver casos de éxito",
  },
  about: {
    title1: "No somos una consultora genérica.",
    title2: "Somos su ventaja competitiva.",
    p1: "EHP — Environmental & Hospitality Partners — nació de una convicción: el sector de hospitality de lujo merece una consultora que hable su lenguaje, conozca sus operaciones desde dentro y sea capaz de integrar en una sola propuesta los tres grandes vectores de creación de valor del siglo XXI.",
    p2: "Nuestros socios han dirigido hoteles antes de asesorarlos. Han ocupado posiciones como General Managers, COOs y Directores de Sostenibilidad en propiedades de cinco estrellas en Europa, Oriente Medio y las Américas.",
    metric1: "40+ Propiedades asesoradas",
    metric2: "€180M Valor creado documentado",
    metric3: "78% Tasa de renovación",
  },
  services: {
    title1: "Líneas de práctica",
    title2: "Práctica integrada de alto impacto",
    s1: {
      title: "Auditoría Operativa & Revenue Intelligence",
      desc: "Diagnóstico exhaustivo de 360° de la operación hotelera con foco en RevPAR, GOP y eficiencia de OPEX. Identificamos oportunidades de mejora ocultas y diseñamos el roadmap con cada insight cuantificado en euros.",
      d1: "Benchmarking competitivo STR & RevPAR gap analysis",
      d2: "Análisis de CPOR y ratios departamentales",
      d3: "Optimización de pricing, yield & channel mix",
    },
    s2: {
      title: "Estrategia ESG & Sostenibilidad Premium",
      desc: "Diseño e implementación de estrategias de sostenibilidad que mejoran el ESG score, reducen costes energéticos y se convierten en activo de marketing. Transformamos el compliance ambiental en ventaja competitiva.",
      d1: "Medición huella de carbono Scope 1, 2 y 3",
      d2: "Certificaciones LEED, BREEAM, Green Key, ISO 50001",
      d3: "Estrategia ESG reporting (GRI, TCFD, ESRS)",
    },
    s3: {
      title: "Consultoría de Medio Ambiente & Cumplimiento",
      desc: "Gestión integral de los aspectos medioambientales y legales de las operaciones hoteleras. Anticipamos regulaciones emergentes y construimos un marco de compliance robusto que protege la propiedad y diferencia su posicionamiento.",
      d1: "Evaluación de impacto ambiental",
      d2: "ISO 14001:2015 — Sistema de Gestión Ambiental",
      d3: "Gestión estratégica de residuos y recursos hídricos",
    },
    s4: {
      title: "Formación Profesional & Desarrollo de Talento",
      desc: "Programas de formación a medida para equipos directivos y operativos en hospitality de lujo. Metodologías de aprendizaje experiencial diseñadas específicamente para propiedades de cinco estrellas.",
      d1: "Leadership programs para GMs y Heads of Department",
      d2: "Excelencia en servicio ultra-luxury",
      d3: "Cultura de sostenibilidad operativa",
    },
  },
  cases: {
    title: "Casos de Éxito",
    challenge: "El Desafío",
    intervention: "La Intervención",
    c1: {
      title: "Transformación de RevPAR en Resort de 280 habitaciones",
      challenge: "Auditoría Operativa & Revenue · Resort Caribe 5★",
      impact: "Diagnóstico integral de operaciones con revisión de pricing, mix de canales y eficiencia departamental. Implementación de revenue management avanzado y renegociación de contratos.",
      metric: "+31% RevPAR en 12M",
    },
    c2: {
      title: "Certificación LEED Gold e implementación Net Zero",
      challenge: "ESG & Sostenibilidad · Hotel Urbano 5★ Europa",
      impact: "Hoja de ruta de sostenibilidad completa, LEED Gold en 14 meses y elevación del ESG score institucional para acceso a capital de inversión verde.",
      metric: "LEED Gold Certified",
    },
    c3: {
      title: "Programa de Excelencia Operativa para 600 profesionales",
      challenge: "Formación · Cadena Premium 12 Propiedades",
      impact: "Programa formativo integral para equipos directivos y de línea de una cadena en expansión, con módulos de servicio, sostenibilidad y liderazgo.",
      metric: "600+ Formados",
    },
    c4: {
      title: "Setup estratégico completo · Nueva apertura 180 habitaciones",
      challenge: "Pre-Opening Advisory · Ultra-Luxury Resort Mediterráneo",
      impact: "Acompañamiento desde fase de concepto hasta 90 días post-apertura. Diseño operativo, estrategia ESG integrada y formación de apertura.",
      metric: "94% Ocupación mes 6",
    },
  },
  methodology: {
    title: "El framework EHP Quantum",
    s1: {
      phase: "Semanas 1–3",
      title: "Discovery · Diagnóstico Profundo",
      desc: "Inmersión operativa de 360°: análisis financiero P&L departamental, auditoría de procesos clave, mystery guest, benchmarking STR, assessment medioambiental y entrevistas con los 20 stakeholders más críticos.",
    },
    s2: {
      phase: "Semanas 4–6",
      title: "Diagnosis · Síntesis Ejecutiva",
      desc: "Transformamos datos brutos en inteligencia estratégica accionable. Cada oportunidad incluye impacto potencial en EBITDA en euros y nivel de confianza estadístico.",
    },
    s3: {
      phase: "Semanas 7–14",
      title: "Design · Estrategia & Hoja de Ruta",
      desc: "Co-creación con el equipo directivo del plan estratégico a 12–36 meses. Diseño detallado de iniciativas, modelo de gobierno y framework de KPIs con targets trimestrales auditables.",
    },
    s4: {
      phase: "Mes 4–12",
      title: "Deploy · Implementación & Seguimiento",
      desc: "Ejecución disciplinada con consultores on-site, coaching continuo al equipo directivo, reporting mensual al comité directivo y ajuste dinámico según evolución de KPIs.",
    },
  },
  pricing: {
    title: "Estructura de Honorarios",
    desc: "Elija el engagement que mejor se adapta a su momento. Cada paquete está diseñado para distintos momentos del ciclo estratégico. Todos incluyen propuesta personalizada en 48h y garantía de ROI.",
    recommended: "Más solicitado",
    requestQuote: "Solicitar propuesta personalizada",
    p1: {
      name: "EHP Diagnostic",
      investment: "€18K",
      includes: "Proyecto único · 3–4 semanas · Sin retainer. Auditoría operativa 360° completa, Análisis financiero P&L departamental, Benchmarking STR vs set competitivo, Assessment ESG / medioambiental inicial, Mystery guest + guest journey audit.",
      cta: "Solicitar información",
    },
    p2: {
      name: "EHP Strategic Transformation",
      investment: "€65K",
      includes: "Retainer desde €8K/mes · 9–12 meses. Todo incluido en EHP Diagnostic, Diseño estratégico completo (90 días), Consultor senior on-site (2 días/semana), Estrategia ESG + CSRD/ESRS readiness, Programa de formación directiva a medida.",
      cta: "Solicitar propuesta",
    },
    p3: {
      name: "EHP Enterprise Partnership",
      investment: "A medida",
      includes: "Retainer anual · Cadenas 3+ propiedades. Cobertura multi-propiedad (3–20 hoteles), Equipo EHP dedicado (2–4 consultores), Práctica integrada: Ops + ESG + Formación, C-Suite advisory mensual, Gestión certificaciones portfolio completo.",
      cta: "Contactar directamente",
    },
  },
  contact: {
    title: "El primer paso siempre es una conversación",
    desc: "Solicitamos 45 minutos de su agenda. En ese tiempo le presentaremos tres oportunidades de mejora específicas para su propiedad — con estimación de impacto en euros — sin honorario y sin compromiso.",
    hq: "Presencia global",
    direct: "Línea directa senior",
    cities: "Madrid · Barcelona · Miami · Dubai",
    form: {
      nameError: "El nombre es requerido",
      companyError: "El hotel / grupo es requerido",
      interestError: "Seleccione un área de interés",
      emailError: "El email es requerido",
      emailInvalid: "Email inválido",
      successTitle: "Mensaje Recibido",
      successDesc: "Respuesta garantizada en menos de 24 horas. Confidencialidad total.",
      name: "Nombre",
      role: "Cargo",
      select: "Seleccionar...",
      company: "Hotel / Grupo / Propiedad",
      email: "Email corporativo",
      challenge: "Contexto del proyecto",
      optional: "Opcional",
      interest: "Área de interés principal",
      submitting: "Enviando...",
      submit: "Solicitar Diagnóstico Ejecutivo Gratuito",
      roles: {
        cLevel: "GM, CEO, Owner, COO...",
        director: "Director / VP",
        publicOfficial: "Funcionario Público",
        other: "Otro",
      },
      interests: {
        revpar: "Auditoría operativa",
        esg: "Sostenibilidad / ESG",
        guest: "Medio Ambiente / ISO",
        audit: "Formación directiva",
        asset: "Pre-Opening Advisory",
        other: "Otro",
      },
    },
  },
  footer: {
    privacy: "Política de Privacidad",
    terms: "Aviso Legal",
    rights: "Todos los derechos reservados.",
  },
  notFound: {
    title: "Página no encontrada",
    desc: "Lo sentimos, no pudimos encontrar la página que estás buscando.",
    back: "Volver al Inicio",
  },
  interim: {
    title: "Gestión Transitoria (Interim Management)",
    subtitle: "Liderazgo, discreción y control en momentos críticos.",
    subheading: "Intervención estratégica durante cambios de marca o transiciones operativas.",
    desc: "EHP asume temporalmente la gestión directiva de su propiedad para garantizar la continuidad operativa, proteger el valor del activo y liderar la transición con absoluta confidencialidad y rigor ejecutivo.",
    situations: [
      "Cambios de marca o bandera",
      "Procesos de reestructuración o concursales",
      "Transición operativa y relevo directivo",
      "Crisis de gestión o caída de rentabilidad",
      "Relanzamiento y reposicionamiento en el mercado",
    ],
  },
  mystery: {
    title: "Mystery Guest",
    subtitle: "Evaluación confidencial de más de 900 parámetros de excelencia.",
    desc: "Analizamos su propiedad de forma no invasiva y profesional, auditando cada punto de contacto del viaje del huésped para garantizar el cumplimiento de los más altos estándares internacionales de lujo.",
    journey: [
      "Reserva y pre-llegada",
      "Llegada y Check-in",
      "Estancia y confort de la habitación",
      "Consumo en Alimentos y Bebidas (F&B)",
      "Resolución de solicitudes y servicio",
      "Salida y Check-out",
      "Post-stay y seguimiento",
      "Revisión digital y reputacional",
    ],
    deliverable: "Informe final exhaustivo con acciones correctoras priorizadas.",
    cta: "Solicitar Análisis de Mystery Guest",
  },
  sustainabilityRoute: {
    title: "Ruta de Sostenibilidad",
    subtitle: "Un proceso claro y estructurado hacia la excelencia ambiental.",
    steps: [
      {
        title: "Diagnóstico",
        desc: "Evaluación inicial de la huella ambiental y prácticas actuales.",
      },
      {
        title: "Plan de Mejora",
        desc: "Diseño de estrategias personalizadas para la reducción de impacto.",
      },
      {
        title: "Implementación",
        desc: "Ejecución de iniciativas sostenibles y optimización de recursos.",
      },
      {
        title: "Medición",
        desc: "Monitoreo continuo de KPIs ambientales y progreso.",
      },
      {
        title: "Reporte",
        desc: "Elaboración de informes de sostenibilidad transparentes.",
      },
      {
        title: "Alineación",
        desc: "Cumplimiento con las mejores prácticas y estándares de la industria.",
      },
    ],
  },
  luxuryStandards: {
    title: "Estándares Internacionales de Lujo",
    subtitle: "Guía estratégica hacia el reconocimiento global.",
    desc: "En EHP, guiamos a las propiedades hacia el cumplimiento de los rigurosos estándares internacionales de lujo, como AAA, Forbes Travel Guide y The Leading Hotels of the World (LHW).",
    elements: [
      {
        title: "Análisis de Brechas (Gap Analysis)",
        desc: "Identificación precisa de las áreas de mejora frente a los requisitos del estándar.",
      },
      {
        title: "Preparación Operativa",
        desc: "Alineación de procesos, capacitación del personal y refinamiento del servicio.",
      },
      {
        title: "Documentación de Evidencias",
        desc: "Recopilación y estructuración de pruebas para respaldar el cumplimiento.",
      },
    ],
  },
  luxuryService: {
    title: "Luxury Service Partnership",
    subtitle: "Sostener y elevar la cultura de servicio con estándares internacionales.",
    desc: "Un programa premium diseñado para hoteles que buscan la excelencia continua. Nos asociamos con su propiedad para cultivar una cultura de servicio excepcional.",
    features: [
      {
        title: "Capacitación Mensual In Situ",
        desc: "Entrenamiento presencial regular para mantener la motivación y el enfoque en la excelencia.",
      },
      {
        title: "Módulos Personalizados",
        desc: "Contenido adaptado a las necesidades específicas de su propiedad y equipo.",
      },
      {
        title: "Aplicación Práctica",
        desc: "Enfoque en situaciones reales y role-playing para una asimilación efectiva.",
      },
    ],
  },
  servicesDetails: {
    labels: {
      specialties: "Especialidades Operativas",
      improves: "Mejora",
      solves: "Resuelve",
      deliverables: "Entregables",
    },
    audits: {
      title: "Auditorías Especializadas",
      items: [
        {
          name: "Auditoría Operativa",
          improves: "Eficiencia y fluidez de los procesos diarios.",
          solves: "Fricciones en el servicio y sobrecostos ocultos.",
          deliverables: "Mapa de procesos, identificación de cuellos de botella y plan de optimización.",
        },
        {
          name: "Auditoría de Estándares (Forbes/AAA)",
          improves: "Consistencia en la entrega del servicio de lujo.",
          solves: "Desviaciones en los protocolos de marca y pérdida de estrellas/diamantes.",
          deliverables: "Diagnóstico de brechas (Gap Analysis) y hoja de ruta para certificación.",
        },
      ],
    },
    consulting: {
      title: "Asesoría Estratégica",
      items: [
        {
          name: "Reorganización de Operaciones",
          improves: "Estructura organizacional y agilidad departamental.",
          solves: "Silos de comunicación y duplicidad de funciones.",
          deliverables: "Nuevo organigrama, manuales de funciones y KPIs por departamento.",
        },
        {
          name: "Diseño de SOPs",
          improves: "Estandarización y calidad del servicio.",
          solves: "Inconsistencia en la experiencia del huésped.",
          deliverables: "Manuales operativos detallados y guías de referencia rápida.",
        },
      ],
    },
    training: {
      title: "Formación Ejecutiva",
      items: [
        {
          name: "Luxury Service Partnership",
          improves: "Cultura de servicio y retención de talento.",
          solves: "Alta rotación y desmotivación del personal base.",
          deliverables: "Programa de entrenamiento continuo, evaluaciones pre/post y certificaciones internas.",
        },
        {
          name: "Liderazgo y Protocolo",
          improves: "Capacidad de gestión y presencia ejecutiva de los mandos medios.",
          solves: "Falta de empoderamiento y resolución ineficaz de quejas.",
          deliverables: "Workshops presenciales, role-playing de situaciones críticas y coaching individual.",
        },
      ],
    },
  },
};

const content = fs.readFileSync('lib/i18n/translations.ts', 'utf8');
const startIdx = content.indexOf('es: {');
let endIdx = -1;
let braceCount = 0;
for (let i = startIdx; i < content.length; i++) {
  if (content[i] === '{') braceCount++;
  if (content[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      endIdx = i;
      break;
    }
  }
}

const newEsString = 'es: ' + JSON.stringify(newEs, null, 2).replace(/"([^"]+)":/g, '$1:');
const newContent = content.substring(0, startIdx) + newEsString + content.substring(endIdx + 1);
fs.writeFileSync('lib/i18n/translations.ts', newContent);
