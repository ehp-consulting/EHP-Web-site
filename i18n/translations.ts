export type Language = "es" | "en" | "fr" | "it" | "pt";

type TranslationType = typeof translations;

export const translations = {
  es: {
  nav: {
    home: "Inicio",
    about: "La Firma",
    services: "Servicios",
    cases: "Resultados y Casos de Estudio",
    methodology: "Metodología",
    pricing: "Honorarios",
    contact: "Solicitar Consulta",
    environment: "Medioambiente avanzado",
    environmentalPolicy: "Política Ambiental",
    departments: "Departamentos",
    mysteryGuest: "Mystery Guest",
    sustainability: "Sostenibilidad",
    interim: "Interim Management",
    lsp: "LSP",
    certifications: "Certificaciones"
  },
  hero: {
    title1: "Transformamos operaciones",
    title2: "de lujo en activos de alto rendimiento",
    description: "EHP es la firma boutique de referencia para hoteles 5★, resorts premium y cadenas de lujo que buscan optimizar EBITDA, elevar su posicionamiento ESG y alcanzar excelencia operativa sostenida.",
    cta1: "Solicitar diagnóstico ejecutivo",
    cta2: "Ver casos de éxito"
  },
  about: {
    title1: "No somos una consultora genérica.",
    title2: "Somos su ventaja competitiva.",
    p1: "EHP — Environmental & Hospitality Partners — nació de una convicción: el sector de hospitality de lujo merece una consultora que hable su lenguaje, conozca sus operaciones desde dentro y sea capaz de integrar en una sola propuesta los tres grandes vectores de creación de valor del siglo XXI.",
    p2: "Nuestros socios han dirigido hoteles antes de asesorarlos. Han ocupado posiciones como General Managers, COOs y Directores de Sostenibilidad en propiedades de cinco estrellas en Europa, Oriente Medio y las Américas.",
    metric1: "40+ Propiedades asesoradas",
    metric2: "€180M Valor creado documentado",
    metric3: "78% Tasa de renovación"
  },
  services: {
    title1: "Líneas de práctica",
    title2: "Práctica integrada de alto impacto",
    s1: {
      title: "Auditoría Operativa & Revenue Intelligence",
      desc: "Diagnóstico exhaustivo de 360° de la operación hotelera con foco en RevPAR, GOP y eficiencia de OPEX. Identificamos oportunidades de mejora ocultas y diseñamos el roadmap con cada insight cuantificado en euros.",
      d1: "Benchmarking competitivo STR & RevPAR gap analysis",
      d2: "Análisis de CPOR y ratios departamentales",
      d3: "Optimización de pricing, yield & channel mix"
    },
    s2: {
      title: "Estrategia ESG & Sostenibilidad Premium",
      desc: "Diseño e implementación de estrategias de sostenibilidad que mejoran el ESG score, reducen costes energéticos y se convierten en activo de marketing. Transformamos el compliance ambiental en ventaja competitiva.",
      d1: "Medición huella de carbono Scope 1, 2 y 3",
      d2: "Certificaciones LEED, BREEAM, Green Key, ISO 50001",
      d3: "Estrategia ESG reporting (GRI, TCFD, ESRS)"
    },
    s3: {
      title: "Consultoría de Medio Ambiente & Cumplimiento",
      desc: "Gestión integral de los aspectos medioambientales y legales de las operaciones hoteleras. Anticipamos regulaciones emergentes y construimos un marco de compliance robusto que protege la propiedad y diferencia su posicionamiento.",
      d1: "Evaluación de impacto ambiental",
      d2: "ISO 14001:2015 — Sistema de Gestión Ambiental",
      d3: "Gestión estratégica de residuos y recursos hídricos"
    },
    s4: {
      title: "Formación Profesional & Desarrollo de Talento",
      desc: "Programas de formación a medida para equipos directivos y operativos en hospitality de lujo. Metodologías de aprendizaje experiencial diseñadas específicamente para propiedades de cinco estrellas.",
      d1: "Leadership programs para GMs y Heads of Department",
      d2: "Excelencia en servicio ultra-luxury",
      d3: "Cultura de sostenibilidad operativa"
    }
  },
  cases: {
    title: "Casos de Éxito",
    challenge: "El Desafío",
    intervention: "La Intervención",
    c1: {
      title: "Transformación de RevPAR en Resort de 280 habitaciones",
      challenge: "Auditoría Operativa & Revenue · Resort Caribe 5★",
      impact: "Diagnóstico integral de operaciones con revisión de pricing, mix de canales y eficiencia departamental. Implementación de revenue management avanzado y renegociación de contratos.",
      metric: "+31% RevPAR en 12M"
    },
    c2: {
      title: "Certificación LEED Gold e implementación Net Zero",
      challenge: "ESG & Sostenibilidad · Hotel Urbano 5★ Europa",
      impact: "Hoja de ruta de sostenibilidad completa, LEED Gold en 14 meses y elevación del ESG score institucional para acceso a capital de inversión verde.",
      metric: "LEED Gold Certified"
    },
    c3: {
      title: "Programa de Excelencia Operativa para 600 profesionales",
      challenge: "Formación · Cadena Premium 12 Propiedades",
      impact: "Programa formativo integral para equipos directivos y de línea de una cadena en expansión, con módulos de servicio, sostenibilidad y liderazgo.",
      metric: "600+ Formados"
    },
    c4: {
      title: "Setup estratégico completo · Nueva apertura 180 habitaciones",
      challenge: "Pre-Opening Advisory · Ultra-Luxury Resort Mediterráneo",
      impact: "Acompañamiento desde fase de concepto hasta 90 días post-apertura. Diseño operativo, estrategia ESG integrada y formación de apertura.",
      metric: "94% Ocupación mes 6"
    }
  },
  methodology: {
    title: "El framework EHP Quantum",
    s1: {
      phase: "Semanas 1–3",
      title: "Discovery · Diagnóstico Profundo",
      desc: "Inmersión operativa de 360°: análisis financiero P&L departamental, auditoría de procesos clave, mystery guest, benchmarking STR, assessment medioambiental y entrevistas con los 20 stakeholders más críticos."
    },
    s2: {
      phase: "Semanas 4–6",
      title: "Diagnosis · Síntesis Ejecutiva",
      desc: "Transformamos datos brutos en inteligencia estratégica accionable. Cada oportunidad incluye impacto potencial en EBITDA en euros y nivel de confianza estadístico."
    },
    s3: {
      phase: "Semanas 7–14",
      title: "Design · Estrategia & Hoja de Ruta",
      desc: "Co-creación con el equipo directivo del plan estratégico a 12–36 meses. Diseño detallado de iniciativas, modelo de gobierno y framework de KPIs con targets trimestrales auditables."
    },
    s4: {
      phase: "Mes 4–12",
      title: "Deploy · Implementación & Seguimiento",
      desc: "Ejecución disciplinada con consultores on-site, coaching continuo al equipo directivo, reporting mensual al comité directivo y ajuste dinámico según evolución de KPIs."
    }
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
      cta: "Solicitar información"
    },
    p2: {
      name: "EHP Strategic Transformation",
      investment: "€65K",
      includes: "Retainer desde €8K/mes · 9–12 meses. Todo incluido en EHP Diagnostic, Diseño estratégico completo (90 días), Consultor senior on-site (2 días/semana), Estrategia ESG + CSRD/ESRS readiness, Programa de formación directiva a medida.",
      cta: "Solicitar propuesta"
    },
    p3: {
      name: "EHP Enterprise Partnership",
      investment: "A medida",
      includes: "Retainer anual · Cadenas 3+ propiedades. Cobertura multi-propiedad (3–20 hoteles), Equipo EHP dedicado (2–4 consultores), Práctica integrada: Ops + ESG + Formación, C-Suite advisory mensual, Gestión certificaciones portfolio completo.",
      cta: "Contactar directamente"
    }
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
      requestCallback: "Solicitar llamada",
      phone: "Teléfono",
      interest: "Área de interés principal",
      submitting: "Enviando...",
      submit: "Solicitar Diagnóstico Ejecutivo Gratuito",
      roles: {
        cLevel: "GM, CEO, Owner, COO...",
        director: "Director / VP",
        publicOfficial: "Funcionario Público",
        other: "Otro"
      },
      interests: {
        revpar: "Auditoría operativa",
        esg: "Sostenibilidad / ESG",
        guest: "Medio Ambiente / ISO",
        audit: "Formación directiva",
        asset: "Pre-Opening Advisory",
        other: "Otro"
      }
    }
  },
  footer: {
    privacy: "Política de Privacidad",
    terms: "Aviso Legal",
    rights: "Todos los derechos reservados."
  },
  notFound: {
    title: "Página no encontrada",
    desc: "Lo sentimos, no pudimos encontrar la página que estás buscando.",
    back: "Volver al Inicio"
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
      "Relanzamiento y reposicionamiento en el mercado"
    ]
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
      "Revisión digital y reputacional"
    ],
    deliverable: "Informe final exhaustivo con acciones correctoras priorizadas.",
    cta: "Solicitar Análisis de Mystery Guest"
  },
  environmentalPolicy: {
    title: "Política Ambiental",
    subtitle: "Nuestro compromiso con el planeta",
    content: "En EHP, reconocemos nuestra responsabilidad de minimizar el impacto ambiental de nuestras operaciones y las de nuestros clientes. Nos comprometemos a promover prácticas sostenibles, reducir las emisiones de carbono, conservar los recursos naturales y apoyar la biodiversidad. Nuestra política ambiental guía cada decisión que tomamos, asegurando que la sostenibilidad esté integrada en el núcleo de nuestra estrategia empresarial."
  },
  sustainabilityRoute: {
    title: "Ruta de Sostenibilidad",
    subtitle: "Un proceso claro y estructurado hacia la excelencia ambiental.",
    steps: [
      {
        title: "Diagnóstico",
        desc: "Evaluación inicial de la huella ambiental y prácticas actuales."
      },
      {
        title: "Plan de Mejora",
        desc: "Diseño de estrategias personalizadas para la reducción de impacto."
      },
      {
        title: "Implementación",
        desc: "Ejecución de iniciativas sostenibles y optimización de recursos."
      },
      {
        title: "Medición",
        desc: "Monitoreo continuo de KPIs ambientales y progreso."
      },
      {
        title: "Reporte",
        desc: "Elaboración de informes de sostenibilidad transparentes."
      },
      {
        title: "Alineación",
        desc: "Cumplimiento con las mejores prácticas y estándares de la industria."
      }
    ],
    esgGoals: {
      title: "Objetivos ESG Clave",
      subtitle: "Nuestro progreso hacia un futuro sostenible.",
      carbon: "Reducción de Huella de Carbono",
      water: "Conservación de Agua",
      waste: "Reducción de Residuos",
      energy: "Energía Renovable"
    }
  },
  luxuryStandards: {
    title: "Estándares Internacionales de Lujo",
    subtitle: "Guía estratégica hacia el reconocimiento global.",
    desc: "En EHP, guiamos a las propiedades hacia el cumplimiento de los rigurosos estándares internacionales de lujo, como AAA, Forbes Travel Guide y The Leading Hotels of the World (LHW).",
    elements: [
      {
        title: "Análisis de Brechas (Gap Analysis)",
        desc: "Identificación precisa de las áreas de mejora frente a los requisitos del estándar."
      },
      {
        title: "Preparación Operativa",
        desc: "Alineación de procesos, capacitación del personal y refinamiento del servicio."
      },
      {
        title: "Documentación de Evidencias",
        desc: "Recopilación y estructuración de pruebas para respaldar el cumplimiento."
      }
    ]
  },
  luxuryService: {
    title: "Luxury Service Partnership",
    subtitle: "Sostener y elevar la cultura de servicio con estándares internacionales.",
    desc: "Un programa premium diseñado para hoteles que buscan la excelencia continua. Nos asociamos con su propiedad para cultivar una cultura de servicio excepcional.",
    features: [
      {
        title: "Capacitación Mensual In Situ",
        desc: "Entrenamiento presencial regular para mantener la motivación y el enfoque en la excelencia."
      },
      {
        title: "Módulos Personalizados",
        desc: "Contenido adaptado a las necesidades específicas de su propiedad y equipo."
      },
      {
        title: "Aplicación Práctica",
        desc: "Enfoque en situaciones reales y role-playing para una asimilación efectiva."
      }
    ]
  },
  servicesDetails: {
    labels: {
      specialties: "Especialidades Operativas",
      improves: "Mejora",
      solves: "Resuelve",
      deliverables: "Entregables"
    },
    audits: {
      title: "Auditorías Especializadas",
      items: [
        {
          name: "Auditoría Operativa",
          improves: "Eficiencia y fluidez de los procesos diarios.",
          solves: "Fricciones en el servicio y sobrecostos ocultos.",
          deliverables: "Mapa de procesos, identificación de cuellos de botella y plan de optimización."
        },
        {
          name: "Auditoría de Estándares (Forbes/AAA)",
          improves: "Consistencia en la entrega del servicio de lujo.",
          solves: "Desviaciones en los protocolos de marca y pérdida de estrellas/diamantes.",
          deliverables: "Diagnóstico de brechas (Gap Analysis) y hoja de ruta para certificación."
        }
      ]
    },
    consulting: {
      title: "Asesoría Estratégica",
      items: [
        {
          name: "Reorganización de Operaciones",
          improves: "Estructura organizacional y agilidad departamental.",
          solves: "Silos de comunicación y duplicidad de funciones.",
          deliverables: "Nuevo organigrama, manuales de funciones y KPIs por departamento."
        },
        {
          name: "Diseño de SOPs",
          improves: "Estandarización y calidad del servicio.",
          solves: "Inconsistencia en la experiencia del huésped.",
          deliverables: "Manuales operativos detallados y guías de referencia rápida."
        }
      ]
    },
    training: {
      title: "Formación Ejecutiva",
      items: [
        {
          name: "Luxury Service Partnership",
          improves: "Cultura de servicio y retención de talento.",
          solves: "Alta rotación y desmotivación del personal base.",
          deliverables: "Programa de entrenamiento continuo, evaluaciones pre/post y certificaciones internas."
        },
        {
          name: "Liderazgo y Protocolo",
          improves: "Capacidad de gestión y presencia ejecutiva de los mandos medios.",
          solves: "Falta de empoderamiento y resolución ineficaz de quejas.",
          deliverables: "Workshops presenciales, role-playing de situaciones críticas y coaching individual."
        }
      ]
    }
  }
},
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      cases: "Results & Case Studies",
      methodology: "Methodology",
      pricing: "Pricing",
      contact: "Contact",
      environment: "Advanced Environment",
      environmentalPolicy: "Environmental Policy",
      departments: "Departments",
      mysteryGuest: "Mystery Guest",
      sustainability: "Sustainability",
      interim: "Interim Management",
      lsp: "LSP",
      certifications: "Certifications"
    },
    hero: {
      title1: "Strategy, Sustainability and",
      title2: "Global Transformation",
      description:
        "EHP is the reference consulting firm for the design and implementation of operational, financial, ESG, and public policy solutions in the tourism, corporate, and institutional sectors.",
      cta1: "Schedule Executive Session",
      cta2: "Explore Practice Areas",
    },
    about: {
      title1: "Operational Excellence and",
      title2: "Institutional Vision",
      p1: "EHP acts as the definitive strategic partner for private companies, public entities, and multilateral organizations. We integrate analytical rigor with deep sector expertise to solve complex challenges.",
      p2: "From hotel asset optimization and public policy design, to the implementation of ESG frameworks and the development of technological solutions. Our approach ensures organizational resilience, regulatory compliance, and sustainable growth on a global scale.",
      metric1: "Global Multisectoral Impact",
      metric2: "Organizational and Financial Optimization",
      metric3: "Institutional Development and Public Policies",
    },
    services: {
      title1: "Practice",
      title2: "Areas",
      s1: {
        title: "Strategic and Operational Consulting",
        desc: "Design and implementation of high-performance operating models for corporations and hotel chains.",
        d1: "Process optimization and operational cost reduction.",
        d2: "Expansion strategies and entry into new markets.",
        d3: "Change management and organizational restructuring.",
      },
      s2: {
        title: "Sustainability and ESG Criteria",
        desc: "Integration of environmental, social, and governance practices to maximize long-term value.",
        d1: "Design of decarbonization and Net Zero strategies.",
        d2: "ESG regulatory compliance audits.",
        d3: "Sustainability reporting under international standards (GRI, SASB).",
      },
      s3: {
        title: "Institutional Development and Public Policies",
        desc: "Advising governments and multilateral entities on the design of regulatory frameworks and development programs.",
        d1: "Design of public policies for sustainable tourism.",
        d2: "Economic and social impact assessment of projects.",
        d3: "Institutional strengthening and official training.",
      },
      s4: {
        title: "Audit and Risk Management",
        desc: "Identification, evaluation, and mitigation of operational, financial, and reputational risks.",
        d1: "Comprehensive operational and financial audits.",
        d2: "Design of enterprise risk management (ERM) frameworks.",
        d3: "Business continuity plans and crisis management.",
      },
    },
    cases: {
      title: "Impact and Results",
      challenge: "The Challenge",
      intervention: "The Intervention",
      c1: {
        title: "ESG Transformation in Global Hotel Chain",
        challenge:
          "Investor pressure to improve environmental performance without a unified strategy.",
        impact:
          "Design of a 5-year ESG roadmap and carbon footprint measurement systems.",
        metric: "25% reduction in carbon emissions in 3 years.",
      },
      c2: {
        title: "Operational Restructuring of Luxury Resort",
        challenge:
          "Decreasing profit margins and high post-pandemic operational costs.",
        impact:
          "Comprehensive operational audit and back-office process redesign.",
        metric: "18% increase in GOP (Gross Operating Profit) in 12 months.",
      },
      c3: {
        title: "National Sustainable Tourism Plan",
        challenge:
          "Government need to diversify tourism offerings while protecting ecosystems.",
        impact:
          "Development of comprehensive public policy and regulatory framework for green investments.",
        metric: "Attraction of $500M in sustainable Foreign Direct Investment.",
      },
      c4: {
        title: "Corporate Expansion Strategy",
        challenge:
          "Stagnation in mature markets and need to identify new opportunities.",
        impact:
          "Market analysis, commercial due diligence, and LATAM entry strategy.",
        metric:
          "Successful opening in 3 new countries with positive ROI in 18 months.",
      },
    },
    methodology: {
      title: "Our Methodology",
      s1: {
        phase: "Phase 01",
        title: "Diagnosis and Audit",
        desc: "Comprehensive analysis of the current situation, identifying inefficiencies, risks, and areas for improvement through financial, operational, and compliance audits.",
      },
      s2: {
        phase: "Phase 02",
        title: "Strategic Design",
        desc: "Development of tailored solutions, from corporate restructuring plans to public policy frameworks and ESG sustainability strategies.",
      },
      s3: {
        phase: "Phase 03",
        title: "Implementation and Change Management",
        desc: "Rigorous execution of designed strategies, ensuring organizational adoption through training and change management programs.",
      },
      s4: {
        phase: "Phase 04",
        title: "Monitoring and Optimization",
        desc: "Establishment of KPIs and reporting systems to measure impact, ensuring continuous improvement and long-term return on investment.",
      },
    },
    pricing: {
      title: "Consulting Plans",
      desc: "Investment structures designed to adapt to the scale and complexity of your organizational challenges.",
      recommended: "Recommended",
      requestQuote: "Request Quote",
      p1: {
        name: "Strategic Assessment",
        investment: "From $15,000 USD",
        includes:
          "Initial diagnosis, basic operational audit, and high-level recommendations roadmap.",
        cta: "Request Assessment",
      },
      p2: {
        name: "Comprehensive Transformation",
        investment: "From $50,000 USD",
        includes:
          "Complete design and implementation of operational, financial, or ESG strategies with 6 months of support.",
        cta: "Schedule Consulting",
      },
      p3: {
        name: "Institutional Advisory",
        investment: "Custom",
        includes:
          "Development of public policies, regulatory frameworks, and large-scale multilateral projects.",
        cta: "Contact Partners",
      },
    },
    contact: {
      title: "Start the Conversation",
      desc: "Our team of managing partners is available to discuss how EHP can drive your organization's transformation.",
      hq: "Headquarters",
      direct: "Direct Contact",
      cities: "London • Miami • Madrid",
      form: {
        nameError: "Name is required",
        companyError: "Company is required",
        interestError: "Select an area of interest",
        emailError: "Email is required",
        emailInvalid: "Invalid email",
        successTitle: "Message Received",
        successDesc:
          "A managing partner will contact you within the next 24 business hours.",
        name: "Full Name",
        role: "Role",
        select: "Select an option...",
        company: "Company / Institution",
        email: "Corporate Email",
        challenge: "Main Challenge",
        optional: "Optional",
        requestCallback: "Request a Callback",
        phone: "Phone Number",
        interest: "Area of Interest",
        submitting: "Sending...",
        submit: "Send Message",
        roles: {
          cLevel: "C-Level / Board",
          director: "Director / VP",
          publicOfficial: "Public Official",
          other: "Other",
        },
        interests: {
          revpar: "RevPAR and GOPPAR Optimization",
          esg: "ESG Strategy for Ultra-Luxury",
          guest: "High-Impact Guest Experience",
          audit: "Standards Audit (Forbes/Michelin)",
          asset: "Asset Management & Repositioning",
          other: "Other",
        },
      },
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved.",
    },
    notFound: {
      title: "Page Not Found",
      desc: "Sorry, we could not find the page you are looking for.",
      back: "Back to Home",
    },
    interim: {
      title: "Interim Management",
      subtitle: "Leadership, discretion, and control in critical moments.",
      subheading:
        "Strategic intervention during brand changes or operational transitions.",
      desc: "EHP temporarily assumes the executive management of your property to ensure operational continuity, protect asset value, and lead the transition with absolute confidentiality and executive rigor. Our commitment is to safeguard the hotel's value and reputation during these critical periods, ensuring a smooth and successful transition.",
      situations: [
        "Brand or flag changes",
        "Restructuring or bankruptcy proceedings",
        "Operational transition and management handover",
        "Management crisis or profitability drop",
        "Relaunch and market repositioning",
      ],
    },
    mystery: {
      title: "Mystery Guest",
      subtitle: "Confidential evaluation of over 900 excellence parameters.",
      desc: "We analyze your property in a non-invasive and professional manner, auditing every touchpoint of the guest journey to ensure compliance with the highest international luxury standards.",
      journey: [
        "Reservation and pre-arrival",
        "Arrival and Check-in",
        "Stay and room comfort",
        "Food & Beverage (F&B) consumption",
        "Request resolution and service",
        "Departure and Check-out",
        "Post-stay and follow-up",
        "Digital and reputational review",
      ],
      deliverable:
        "Comprehensive final report with prioritized corrective actions.",
      cta: "Request a Mystery Guest Analysis",
    },
    environmentalPolicy: {
      title: "Environmental Policy",
      subtitle: "Our commitment to the planet",
      content: "At EHP, we recognize our responsibility to minimize the environmental impact of our operations and those of our clients. We are committed to promoting sustainable practices, reducing carbon emissions, conserving natural resources, and supporting biodiversity. Our environmental policy guides every decision we make, ensuring that sustainability is integrated into the core of our business strategy."
    },
    sustainabilityRoute: {
      title: "Sustainability Route",
      subtitle:
        "A clear and structured process towards environmental excellence.",
      steps: [
        {
          title: "Diagnosis",
          desc: "Initial assessment of environmental footprint and current practices.",
        },
        {
          title: "Improvement Plan",
          desc: "Design of customized strategies for impact reduction.",
        },
        {
          title: "Implementation",
          desc: "Execution of sustainable initiatives and resource optimization.",
        },
        {
          title: "Measurement",
          desc: "Continuous monitoring of environmental KPIs and progress.",
        },
        {
          title: "Reporting",
          desc: "Preparation of transparent sustainability reports.",
        },
        {
          title: "Alignment",
          desc: "Compliance with industry best practices and standards.",
        },
      ],
      esgGoals: {
        title: "Key ESG Goals",
        subtitle: "Our progress towards a sustainable future.",
        carbon: "Carbon Footprint Reduction",
        water: "Water Conservation",
        waste: "Waste Reduction",
        energy: "Renewable Energy"
      }
    },
    luxuryStandards: {
      title: "International Luxury Standards",
      subtitle: "Strategic guidance towards global recognition.",
      desc: "At EHP, we guide properties toward compliance with rigorous international luxury standards, such as AAA, Forbes Travel Guide, and The Leading Hotels of the World (LHW). We do not promise automatic certification; we provide the strategic support necessary to elevate performance, ensure consistency, and operationally prepare your team for these demanding standards.",
      elements: [
        {
          title: "Gap Analysis",
          desc: "Precise identification of areas for improvement against standard requirements.",
        },
        {
          title: "Operational Preparation",
          desc: "Process alignment, staff training, and service refinement.",
        },
        {
          title: "Evidence Documentation",
          desc: "Collection and structuring of evidence to support compliance.",
        },
      ],
    },
    luxuryService: {
      title: "Luxury Service Partnership",
      subtitle:
        "Sustain and elevate service culture with international standards.",
      desc: "A premium program designed for hotels seeking continuous excellence. We partner with your property to cultivate an exceptional service culture, ensuring every guest interaction reflects the highest standards of international luxury.",
      features: [
        {
          title: "Monthly On-Site Training",
          desc: "Regular in-person training to maintain motivation and focus on excellence.",
        },
        {
          title: "Tailored Modules",
          desc: "Content adapted to the specific needs of your property and team.",
        },
        {
          title: "Practical Application",
          desc: "Focus on real situations and role-playing for effective assimilation.",
        },
      ],
    },
    servicesDetails: {
      labels: {
        specialties: "Operational Specialties",
        improves: "Improves",
        solves: "Solves",
        deliverables: "Deliverables",
      },
      audits: {
        title: "Specialized Audits",
        items: [
          {
            name: "Operational Audit",
            improves: "Efficiency and fluidity of daily processes.",
            solves: "Service frictions and hidden cost overruns.",
            deliverables:
              "Process map, bottleneck identification, and optimization plan.",
          },
          {
            name: "Standards Audit (Forbes/AAA)",
            improves: "Consistency in luxury service delivery.",
            solves: "Deviations in brand protocols and loss of stars/diamonds.",
            deliverables: "Gap Analysis and roadmap for certification.",
          },
        ],
      },
      consulting: {
        title: "Strategic Consulting",
        items: [
          {
            name: "Operations Restructuring",
            improves: "Organizational structure and departmental agility.",
            solves: "Communication silos and duplication of functions.",
            deliverables:
              "New organizational chart, functional manuals, and departmental KPIs.",
          },
          {
            name: "SOPs Design",
            improves: "Standardization and service quality.",
            solves: "Inconsistency in the guest experience.",
            deliverables:
              "Detailed operational manuals and quick reference guides.",
          },
        ],
      },
      training: {
        title: "Executive Training",
        items: [
          {
            name: "Luxury Service Partnership",
            improves: "Service culture and talent retention.",
            solves: "High turnover and demotivation of base staff.",
            deliverables:
              "Continuous training program, pre/post evaluations, and internal certifications.",
          },
          {
            name: "Leadership and Protocol",
            improves:
              "Management capacity and executive presence of middle management.",
            solves: "Lack of empowerment and ineffective complaint resolution.",
            deliverables:
              "In-person workshops, role-playing of critical situations, and individual coaching.",
          },
        ],
      },
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      cases: "Résultats et Cas",
      methodology: "Méthodologie",
      pricing: "Tarifs",
      contact: "Contact",
      environment: "Environnement Avancé",
      environmentalPolicy: "Politique Environnementale",
      departments: "Départements",
      mysteryGuest: "Mystery Guest",
      sustainability: "Durabilité",
      interim: "Management de Transition",
      lsp: "LSP",
      certifications: "Certifications"
    },
    hero: {
      title1: "Stratégie, Durabilité et",
      title2: "Transformation Globale",
      description:
        "EHP est le cabinet de conseil de référence pour la conception et la mise en œuvre de solutions opérationnelles, financières, ESG et de politiques publiques dans les secteurs du tourisme, des entreprises et des institutions.",
      cta1: "Planifier une Session Exécutive",
      cta2: "Explorer les Domaines d'Expertise",
    },
    about: {
      title1: "Excellence Opérationnelle et",
      title2: "Vision Institutionnelle",
      p1: "EHP agit comme le partenaire stratégique définitif pour les entreprises privées, les entités publiques et les organisations multilatérales. Nous intégrons la rigueur analytique à une profonde expertise sectorielle pour résoudre des défis complexes.",
      p2: "De l'optimisation des actifs hôteliers et la conception de politiques publiques, à la mise en œuvre de cadres ESG et au développement de solutions technologiques. Notre approche garantit la résilience organisationnelle, la conformité réglementaire et une croissance durable à l'échelle mondiale.",
      metric1: "Impact Multisectoriel Global",
      metric2: "Optimisation Organisationnelle et Financière",
      metric3: "Développement Institutionnel et Politiques Publiques",
    },
    services: {
      title1: "Domaines",
      title2: "d'Expertise",
      s1: {
        title: "Conseil Stratégique et Opérationnel",
        desc: "Conception et mise en œuvre de modèles opérationnels performants pour les entreprises et les chaînes hôtelières.",
        d1: "Optimisation des processus et réduction des coûts opérationnels.",
        d2: "Stratégies d'expansion et entrée sur de nouveaux marchés.",
        d3: "Gestion du changement et restructuration organisationnelle.",
      },
      s2: {
        title: "Durabilité et Critères ESG",
        desc: "Intégration des pratiques environnementales, sociales et de gouvernance pour maximiser la valeur à long terme.",
        d1: "Conception de stratégies de décarbonisation et Net Zéro.",
        d2: "Audits de conformité réglementaire ESG.",
        d3: "Rapports de durabilité selon les normes internationales (GRI, SASB).",
      },
      s3: {
        title: "Développement Institutionnel et Politiques Publiques",
        desc: "Conseil aux gouvernements et aux entités multilatérales sur la conception de cadres réglementaires et de programmes de développement.",
        d1: "Conception de politiques publiques pour le tourisme durable.",
        d2: "Évaluation de l'impact économique et social des projets.",
        d3: "Renforcement institutionnel et formation des fonctionnaires.",
      },
      s4: {
        title: "Audit et Gestion des Risques",
        desc: "Identification, évaluation et atténuation des risques opérationnels, financiers et de réputation.",
        d1: "Audits opérationnels et financiers complets.",
        d2: "Conception de cadres de gestion des risques d'entreprise (ERM).",
        d3: "Plans de continuité des activités et gestion de crise.",
      },
    },
    cases: {
      title: "Impact et Résultats",
      challenge: "Le Défi",
      intervention: "L'Intervention",
      c1: {
        title: "Transformation ESG dans une Chaîne Hôtelière Mondiale",
        challenge:
          "Pression des investisseurs pour améliorer les performances environnementales sans stratégie unifiée.",
        impact:
          "Conception d'une feuille de route ESG sur 5 ans et de systèmes de mesure de l'empreinte carbone.",
        metric: "Réduction de 25 % des émissions de carbone en 3 ans.",
      },
      c2: {
        title: "Restructuration Opérationnelle d'un Complexe de Luxe",
        challenge:
          "Baisse des marges bénéficiaires et coûts opérationnels post-pandémie élevés.",
        impact:
          "Audit opérationnel complet et refonte des processus de back-office.",
        metric:
          "Augmentation de 18 % du RBE (Résultat Brut d'Exploitation) en 12 mois.",
      },
      c3: {
        title: "Plan National de Tourisme Durable",
        challenge:
          "Nécessité gouvernementale de diversifier l'offre touristique tout en protégeant les écosystèmes.",
        impact:
          "Développement d'une politique publique complète et d'un cadre réglementaire pour les investissements verts.",
        metric:
          "Attraction de 500 M$ d'Investissements Directs Étrangers durables.",
      },
      c4: {
        title: "Stratégie d'Expansion d'Entreprise",
        challenge:
          "Stagnation sur les marchés matures et nécessité d'identifier de nouvelles opportunités.",
        impact:
          "Analyse de marché, due diligence commerciale et stratégie d'entrée en Amérique latine.",
        metric:
          "Ouverture réussie dans 3 nouveaux pays avec un ROI positif en 18 mois.",
      },
    },
    methodology: {
      title: "Notre Méthodologie",
      s1: {
        phase: "Phase 01",
        title: "Diagnostic et Audit",
        desc: "Analyse complète de la situation actuelle, identification des inefficacités, des risques et des domaines d'amélioration grâce à des audits financiers, opérationnels et de conformité.",
      },
      s2: {
        phase: "Phase 02",
        title: "Conception Stratégique",
        desc: "Développement de solutions sur mesure, des plans de restructuration d'entreprise aux cadres de politiques publiques et aux stratégies de durabilité ESG.",
      },
      s3: {
        phase: "Phase 03",
        title: "Mise en Œuvre et Gestion du Changement",
        desc: "Exécution rigoureuse des stratégies conçues, assurant l'adoption organisationnelle par des programmes de formation et de gestion du changement.",
      },
      s4: {
        phase: "Phase 04",
        title: "Suivi et Optimisation",
        desc: "Mise en place de KPI et de systèmes de reporting pour mesurer l'impact, garantissant une amélioration continue et un retour sur investissement à long terme.",
      },
    },
    pricing: {
      title: "Plans de Conseil",
      desc: "Structures d'investissement conçues pour s'adapter à l'échelle et à la complexité de vos défis organisationnels.",
      recommended: "Recommandé",
      requestQuote: "Demander un Devis",
      p1: {
        name: "Évaluation Stratégique",
        investment: "À partir de 15 000 $ USD",
        includes:
          "Diagnostic initial, audit opérationnel de base et feuille de route de recommandations de haut niveau.",
        cta: "Demander une Évaluation",
      },
      p2: {
        name: "Transformation Complète",
        investment: "À partir de 50 000 $ USD",
        includes:
          "Conception complète et mise en œuvre de stratégies opérationnelles, financières ou ESG avec 6 mois d'accompagnement.",
        cta: "Planifier une Consultation",
      },
      p3: {
        name: "Conseil Institutionnel",
        investment: "Sur Mesure",
        includes:
          "Développement de politiques publiques, de cadres réglementaires et de projets multilatéraux à grande échelle.",
        cta: "Contacter les Partenaires",
      },
    },
    contact: {
      title: "Commencez la Conversation",
      desc: "Notre équipe d'associés directeurs est disponible pour discuter de la façon dont EHP peut stimuler la transformation de votre organisation.",
      hq: "Siège Social",
      direct: "Contact Direct",
      cities: "Londres • Miami • Madrid",
      form: {
        nameError: "Le nom est requis",
        companyError: "L'entreprise est requise",
        interestError: "Sélectionnez un domaine d'intérêt",
        emailError: "L'e-mail est requis",
        emailInvalid: "E-mail invalide",
        successTitle: "Message Reçu",
        successDesc:
          "Un associé directeur vous contactera dans les prochaines 24 heures ouvrables.",
        name: "Nom Complet",
        role: "Rôle",
        select: "Sélectionnez une option...",
        company: "Entreprise / Institution",
        email: "E-mail Professionnel",
        challenge: "Défi Principal",
        optional: "Optionnel",
        requestCallback: "Demander un rappel",
        phone: "Numéro de téléphone",
        interest: "Domaine d'Intérêt",
        submitting: "Envoi en cours...",
        submit: "Envoyer le Message",
        roles: {
          cLevel: "C-Level / Conseil",
          director: "Directeur / VP",
          publicOfficial: "Fonctionnaire",
          other: "Autre",
        },
        interests: {
          revpar: "Optimisation RevPAR et GOPPAR",
          esg: "Stratégie ESG pour l'Ultra-Luxe",
          guest: "Expérience Client à Haut Impact",
          audit: "Audit des Normes (Forbes/Michelin)",
          asset: "Gestion d'Actifs et Repositionnement",
          other: "Autre",
        },
      },
    },
    footer: {
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      rights: "Tous droits réservés.",
    },
    notFound: {
      title: "Page non trouvée",
      desc: "Désolé, nous n'avons pas pu trouver la page que vous recherchez.",
      back: "Retour à l'Accueil",
    },
    interim: {
      title: "Management de Transition",
      subtitle:
        "Leadership, discrétion et contrôle dans les moments critiques.",
      subheading:
        "Intervention stratégique lors de changements de marque ou de transitions opérationnelles.",
      desc: "EHP assume temporairement la direction exécutive de votre propriété pour assurer la continuité opérationnelle, protéger la valeur de l'actif et mener la transition avec une confidentialité absolue et une rigueur exécutive. Notre engagement est de sauvegarder la valeur et la réputation de l'hôtel pendant ces périodes critiques, en assurant une transition fluide et réussie.",
      situations: [
        "Changements de marque ou de drapeau",
        "Procédures de restructuration ou de faillite",
        "Transition opérationnelle et passation de pouvoir",
        "Crise de gestion ou baisse de rentabilité",
        "Relance et repositionnement sur le marché",
      ],
    },
    mystery: {
      title: "Client Mystère",
      subtitle:
        "Évaluation confidentielle de plus de 900 paramètres d'excellence.",
      desc: "Nous analysons votre propriété de manière non invasive et professionnelle, en auditant chaque point de contact du parcours client pour garantir le respect des normes de luxe internationales les plus élevées.",
      journey: [
        "Réservation et pré-arrivée",
        "Arrivée et Check-in",
        "Séjour et confort de la chambre",
        "Consommation Restauration (F&B)",
        "Résolution des demandes et service",
        "Départ et Check-out",
        "Post-séjour et suivi",
        "Examen numérique et réputationnel",
      ],
      deliverable:
        "Rapport final exhaustif avec des actions correctives hiérarchisées.",
      cta: "Demander une Analyse Client Mystère",
    },
    environmentalPolicy: {
      title: "Politique Environnementale",
      subtitle: "Notre engagement envers la planète",
      content: "Chez EHP, nous reconnaissons notre responsabilité de minimiser l'impact environnemental de nos opérations et de celles de nos clients. Nous nous engageons à promouvoir des pratiques durables, à réduire les émissions de carbone, à conserver les ressources naturelles et à soutenir la biodiversité. Notre politique environnementale guide chaque décision que nous prenons, en veillant à ce que la durabilité soit intégrée au cœur de notre stratégie d'entreprise."
    },
    sustainabilityRoute: {
      title: "Route de la Durabilité",
      subtitle:
        "Un processus clair et structuré vers l'excellence environnementale.",
      steps: [
        {
          title: "Diagnostic",
          desc: "Évaluation initiale de l'empreinte environnementale et des pratiques actuelles.",
        },
        {
          title: "Plan d'Amélioration",
          desc: "Conception de stratégies personnalisées pour la réduction de l'impact.",
        },
        {
          title: "Mise en Œuvre",
          desc: "Exécution d'initiatives durables et optimisation des ressources.",
        },
        {
          title: "Mesure",
          desc: "Suivi continu des KPI environnementaux et des progrès.",
        },
        {
          title: "Rapport",
          desc: "Préparation de rapports de durabilité transparents.",
        },
        {
          title: "Alignement",
          desc: "Conformité aux meilleures pratiques et normes de l'industrie.",
        },
      ],
      esgGoals: {
        title: "Objectifs ESG Clés",
        subtitle: "Notre progression vers un avenir durable.",
        carbon: "Réduction de l'Empreinte Carbone",
        water: "Conservation de l'Eau",
        waste: "Réduction des Déchets",
        energy: "Énergie Renouvelable"
      }
    },
    luxuryStandards: {
      title: "Normes Internationales de Luxe",
      subtitle: "Conseils stratégiques vers une reconnaissance mondiale.",
      desc: "Chez EHP, nous guidons les propriétés vers la conformité aux normes internationales de luxe rigoureuses, telles que AAA, Forbes Travel Guide et The Leading Hotels of the World (LHW). Nous ne promettons pas de certification automatique ; nous fournissons le soutien stratégique nécessaire pour élever les performances, assurer la cohérence et préparer opérationnellement votre équipe à ces normes exigeantes.",
      elements: [
        {
          title: "Analyse des Écarts (Gap Analysis)",
          desc: "Identification précise des domaines d'amélioration par rapport aux exigences de la norme.",
        },
        {
          title: "Préparation Opérationnelle",
          desc: "Alignement des processus, formation du personnel et raffinement du service.",
        },
        {
          title: "Documentation des Preuves",
          desc: "Collecte et structuration des preuves pour soutenir la conformité.",
        },
      ],
    },
    luxuryService: {
      title: "Luxury Service Partnership",
      subtitle:
        "Soutenir et élever la culture de service avec des normes internationales.",
      desc: "Un programme premium conçu pour les hôtels en quête d'excellence continue. Nous nous associons à votre propriété pour cultiver une culture de service exceptionnelle, en veillant à ce que chaque interaction avec le client reflète les normes les plus élevées du luxe international.",
      features: [
        {
          title: "Formation Mensuelle sur Site",
          desc: "Formation en personne régulière pour maintenir la motivation et se concentrer sur l'excellence.",
        },
        {
          title: "Modules Sur Mesure",
          desc: "Contenu adapté aux besoins spécifiques de votre propriété et de votre équipe.",
        },
        {
          title: "Application Pratique",
          desc: "Focus sur des situations réelles et des jeux de rôle pour une assimilation efficace.",
        },
      ],
    },
    servicesDetails: {
      labels: {
        specialties: "Spécialités Opérationnelles",
        improves: "Améliore",
        solves: "Résout",
        deliverables: "Livrables",
      },
      audits: {
        title: "Audits Spécialisés",
        items: [
          {
            name: "Audit Opérationnel",
            improves: "Efficacité et fluidité des processus quotidiens.",
            solves: "Frictions de service et dépassements de coûts cachés.",
            deliverables:
              "Cartographie des processus, identification des goulots d'étranglement et plan d'optimisation.",
          },
          {
            name: "Audit des Normes (Forbes/AAA)",
            improves: "Cohérence dans la prestation de services de luxe.",
            solves:
              "Écarts dans les protocoles de marque et perte d'étoiles/diamants.",
            deliverables:
              "Analyse des écarts (Gap Analysis) et feuille de route pour la certification.",
          },
        ],
      },
      consulting: {
        title: "Conseil Stratégique",
        items: [
          {
            name: "Restructuration des Opérations",
            improves: "Structure organisationnelle et agilité départementale.",
            solves: "Silos de communication et duplication des fonctions.",
            deliverables:
              "Nouvel organigramme, manuels fonctionnels et KPI départementaux.",
          },
          {
            name: "Conception de SOPs",
            improves: "Standardisation et qualité de service.",
            solves: "Incohérence dans l'expérience client.",
            deliverables:
              "Manuels opérationnels détaillés et guides de référence rapide.",
          },
        ],
      },
      training: {
        title: "Formation Exécutive",
        items: [
          {
            name: "Luxury Service Partnership",
            improves: "Culture de service et rétention des talents.",
            solves: "Roulement élevé et démotivation du personnel de base.",
            deliverables:
              "Programme de formation continue, évaluations pré/post et certifications internes.",
          },
          {
            name: "Leadership et Protocole",
            improves:
              "Capacité de gestion et présence exécutive des cadres intermédiaires.",
            solves:
              "Manque d'autonomisation et résolution inefficace des plaintes.",
            deliverables:
              "Ateliers en personne, jeux de rôle sur des situations critiques et coaching individuel.",
          },
        ],
      },
    },
  },
  it: {
    nav: {
      home: "Home",
      about: "Chi Siamo",
      services: "Servizi",
      cases: "Resultati e Casi",
      methodology: "Metodologia",
      pricing: "Piani",
      contact: "Contatti",
      environment: "Ambiente Avanzato",
      environmentalPolicy: "Politica Ambientale",
      departments: "Dipartimenti",
      mysteryGuest: "Mystery Guest",
      sustainability: "Sostenibilità",
      interim: "Management di Transizione",
      lsp: "LSP",
      certifications: "Certificazioni"
    },
    hero: {
      title1: "Strategia, Sostenibilità e",
      title2: "Trasformazione Globale",
      description:
        "EHP è la società di consulenza di riferimento per la progettazione e l'implementazione di soluzioni operative, finanziarie, ESG e di politiche pubbliche nei settori del turismo, aziendale e istituzionale.",
      cta1: "Pianifica Sessione Esecutiva",
      cta2: "Esplora le Aree di Pratica",
    },
    about: {
      title1: "Eccellenza Operativa e",
      title2: "Visione Istituzionale",
      p1: "EHP agisce come partner strategico definitivo per aziende private, enti pubblici e organizzazioni multilaterali. Integriamo rigore analitico con profonda esperienza settoriale per risolvere sfide complesse.",
      p2: "Dall'ottimizzazione degli asset alberghieri e la progettazione di politiche pubbliche, all'implementazione di framework ESG e allo sviluppo di soluzioni tecnologiche. Il nostro approccio garantisce resilienza organizzativa, conformità normativa e crescita sostenibile su scala globale.",
      metric1: "Impatto Multisettoriale Globale",
      metric2: "Ottimizzazione Organizzativa e Finanziaria",
      metric3: "Sviluppo Istituzionale e Politiche Pubbliche",
    },
    services: {
      title1: "Aree di",
      title2: "Pratica",
      s1: {
        title: "Consulenza Strategica e Operativa",
        desc: "Progettazione e implementazione di modelli operativi ad alte prestazioni per aziende e catene alberghiere.",
        d1: "Ottimizzazione dei processi e riduzione dei costi operativi.",
        d2: "Strategie di espansione e ingresso in nuovi mercati.",
        d3: "Gestione del cambiamento e ristrutturazione organizzativa.",
      },
      s2: {
        title: "Sostenibilità e Criteri ESG",
        desc: "Integrazione di pratiche ambientali, sociali e di governance per massimizzare il valore a lungo termine.",
        d1: "Progettazione di strategie di decarbonizzazione e Net Zero.",
        d2: "Audit di conformità normativa ESG.",
        d3: "Report di sostenibilità secondo standard internazionali (GRI, SASB).",
      },
      s3: {
        title: "Sviluppo Istituzionale e Politiche Pubbliche",
        desc: "Consulenza a governi ed enti multilaterali sulla progettazione di quadri normativi e programmi di sviluppo.",
        d1: "Progettazione di politiche pubbliche per il turismo sostenibile.",
        d2: "Valutazione dell'impatto economico e sociale dei progetti.",
        d3: "Rafforzamento istituzionale e formazione dei funzionari.",
      },
      s4: {
        title: "Audit e Gestione dei Rischi",
        desc: "Identificazione, valutazione e mitigazione dei rischi operativi, finanziari e reputazionali.",
        d1: "Audit operativi e finanziari completi.",
        d2: "Progettazione di framework di gestione dei rischi aziendali (ERM).",
        d3: "Piani di continuità aziendale e gestione delle crisi.",
      },
    },
    cases: {
      title: "Impatto e Risultati",
      challenge: "La Sfida",
      intervention: "L'Intervento",
      c1: {
        title: "Trasformazione ESG in una Catena Alberghiera Globale",
        challenge:
          "Pressione degli investitori per migliorare le prestazioni ambientali senza una strategia unificata.",
        impact:
          "Progettazione di una roadmap ESG di 5 anni e sistemi di misurazione dell'impronta di carbonio.",
        metric: "Riduzione del 25% delle emissioni di carbonio in 3 anni.",
      },
      c2: {
        title: "Ristrutturazione Operativa di un Resort di Lusso",
        challenge:
          "Margini di profitto in calo e alti costi operativi post-pandemia.",
        impact:
          "Audit operativo completo e riprogettazione dei processi di back-office.",
        metric: "Aumento del 18% del GOP (Gross Operating Profit) in 12 mesi.",
      },
      c3: {
        title: "Piano Nazionale per il Turismo Sostenibile",
        challenge:
          "Necessità governativa di diversificare l'offerta turistica proteggendo gli ecosistemi.",
        impact:
          "Sviluppo di una politica pubblica completa e di un quadro normativo per gli investimenti verdi.",
        metric:
          "Attrazione di $500M in Investimenti Diretti Esteri sostenibili.",
      },
      c4: {
        title: "Strategia di Espansione Aziendale",
        challenge:
          "Stagnazione nei mercati maturi e necessità di identificare nuove opportunità.",
        impact:
          "Analisi di mercato, due diligence commerciale e strategia di ingresso in LATAM.",
        metric:
          "Apertura di successo in 3 nuovi paesi con ROI positivo in 18 mesi.",
      },
    },
    methodology: {
      title: "La Nostra Metodologia",
      s1: {
        phase: "Fase 01",
        title: "Diagnosi e Audit",
        desc: "Analisi completa della situazione attuale, identificazione di inefficienze, rischi e aree di miglioramento attraverso audit finanziari, operativi e di conformità.",
      },
      s2: {
        phase: "Fase 02",
        title: "Progettazione Strategica",
        desc: "Sviluppo di soluzioni su misura, dai piani di ristrutturazione aziendale ai quadri di politiche pubbliche e alle strategie di sostenibilità ESG.",
      },
      s3: {
        phase: "Fase 03",
        title: "Implementazione e Gestione del Cambiamento",
        desc: "Esecuzione rigorosa delle strategie progettate, garantendo l'adozione organizzativa attraverso programmi di formazione e gestione del cambiamento.",
      },
      s4: {
        phase: "Fase 04",
        title: "Monitoraggio e Ottimizzazione",
        desc: "Istituzione di KPI e sistemi di reporting per misurare l'impatto, garantendo un miglioramento continuo e un ritorno sull'investimento a lungo termine.",
      },
    },
    pricing: {
      title: "Piani di Consulenza",
      desc: "Strutture di investimento progettate per adattarsi alla scala e alla complessità delle vostre sfide organizzative.",
      recommended: "Consigliato",
      requestQuote: "Richiedi Preventivo",
      p1: {
        name: "Valutazione Strategica",
        investment: "Da $15.000 USD",
        includes:
          "Diagnosi iniziale, audit operativo di base e roadmap di raccomandazioni di alto livello.",
        cta: "Richiedi Valutazione",
      },
      p2: {
        name: "Trasformazione Completa",
        investment: "Da $50.000 USD",
        includes:
          "Progettazione completa e implementazione di strategie operative, finanziarie o ESG con 6 mesi di supporto.",
        cta: "Pianifica Consulenza",
      },
      p3: {
        name: "Consulenza Istituzionale",
        investment: "Su Misura",
        includes:
          "Sviluppo di politiche pubbliche, quadri normativi e progetti multilaterali su larga scala.",
        cta: "Contatta i Partner",
      },
    },
    contact: {
      title: "Inizia la Conversazione",
      desc: "Il nostro team di managing partner è disponibile per discutere di come EHP può guidare la trasformazione della tua organizzazione.",
      hq: "Sede Centrale",
      direct: "Contatto Diretto",
      cities: "Londra • Miami • Madrid",
      form: {
        nameError: "Il nome è obbligatorio",
        companyError: "L'azienda è obbligatoria",
        interestError: "Seleziona un'area di interesse",
        emailError: "L'email è obbligatoria",
        emailInvalid: "Email non valida",
        successTitle: "Messaggio Ricevuto",
        successDesc:
          "Un managing partner ti contatterà entro le prossime 24 ore lavorative.",
        name: "Nome Completo",
        role: "Ruolo",
        select: "Seleziona un'opzione...",
        company: "Azienda / Istituzione",
        email: "Email Aziendale",
        challenge: "Sfida Principale",
        optional: "Opzionale",
        requestCallback: "Richiedi una richiamata",
        phone: "Numero di telefono",
        interest: "Area di Interesse",
        submitting: "Invio in corso...",
        submit: "Invia Messaggio",
        roles: {
          cLevel: "C-Level / Consiglio",
          director: "Direttore / VP",
          publicOfficial: "Funzionario Pubblico",
          other: "Altro",
        },
        interests: {
          revpar: "Ottimizzazione RevPAR e GOPPAR",
          esg: "Strategia ESG per Ultra-Lusso",
          guest: "Esperienza Ospite ad Alto Impatto",
          audit: "Audit degli Standard (Forbes/Michelin)",
          asset: "Gestione Asset e Riposizionamento",
          other: "Altro",
        },
      },
    },
    footer: {
      privacy: "Informativa sulla Privacy",
      terms: "Termini di Servizio",
      rights: "Tutti i diritti riservati.",
    },
    notFound: {
      title: "Pagina non trovata",
      desc: "Siamo spiacenti, non siamo riusciti a trovare la pagina che stai cercando.",
      back: "Torna alla Home",
    },
    interim: {
      title: "Temporary Management",
      subtitle: "Leadership, discrezione e controllo nei momenti critici.",
      subheading:
        "Intervento strategico durante i cambi di marchio o le transizioni operative.",
      desc: "EHP assume temporaneamente la direzione esecutiva della tua proprietà per garantire la continuità operativa, proteggere il valore dell'asset e guidare la transizione con assoluta riservatezza e rigore esecutivo. Il nostro impegno è salvaguardare il valore e la reputazione dell'hotel durante questi periodi critici, garantendo una transizione fluida e di successo.",
      situations: [
        "Cambiamenti di marchio o bandiera",
        "Procedure di ristrutturazione o fallimentari",
        "Transizione operativa e passaggio di consegne",
        "Crisi di gestione o calo della redditività",
        "Rilancio e riposizionamento sul mercato",
      ],
    },
    mystery: {
      title: "Mystery Guest",
      subtitle:
        "Valutazione confidenziale di oltre 900 parametri di eccellenza.",
      desc: "Analizziamo la tua proprietà in modo non invasivo e professionale, verificando ogni punto di contatto del viaggio dell'ospite per garantire la conformità ai più alti standard internazionali del lusso.",
      journey: [
        "Prenotazione e pre-arrivo",
        "Arrivo e Check-in",
        "Soggiorno e comfort della camera",
        "Consumo Food & Beverage (F&B)",
        "Risoluzione delle richieste e servizio",
        "Partenza e Check-out",
        "Post-soggiorno e follow-up",
        "Revisione digitale e reputazionale",
      ],
      deliverable:
        "Rapporto finale esaustivo con azioni correttive prioritarie.",
      cta: "Richiedi un'Analisi Mystery Guest",
    },
    environmentalPolicy: {
      title: "Politica Ambientale",
      subtitle: "Il nostro impegno per il pianeta",
      content: "In EHP, riconosciamo la nostra responsabilità nel ridurre al minimo l'impatto ambientale delle nostre operazioni e di quelle dei nostri clienti. Ci impegniamo a promuovere pratiche sostenibili, ridurre le emissioni di carbonio, conservare le risorse naturali e sostenere la biodiversità. La nostra politica ambientale guida ogni decisione che prendiamo, assicurando che la sostenibilità sia integrata nel cuore della nostra strategia aziendale."
    },
    sustainabilityRoute: {
      title: "Percorso di Sostenibilità",
      subtitle:
        "Un processo chiaro e strutturato verso l'eccellenza ambientale.",
      steps: [
        {
          title: "Diagnosi",
          desc: "Valutazione iniziale dell'impronta ambientale e delle pratiche attuali.",
        },
        {
          title: "Piano di Miglioramento",
          desc: "Progettazione di strategie personalizzate per la riduzione dell'impatto.",
        },
        {
          title: "Implementazione",
          desc: "Esecuzione di iniziative sostenibili e ottimizzazione delle risorse.",
        },
        {
          title: "Misurazione",
          desc: "Monitoraggio continuo dei KPI ambientali e dei progressi.",
        },
        {
          title: "Reportistica",
          desc: "Preparazione di report di sostenibilità trasparenti.",
        },
        {
          title: "Allineamento",
          desc: "Conformità alle migliori pratiche e agli standard del settore.",
        },
      ],
      esgGoals: {
        title: "Obiettivi ESG Chiave",
        subtitle: "Il nostro progresso verso un futuro sostenibile.",
        carbon: "Riduzione dell'Impronta di Carbonio",
        water: "Conservazione dell'Acqua",
        waste: "Riduzione dei Rifiuti",
        energy: "Energia Rinnovabile"
      }
    },
    luxuryStandards: {
      title: "Standard Internazionali del Lusso",
      subtitle: "Guida strategica verso il riconoscimento globale.",
      desc: "In EHP, guidiamo le proprietà verso la conformità ai rigorosi standard internazionali del lusso, come AAA, Forbes Travel Guide e The Leading Hotels of the World (LHW). Non promettiamo una certificazione automatica; forniamo il supporto strategico necessario per elevare le prestazioni, garantire la coerenza e preparare operativamente il tuo team per questi standard esigenti.",
      elements: [
        {
          title: "Analisi dei Divari (Gap Analysis)",
          desc: "Identificazione precisa delle aree di miglioramento rispetto ai requisiti dello standard.",
        },
        {
          title: "Preparazione Operativa",
          desc: "Allineamento dei processi, formazione del personale e perfezionamento del servizio.",
        },
        {
          title: "Documentazione delle Prove",
          desc: "Raccolta e strutturazione delle prove a supporto della conformità.",
        },
      ],
    },
    luxuryService: {
      title: "Luxury Service Partnership",
      subtitle:
        "Sostenere ed elevare la cultura del servizio con standard internazionali.",
      desc: "Un programma premium progettato per gli hotel che cercano l'eccellenza continua. Collaboriamo con la tua proprietà per coltivare una cultura del servizio eccezionale, assicurando che ogni interazione con l'ospite rifletta i più alti standard del lusso internazionale.",
      features: [
        {
          title: "Formazione Mensile in Sede",
          desc: "Formazione in presenza regolare per mantenere la motivazione e concentrarsi sull'eccellenza.",
        },
        {
          title: "Moduli su Misura",
          desc: "Contenuti adattati alle esigenze specifiche della tua proprietà e del tuo team.",
        },
        {
          title: "Applicazione Pratica",
          desc: "Focus su situazioni reali e giochi di ruolo per un'assimilazione efficace.",
        },
      ],
    },
    servicesDetails: {
      labels: {
        specialties: "Specialità Operative",
        improves: "Migliora",
        solves: "Risolve",
        deliverables: "Deliverable",
      },
      audits: {
        title: "Audit Specializzati",
        items: [
          {
            name: "Audit Operativo",
            improves: "Efficienza e fluidità dei processi quotidiani.",
            solves: "Attriti nel servizio e sovraccosti nascosti.",
            deliverables:
              "Mappatura dei processi, identificazione dei colli di bottiglia e piano di ottimizzazione.",
          },
          {
            name: "Audit degli Standard (Forbes/AAA)",
            improves: "Coerenza nell'erogazione di servizi di lusso.",
            solves:
              "Deviazioni nei protocolli di marca e perdita di stelle/diamanti.",
            deliverables:
              "Analisi dei divari (Gap Analysis) e tabella di marcia per la certificazione.",
          },
        ],
      },
      consulting: {
        title: "Consulenza Strategica",
        items: [
          {
            name: "Ristrutturazione delle Operazioni",
            improves: "Struttura organizzativa e agilità dipartimentale.",
            solves: "Silos di comunicazione e duplicazione delle funzioni.",
            deliverables:
              "Nuovo organigramma, manuali funzionali e KPI dipartimentali.",
          },
          {
            name: "Progettazione di SOPs",
            improves: "Standardizzazione e qualità del servizio.",
            solves: "Incoerenza nell'esperienza dell'ospite.",
            deliverables:
              "Manuali operativi dettagliati e guide di riferimento rapido.",
          },
        ],
      },
      training: {
        title: "Formazione Esecutiva",
        items: [
          {
            name: "Luxury Service Partnership",
            improves: "Cultura del servizio e fidelizzazione dei talenti.",
            solves: "Elevato turnover e demotivazione del personale di base.",
            deliverables:
              "Programma di formazione continua, valutazioni pre/post e certificazioni interne.",
          },
          {
            name: "Leadership e Protocollo",
            improves:
              "Capacità di gestione e presenza esecutiva del middle management.",
            solves:
              "Mancanza di responsabilizzazione e risoluzione inefficace dei reclami.",
            deliverables:
              "Workshop in presenza, giochi di ruolo su situazioni critiche e coaching individuale.",
          },
        ],
      },
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      cases: "Resultados e Casos",
      methodology: "Metodologia",
      pricing: "Planos",
      contact: "Contato",
      environment: "Meio Ambiente Avançado",
      environmentalPolicy: "Política Ambiental",
      departments: "Departamentos",
      mysteryGuest: "Mystery Guest",
      sustainability: "Sustentabilidade",
      interim: "Gestão de Transição",
      lsp: "LSP",
      certifications: "Certificações"
    },
    hero: {
      title1: "Estratégia, Sustentabilidade e",
      title2: "Transformação Global",
      description:
        "A EHP é a empresa de consultoria de referência para o design e implementação de soluções operacionais, financeiras, ESG e de políticas públicas nos setores de turismo, corporativo e institucional.",
      cta1: "Agendar Sessão Executiva",
      cta2: "Explorar Áreas de Prática",
    },
    about: {
      title1: "Excelência Operacional e",
      title2: "Visão Institucional",
      p1: "A EHP atua como a parceira estratégica definitiva para empresas privadas, entidades públicas e organizações multilaterais. Integramos rigor analítico com profunda experiência setorial para resolver desafios complexos.",
      p2: "Desde a otimização de ativos hoteleiros e o design de políticas públicas, até a implementação de frameworks ESG e o desenvolvimento de soluções tecnológicas. Nossa abordagem garante resiliência organizacional, conformidade regulatória e crescimento sustentável em escala global.",
      metric1: "Impacto Multissetorial Global",
      metric2: "Otimização Organizacional e Financeira",
      metric3: "Desenvolvimento Institucional e Políticas Públicas",
    },
    services: {
      title1: "Áreas de",
      title2: "Prática",
      s1: {
        title: "Consultoria Estratégica e Operacional",
        desc: "Design e implementação de modelos operacionais de alto desempenho para corporações e redes hoteleiras.",
        d1: "Otimização de processos e redução de custos operacionais.",
        d2: "Estratégias de expansão e entrada em novos mercados.",
        d3: "Gestão de mudanças e reestruturação organizacional.",
      },
      s2: {
        title: "Sustentabilidade e Critérios ESG",
        desc: "Integração de práticas ambientais, sociais e de governança para maximizar o valor a longo prazo.",
        d1: "Design de estratégias de descarbonização e Net Zero.",
        d2: "Auditorias de conformidade regulatória ESG.",
        d3: "Relatórios de sustentabilidade sob padrões internacionais (GRI, SASB).",
      },
      s3: {
        title: "Desenvolvimento Institucional e Políticas Públicas",
        desc: "Assessoria a governos e entidades multilaterais no design de marcos regulatórios e programas de desenvolvimento.",
        d1: "Design de políticas públicas para o turismo sustentável.",
        d2: "Avaliação de impacto econômico e social de projetos.",
        d3: "Fortalecimento institucional e capacitação de funcionários.",
      },
      s4: {
        title: "Auditoria e Gestão de Riscos",
        desc: "Identificação, avaliação e mitigação de riscos operacionais, financeiros e reputacionais.",
        d1: "Auditorias operacionais e financeiras abrangentes.",
        d2: "Design de frameworks de gestão de riscos corporativos (ERM).",
        d3: "Planos de continuidade de negócios e gestão de crises.",
      },
    },
    cases: {
      title: "Impacto e Resultados",
      challenge: "O Desafio",
      intervention: "A Intervenção",
      c1: {
        title: "Transformação ESG em Rede Hoteleira Global",
        challenge:
          "Pressão de investidores para melhorar o desempenho ambiental sem uma estratégia unificada.",
        impact:
          "Design de um roteiro ESG de 5 anos e sistemas de medição de pegada de carbono.",
        metric: "Redução de 25% nas emissões de carbono em 3 anos.",
      },
      c2: {
        title: "Reestruturação Operacional de Resort de Luxo",
        challenge:
          "Margens de lucro decrescentes e altos custos operacionais pós-pandemia.",
        impact:
          "Auditoria operacional completa e redesenho de processos de back-office.",
        metric: "Aumento de 18% no GOP (Gross Operating Profit) em 12 meses.",
      },
      c3: {
        title: "Plano Nacional de Turismo Sustentável",
        challenge:
          "Necessidade governamental de diversificar a oferta turística protegendo ecossistemas.",
        impact:
          "Desenvolvimento de política pública abrangente e marco regulatório para investimentos verdes.",
        metric:
          "Atração de US$ 500 milhões em Investimento Estrangeiro Direto sustentável.",
      },
      c4: {
        title: "Estratégia de Expansão Corporativa",
        challenge:
          "Estagnação em mercados maduros e necessidade de identificar novas oportunidades.",
        impact:
          "Análise de mercado, due diligence comercial e estratégia de entrada na LATAM.",
        metric:
          "Abertura bem-sucedida em 3 novos países com ROI positivo em 18 meses.",
      },
    },
    methodology: {
      title: "Nossa Metodologia",
      s1: {
        phase: "Fase 01",
        title: "Diagnóstico e Auditoria",
        desc: "Análise abrangente da situação atual, identificando ineficiências, riscos e áreas de melhoria por meio de auditorias financeiras, operacionais e de conformidade.",
      },
      s2: {
        phase: "Fase 02",
        title: "Design Estratégico",
        desc: "Desenvolvimento de soluções sob medida, desde planos de reestruturação corporativa até marcos de políticas públicas e estratégias de sustentabilidade ESG.",
      },
      s3: {
        phase: "Fase 03",
        title: "Implementação e Gestão de Mudanças",
        desc: "Execução rigorosa das estratégias desenhadas, garantindo a adoção organizacional por meio de programas de treinamento e gestão de mudanças.",
      },
      s4: {
        phase: "Fase 04",
        title: "Monitoramento e Otimização",
        desc: "Estabelecimento de KPIs e sistemas de relatórios para medir o impacto, garantindo melhoria contínua e retorno sobre o investimento a longo prazo.",
      },
    },
    pricing: {
      title: "Planos de Consultoria",
      desc: "Estruturas de investimento projetadas para se adaptar à escala e complexidade de seus desafios organizacionais.",
      recommended: "Recomendado",
      requestQuote: "Solicitar Orçamento",
      p1: {
        name: "Avaliação Estratégica",
        investment: "A partir de US$ 15.000",
        includes:
          "Diagnóstico inicial, auditoria operacional básica e roteiro de recomendações de alto nível.",
        cta: "Solicitar Avaliação",
      },
      p2: {
        name: "Transformação Abrangente",
        investment: "A partir de US$ 50.000",
        includes:
          "Design completo e implementação de estratégias operacionais, financeiras ou ESG com 6 meses de suporte.",
        cta: "Agendar Consultoria",
      },
      p3: {
        name: "Assessoria Institucional",
        investment: "Sob Medida",
        includes:
          "Desenvolvimento de políticas públicas, marcos regulatórios e projetos multilaterais em larga escala.",
        cta: "Contatar Sócios",
      },
    },
    contact: {
      title: "Inicie a Conversa",
      desc: "Nossa equipe de sócios-diretores está disponível para discutir como a EHP pode impulsionar a transformação da sua organização.",
      hq: "Sede",
      direct: "Contato Direto",
      cities: "Londres • Miami • Madrid",
      form: {
        nameError: "O nome é obrigatório",
        companyError: "A empresa é obrigatória",
        interestError: "Selecione uma área de interesse",
        emailError: "O e-mail é obrigatório",
        emailInvalid: "E-mail inválido",
        successTitle: "Mensagem Recebida",
        successDesc:
          "Um sócio-diretor entrará em contato com você nas próximas 24 horas úteis.",
        name: "Nome Completo",
        role: "Cargo",
        select: "Selecione uma opção...",
        company: "Empresa / Instituição",
        email: "E-mail Corporativo",
        challenge: "Desafio Principal",
        optional: "Opcional",
        requestCallback: "Solicitar uma ligação",
        phone: "Número de telefone",
        interest: "Área de Interesse",
        submitting: "Enviando...",
        submit: "Enviar Mensagem",
        roles: {
          cLevel: "C-Level / Conselho",
          director: "Diretor / VP",
          publicOfficial: "Funcionário Público",
          other: "Outro",
        },
        interests: {
          revpar: "Otimização de RevPAR e GOPPAR",
          esg: "Estratégia ESG para Ultra-Luxo",
          guest: "Experiência do Hóspede de Alto Impacto",
          audit: "Auditoria de Padrões (Forbes/Michelin)",
          asset: "Gestão de Ativos e Reposicionamento",
          other: "Outro",
        },
      },
    },
    footer: {
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      rights: "Todos os direitos reservados.",
    },
    notFound: {
      title: "Página não encontrada",
      desc: "Desculpe, não conseguimos encontrar a página que você está procurando.",
      back: "Voltar ao Início",
    },
    interim: {
      title: "Gestão Interina (Interim Management)",
      subtitle: "Liderança, discrição e controle em momentos críticos.",
      subheading:
        "Intervenção estratégica durante mudanças de marca ou transições operacionais.",
      desc: "A EHP assume temporariamente a gestão executiva de sua propriedade para garantir a continuidade operacional, proteger o valor do ativo e liderar a transição com absoluta confidencialidade e rigor executivo. Nosso compromisso é salvaguardar o valor e a reputação do hotel durante esses períodos críticos, garantindo uma transição tranquila e bem-sucedida.",
      situations: [
        "Mudanças de marca ou bandeira",
        "Processos de reestruturação ou falência",
        "Transição operacional e passagem de gestão",
        "Crise de gestão ou queda de rentabilidade",
        "Relançamento e reposicionamento no mercado",
      ],
    },
    mystery: {
      title: "Cliente Oculto (Mystery Guest)",
      subtitle:
        "Avaliação confidencial de mais de 900 parâmetros de excelência.",
      desc: "Analisamos sua propriedade de forma não invasiva e profissional, auditando cada ponto de contato da jornada do hóspede para garantir a conformidade com os mais altos padrões internacionais de luxo.",
      journey: [
        "Reserva e pré-chegada",
        "Chegada e Check-in",
        "Estadia e conforto do quarto",
        "Consumo de Alimentos e Bebidas (F&B)",
        "Resolução de solicitações e serviço",
        "Partida e Check-out",
        "Pós-estadia e acompanhamento",
        "Revisão digital e reputacional",
      ],
      deliverable:
        "Relatório final abrangente com ações corretivas priorizadas.",
      cta: "Solicitar Análise de Cliente Oculto",
    },
    environmentalPolicy: {
      title: "Política Ambiental",
      subtitle: "Nosso compromisso com o planeta",
      content: "Na EHP, reconhecemos nossa responsabilidade de minimizar o impacto ambiental de nossas operações e das de nossos clientes. Estamos comprometidos em promover práticas sustentáveis, reduzir as emissões de carbono, conservar os recursos naturais e apoiar a biodiversidade. Nossa política ambiental orienta cada decisão que tomamos, garantindo que a sustentabilidade esteja integrada ao núcleo de nossa estratégia de negócios."
    },
    sustainabilityRoute: {
      title: "Rota de Sustentabilidade",
      subtitle: "Um processo claro e estruturado rumo à excelência ambiental.",
      steps: [
        {
          title: "Diagnóstico",
          desc: "Avaliação inicial da pegada ambiental e práticas atuais.",
        },
        {
          title: "Plano de Melhoria",
          desc: "Design de estratégias personalizadas para redução de impacto.",
        },
        {
          title: "Implementação",
          desc: "Execução de iniciativas sustentáveis e otimização de recursos.",
        },
        {
          title: "Medição",
          desc: "Monitoramento contínuo de KPIs ambientais e progresso.",
        },
        {
          title: "Relatório",
          desc: "Elaboração de relatórios de sustentabilidade transparentes.",
        },
        {
          title: "Alinhamento",
          desc: "Conformidade com as melhores práticas e padrões da indústria.",
        },
      ],
      esgGoals: {
        title: "Principais Metas ESG",
        subtitle: "Nosso progresso rumo a um futuro sustentável.",
        carbon: "Redução da Pegada de Carbono",
        water: "Conservação de Água",
        waste: "Redução de Resíduos",
        energy: "Energia Renovável"
      }
    },
    luxuryStandards: {
      title: "Padrões Internacionais de Luxo",
      subtitle: "Orientação estratégica rumo ao reconhecimento global.",
      desc: "Na EHP, orientamos as propriedades rumo à conformidade com os rigorosos padrões internacionais de luxo, como AAA, Forbes Travel Guide e The Leading Hotels of the World (LHW). Não prometemos certificação automática; fornecemos o suporte estratégico necessário para elevar o desempenho, garantir a consistência e preparar operacionalmente sua equipe para esses padrões exigentes.",
      elements: [
        {
          title: "Análise de Lacunas (Gap Analysis)",
          desc: "Identificação precisa de áreas de melhoria em relação aos requisitos do padrão.",
        },
        {
          title: "Preparação Operacional",
          desc: "Alinhamento de processos, treinamento de equipe e refinamento de serviço.",
        },
        {
          title: "Documentação de Evidências",
          desc: "Coleta e estruturação de evidências para apoiar a conformidade.",
        },
      ],
    },
    luxuryService: {
      title: "Luxury Service Partnership",
      subtitle:
        "Sustentar e elevar a cultura de serviço com padrões internacionais.",
      desc: "Um programa premium desenvolvido para hotéis que buscam excelência contínua. Fazemos parceria com sua propriedade para cultivar uma cultura de serviço excepcional, garantindo que cada interação com o hóspede reflita os mais altos padrões de luxo internacional.",
      features: [
        {
          title: "Treinamento Mensal no Local",
          desc: "Treinamento presencial regular para manter a motivação e o foco na excelência.",
        },
        {
          title: "Módulos Sob Medida",
          desc: "Conteúdo adaptado às necessidades específicas de sua propriedade e equipe.",
        },
        {
          title: "Aplicação Prática",
          desc: "Foco em situações reais e dramatização para assimilação eficaz.",
        },
      ],
    },
    servicesDetails: {
      labels: {
        specialties: "Especialidades Operacionais",
        improves: "Melhora",
        solves: "Resolve",
        deliverables: "Entregáveis",
      },
      audits: {
        title: "Auditorias Especializadas",
        items: [
          {
            name: "Auditoria Operacional",
            improves: "Eficiência e fluidez dos processos diários.",
            solves: "Atritos no serviço e custos ocultos.",
            deliverables:
              "Mapeamento de processos, identificação de gargalos e plano de otimização.",
          },
          {
            name: "Auditoria de Padrões (Forbes/AAA)",
            improves: "Consistência na prestação de serviços de luxo.",
            solves:
              "Desvios nos protocolos de marca e perda de estrelas/diamantes.",
            deliverables:
              "Análise de lacunas (Gap Analysis) e roteiro para certificação.",
          },
        ],
      },
      consulting: {
        title: "Consultoria Estratégica",
        items: [
          {
            name: "Reestruturação de Operações",
            improves: "Estrutura organizacional e agilidade departamental.",
            solves: "Silos de comunicação e duplicação de funções.",
            deliverables:
              "Novo organograma, manuais funcionais e KPIs departamentais.",
          },
          {
            name: "Design de SOPs",
            improves: "Padronização e qualidade do serviço.",
            solves: "Inconsistência na experiência do hóspede.",
            deliverables:
              "Manuais operacionais detalhados e guias de referência rápida.",
          },
        ],
      },
      training: {
        title: "Treinamento Executivo",
        items: [
          {
            name: "Luxury Service Partnership",
            improves: "Cultura de serviço e retenção de talentos.",
            solves: "Alta rotatividade e desmotivação da equipe de base.",
            deliverables:
              "Programa de treinamento contínuo, avaliações pré/pós e certificações internas.",
          },
          {
            name: "Liderança e Protocolo",
            improves:
              "Capacidade de gestão e presença executiva da média gerência.",
            solves: "Falta de capacitação e resolução ineficaz de reclamações.",
            deliverables:
              "Workshops presenciais, simulação de situações críticas e coaching individual.",
          },
        ],
      },
    },
  },
};
