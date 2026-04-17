import type { SkillCategory, ExperienceItem, StatItem } from '@/types'

export type Lang = 'en' | 'es'

export interface Translation {
  nav: {
    links: { label: string; href: string }[]
    cvLabel: string
  }
  hero: {
    viewWork: string
    downloadCV: string
    personal: {
      title: string
      titleHighlight: string
      tagline: string
      availabilityNote: string
    }
  }
  stats: StatItem[]
  about: {
    eyebrow: string
    title: string
    titleAccent: string
    bio: string
    achievements: { metric: string; detail: string }[]
    quickFactsLabel: string
    quickFacts: { label: string; value: string }[]
    strengthsLabel: string
    strengths: string[]
    downloadResume: string
    education: { degree: string; institution: string }
  }
  skills: {
    eyebrow: string
    title: string
    titleAccent: string
    categories: SkillCategory[]
  }
  experience: {
    eyebrow: string
    title: string
    titleAccent: string
    educationLabel: string
    careerFocusLabel: string
    githubLabel: string
    careerFocusText: string
    expandLabel: string
    collapseLabel: string
    items: ExperienceItem[]
    education: { degree: string; institution: string }
  }
  projects: {
    eyebrow: string
    title: string
    titleAccent: string
    underConstructionTitle: string
    underConstructionDesc: string
    badge1: string
    badge2: string
    followNote: string
    items: {
      title: string
      description: string
      tags: string[]
      status: string
      live?: boolean
      placeholder?: boolean
    }[]
    statusLabels: { live: string; planned: string; proprietary: string }
  }
  contact: {
    eyebrow: string
    title: string
    titleAccent: string
    fields: { name: string; email: string; subject: string; message: string }
    placeholders: { name: string; email: string; subject: string; message: string }
    sendButton: string
    sendingButton: string
    successTitle: string
    successDesc: string
    sendAnother: string
    errorMsg: string
    directEmail: string
    availabilityNote2: string
    contactLabels: { bestWay: string; code: string; network: string; remote: string }
  }
  footer: {
    built: string
    palette: string
  }
}

// ── English ────────────────────────────────────────────────────────────────

const en: Translation = {
  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    cvLabel: 'CV',
  },
  hero: {
    viewWork: 'View my work',
    downloadCV: 'Download CV',
    personal: {
      title: 'Backend & Systems Engineer',
      titleHighlight: 'Lead-Level',
      tagline: 'I build reliable backend systems — legacy modernization, billing automation, and production observability at scale.',
      availabilityNote: 'Open to senior & lead opportunities',
    },
  },
  stats: [
    { label: 'Years of Experience', value: 9, suffix: '+' },
    { label: 'Subscribers Served', value: 500, suffix: 'k+' },
    { label: 'Pipeline Runtime Cut', value: 70, suffix: '%' },
    { label: 'Platforms Modernized', value: 40, suffix: '+' },
  ],
  about: {
    eyebrow: 'About',
    title: 'Engineering systems that',
    titleAccent: 'actually hold up.',
    bio: 'Lead-level Backend & Systems Engineer with 9+ years turning complex, fragile platforms into reliable production infrastructure. Based in Atlanta, GA — currently at Telrite, owning backend and monitoring architecture for a multi-brand telecom platform.',
    achievements: [
      { metric: '70%', detail: 'billing pipeline runtime cut — 8h → 2.5h, fully unattended' },
      { metric: '500k+', detail: 'telecom subscribers on systems I own and maintain' },
      { metric: '40+', detail: 'institutional applications modernized at Emory University' },
      { metric: 'PHP 5→8', detail: 'multi-brand legacy platform modernization in production' },
    ],
    quickFactsLabel: 'Quick Facts',
    quickFacts: [
      { label: 'Focus', value: 'Backend & Systems' },
      { label: 'Core Stack', value: 'PHP · Python · SQL' },
      { label: 'Databases', value: 'MSSQL · PostgreSQL' },
      { label: 'Experience', value: '9+ years' },
      { label: 'Domain', value: 'Telecom & Enterprise' },
    ],
    strengthsLabel: 'Strengths',
    strengths: [
      'Backend & platform architecture',
      'Legacy → modern system migration',
      'Data-intensive backend platforms',
      'SQL performance & data architecture',
      'Billing & automation pipelines',
      'Monitoring & observability architecture',
      'Production reliability engineering',
      'Cross-team technical leadership',
    ],
    downloadResume: 'Download Resume',
    education: {
      degree: 'B.S. Computer Engineering',
      institution: 'Universidad Rafael Belloso Chacín',
    },
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Tools I reach for',
    titleAccent: 'in production.',
    categories: [
      {
        category: 'Languages',
        icon: 'Code2',
        description: 'Core languages across production systems',
        items: ['PHP', 'SQL', 'Python', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'Backend & APIs',
        icon: 'Server',
        description: 'Service architecture and distributed systems',
        items: ['REST Services', 'Distributed Batch Architecture', 'Automation Platforms', 'Laravel', 'FastAPI'],
      },
      {
        category: 'Databases & Data',
        icon: 'Database',
        description: 'Data architecture, pipelines, and performance',
        items: ['SQL Server', 'PostgreSQL', 'Advanced SQL', 'Query Optimization', 'Data Pipelines', 'Data Architecture'],
      },
      {
        category: 'Systems & Infrastructure',
        icon: 'Cpu',
        description: 'Production environments and platform operations',
        items: ['Linux Production Environments', 'Monitoring Architecture', 'Platform Migrations', 'Reliability Tooling'],
      },
      {
        category: 'Frontend (Supporting)',
        icon: 'Monitor',
        description: 'UI for internal tools and dashboards',
        items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      },
      {
        category: 'Engineering Practices',
        icon: 'GitBranch',
        description: 'Cross-team process and delivery standards',
        items: ['Legacy Modernization', 'Performance Engineering', 'Reliability Architecture', 'CI/CD (GitLab)', 'Production Debugging', 'Technical Leadership'],
      },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    title: "Where I've built",
    titleAccent: 'real systems.',
    educationLabel: 'Education',
    careerFocusLabel: 'Career focus',
    githubLabel: 'GitHub',
    careerFocusText: 'Legacy modernization, data-intensive pipelines, and systems where reliability is non-negotiable.',
    expandLabel: 'Expand',
    collapseLabel: 'Collapse',
    education: {
      degree: 'B.S. Computer Engineering',
      institution: 'Universidad Rafael Belloso Chacín',
    },
    items: [
      {
        title: 'Senior Software Engineer',
        company: 'Telrite',
        location: 'Atlanta, GA',
        period: '2023 – Present',
        current: true,
        description: 'Technical lead for telecom backend, billing, and monitoring architecture across multi-brand production platforms serving 500k+ subscribers.',
        highlights: [
          'Led architecture and redesign of telecom billing automation pipelines — reduced end-to-end runtime from ~8 hours to ~2.5 hours (~70% improvement), enabling fully unattended production execution.',
          'Stabilized core billing and backend automation architecture that previously required frequent intervention, eliminating recurring operational firefighting.',
          'Designed and implemented internal monitoring and observability platform (FastAPI, React, MSSQL/Postgres) supervising distributed automation across brands and servers — eliminating silent failures and establishing system-wide visibility.',
          'Architected a decoupled observability datastore and migration strategy, isolating monitoring infrastructure from operational databases and improving resilience during production outages.',
          'Led modernization of legacy telecom automation platform (PHP 5→8), standardizing execution patterns and improving performance, consistency, and maintainability.',
          'Designed data pipelines and reconciliation architecture for billing, renewals, warranties, and regulatory workflows affecting 500k+ subscriber records.',
          'Established reliability patterns for long-running batch systems (early-fail validation, alerting, structured logging) — significantly reducing after-hours supervision.',
          'Drove cross-system integration with DBAs, sysadmins, and external carrier partners (Claro, ATT) to resolve production incidents and data discrepancies.',
        ],
        tags: ['PHP', 'FastAPI', 'React', 'SQL Server', 'PostgreSQL', 'Python', 'Linux'],
      },
      {
        title: 'Application Developer / Analyst',
        company: 'Emory University',
        location: 'Atlanta, GA',
        period: '2018 – 2022',
        current: false,
        description: 'Backend modernization and platform architecture improvements across a portfolio of 40+ institutional research and compliance applications.',
        highlights: [
          'Led migration architecture of multiple legacy ColdFusion platforms to PHP — reverse-engineering business logic and redesigning data access layers for maintainability and security.',
          'Optimized database and backend processing architecture across reporting and compliance systems, improving performance and reliability of institutional workflows.',
          'Refactored legacy PHP platforms into modular object-oriented architecture, standardizing data access patterns and reducing database vulnerabilities.',
          'Designed and deployed internal version control and collaboration infrastructure (Git + SSH), establishing consistent development architecture across teams.',
          'Provisioned Linux servers and virtualized environments supporting application hosting and internal tooling.',
          'Mentored developers and promoted modern backend architecture practices across maintained systems.',
        ],
        tags: ['PHP', 'ColdFusion', 'SQL', 'Linux', 'Git'],
      },
      {
        title: 'Full-Stack Developer',
        company: 'Beet CG',
        location: 'Remote',
        period: '2017 – 2018',
        current: false,
        description: 'Backend service architecture and internal tooling delivery.',
        highlights: [
          'Designed backend service architecture and authentication integrations with external identity providers.',
          'Modeled relational data architecture and core backend workflows for customer and billing systems.',
          'Delivered operational dashboards and internal tools supporting business processes.',
        ],
        tags: ['PHP', 'SQL', 'JavaScript', 'REST'],
      },
      {
        title: 'Full-Stack Developer',
        company: 'Lagomar',
        location: 'Remote',
        period: '2016 – 2017',
        current: false,
        description: 'Backend data platform for maritime logistics tracking.',
        highlights: [
          'Designed and developed backend data platform for maritime logistics tracking, replacing manual spreadsheet workflows.',
          'Implemented data ingestion and reporting architecture enabling real-time operational visibility.',
        ],
        tags: ['PHP', 'SQL', 'JavaScript'],
      },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Work in',
    titleAccent: 'progress.',
    underConstructionTitle: 'Under Construction',
    underConstructionDesc: "Most of my production work lives behind enterprise firewalls — telecom billing systems and internal platforms can't be open-sourced. I'm preparing case studies and open-source tooling for public release.",
    badge1: 'Preparing case studies',
    badge2: 'Coming Q2 2025',
    followNote: 'Follow @marcomontilla on GitHub for updates.',
    statusLabels: { live: 'Live', planned: 'Planned', proprietary: 'Proprietary' },
    items: [
      {
        title: 'Telecom Observability Platform',
        description: 'Internal monitoring dashboard for distributed batch automation. FastAPI backend, React frontend, MSSQL/Postgres.',
        tags: ['FastAPI', 'React', 'PostgreSQL', 'Python'],
        status: 'Proprietary',
      },
      {
        title: 'Billing Pipeline Engine',
        description: 'Redesigned billing automation for multi-brand telecom. 70% runtime reduction, unattended production execution.',
        tags: ['PHP', 'SQL Server', 'Laravel'],
        status: 'Proprietary',
      },
      {
        title: 'Portfolio — This Site',
        description: "Modern personal portfolio. React + Vite + TypeScript + Tailwind. What you're looking at right now.",
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind'],
        status: 'Live',
        live: true,
      },
      {
        title: 'Coming Soon',
        description: 'Open-source projects, tooling, and case studies are being documented and prepared for public release.',
        tags: [],
        status: 'Planned',
        placeholder: true,
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's build",
    titleAccent: 'something solid.',
    fields: { name: 'Name', email: 'Email', subject: 'Subject', message: 'Message' },
    placeholders: {
      name: 'Your name',
      email: 'you@company.com',
      subject: "What's this about?",
      message: "Tell me about the project, role, or problem you're working through...",
    },
    sendButton: 'Send message',
    sendingButton: 'Sending...',
    successTitle: 'Message sent!',
    successDesc: "I'll get back to you within 24–48 hours.",
    sendAnother: 'Send another',
    errorMsg: 'Something went wrong. Try emailing me directly.',
    directEmail: 'Or email directly:',
    availabilityNote2: 'Particularly interested in senior or lead backend engineering roles where system design and reliability matter.',
    contactLabels: {
      bestWay: 'Best way to reach me',
      code: 'Code and projects',
      network: 'Professional network',
      remote: 'Open to remote',
    },
  },
  footer: {
    built: 'Built with React + Vite.',
    palette: 'Color Palette',
  },
}

// ── Spanish ────────────────────────────────────────────────────────────────

const es: Translation = {
  nav: {
    links: [
      { label: 'Inicio', href: '#home' },
      { label: 'Acerca', href: '#about' },
      { label: 'Habilidades', href: '#skills' },
      { label: 'Experiencia', href: '#experience' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Contacto', href: '#contact' },
    ],
    cvLabel: 'CV',
  },
  hero: {
    viewWork: 'Ver mi trabajo',
    downloadCV: 'Descargar CV',
    personal: {
      title: 'Ingeniero Backend y de Sistemas',
      titleHighlight: 'Líder Técnico',
      tagline: 'Construyo sistemas backend confiables — modernización de plataformas legacy, automatización de facturación y observabilidad en producción a gran escala.',
      availabilityNote: 'Abierto a oportunidades senior y de liderazgo',
    },
  },
  stats: [
    { label: 'Años de Experiencia', value: 9, suffix: '+' },
    { label: 'Suscriptores Atendidos', value: 500, suffix: 'k+' },
    { label: 'Reducción en Pipeline', value: 70, suffix: '%' },
    { label: 'Plataformas Modernizadas', value: 40, suffix: '+' },
  ],
  about: {
    eyebrow: 'Acerca',
    title: 'Sistemas construidos para',
    titleAccent: 'resistir el tiempo.',
    bio: 'Ingeniero Backend y de Sistemas a nivel líder, con más de 9 años convirtiendo plataformas complejas y frágiles en infraestructura de producción confiable. Basado en Atlanta, GA — actualmente en Telrite, liderando arquitectura backend y de monitoreo para una plataforma telecom multi-marca.',
    achievements: [
      { metric: '70%', detail: 'reducción en runtime del pipeline — 8h → 2.5h, completamente automatizado' },
      { metric: '500k+', detail: 'suscriptores telecom en sistemas que lidero y mantengo' },
      { metric: '40+', detail: 'aplicaciones institucionales modernizadas en Emory University' },
      { metric: 'PHP 5→8', detail: 'modernización de plataforma legacy multi-marca en producción' },
    ],
    quickFactsLabel: 'Datos Rápidos',
    quickFacts: [
      { label: 'Enfoque', value: 'Backend y Sistemas' },
      { label: 'Stack Principal', value: 'PHP · Python · SQL' },
      { label: 'Bases de Datos', value: 'MSSQL · PostgreSQL' },
      { label: 'Experiencia', value: '9+ años' },
      { label: 'Dominio', value: 'Telecom y Empresarial' },
    ],
    strengthsLabel: 'Fortalezas',
    strengths: [
      'Arquitectura backend y de plataformas',
      'Migración legacy → sistemas modernos',
      'Plataformas backend intensivas en datos',
      'Rendimiento SQL y arquitectura de datos',
      'Pipelines de facturación y automatización',
      'Arquitectura de monitoreo y observabilidad',
      'Ingeniería de confiabilidad en producción',
      'Liderazgo técnico entre equipos',
    ],
    downloadResume: 'Descargar Currículum',
    education: {
      degree: 'Lic. Ingeniería en Computación',
      institution: 'Universidad Rafael Belloso Chacín',
    },
  },
  skills: {
    eyebrow: 'Habilidades',
    title: 'Herramientas que uso',
    titleAccent: 'en producción.',
    categories: [
      {
        category: 'Lenguajes',
        icon: 'Code2',
        description: 'Lenguajes principales en sistemas productivos',
        items: ['PHP', 'SQL', 'Python', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'Backend & APIs',
        icon: 'Server',
        description: 'Arquitectura de servicios y sistemas distribuidos',
        items: ['Servicios REST', 'Arquitectura Batch Distribuida', 'Plataformas de Automatización', 'Laravel', 'FastAPI'],
      },
      {
        category: 'Bases de Datos & Datos',
        icon: 'Database',
        description: 'Arquitectura de datos, pipelines y rendimiento',
        items: ['SQL Server', 'PostgreSQL', 'SQL Avanzado', 'Optimización de Queries', 'Pipelines de Datos', 'Arquitectura de Datos'],
      },
      {
        category: 'Sistemas & Infraestructura',
        icon: 'Cpu',
        description: 'Entornos productivos y operaciones de plataforma',
        items: ['Entornos Linux en Producción', 'Arquitectura de Monitoreo', 'Migraciones de Plataforma', 'Herramientas de Confiabilidad'],
      },
      {
        category: 'Frontend (Soporte)',
        icon: 'Monitor',
        description: 'UI para herramientas internas y dashboards',
        items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      },
      {
        category: 'Prácticas de Ingeniería',
        icon: 'GitBranch',
        description: 'Proceso y estándares de entrega entre equipos',
        items: ['Modernización de Legacy', 'Ingeniería de Rendimiento', 'Arquitectura de Confiabilidad', 'CI/CD (GitLab)', 'Debugging en Producción', 'Liderazgo Técnico'],
      },
    ],
  },
  experience: {
    eyebrow: 'Experiencia',
    title: 'Donde construí',
    titleAccent: 'sistemas reales.',
    educationLabel: 'Educación',
    careerFocusLabel: 'Enfoque de Carrera',
    githubLabel: 'GitHub',
    careerFocusText: 'Modernización de legacy, pipelines intensivos en datos y sistemas donde la confiabilidad es innegociable.',
    expandLabel: 'Expandir',
    collapseLabel: 'Contraer',
    education: {
      degree: 'Lic. Ingeniería en Computación',
      institution: 'Universidad Rafael Belloso Chacín',
    },
    items: [
      {
        title: 'Senior Software Engineer',
        company: 'Telrite',
        location: 'Atlanta, GA',
        period: '2023 – Presente',
        current: true,
        description: 'Líder técnico de backend telecom, facturación y arquitectura de monitoreo en plataformas de producción multi-marca que atienden a más de 500k suscriptores.',
        highlights: [
          'Lideré la arquitectura y rediseño de pipelines de automatización de facturación telecom, reduciendo el tiempo total de ejecución de ~8 horas a ~2.5 horas (~70% de mejora) y permitiendo ejecución completamente automatizada en producción.',
          'Estabilicé la arquitectura central de facturación y automatización backend que anteriormente requería intervención frecuente, logrando confiabilidad consistente en producción y eliminando incidentes operativos recurrentes.',
          'Diseñé e implementé arquitectura interna de monitoreo y observabilidad (FastAPI, React, MSSQL/Postgres) supervisando automatización distribuida en producción entre marcas y servidores, eliminando fallos silenciosos y estableciendo visibilidad a nivel sistema.',
          'Arquitecté un datastore desacoplado de observabilidad y estrategia de migración que separa la infraestructura de monitoreo de las bases operacionales, mejorando resiliencia durante caídas en producción.',
          'Lideré la modernización de una plataforma legacy de automatización telecom (PHP 5→8), estandarizando patrones de ejecución y mejorando rendimiento, consistencia y mantenibilidad.',
          'Diseñé pipelines de datos y arquitectura de reconciliación para facturación, renovaciones, garantías y flujos regulatorios telecom que impactan más de 500k registros de suscriptores.',
          'Establecí patrones de arquitectura de confiabilidad para sistemas batch de larga duración (validación temprana, monitoreo, alertas, logging estructurado), reduciendo significativamente supervisión fuera de horario e intervención manual.',
          'Impulsé iniciativas de integración entre sistemas con DBAs, sysadmins y partners externos (Claro, ATT) para resolver incidentes de producción y discrepancias de datos.',
        ],
        tags: ['PHP', 'FastAPI', 'React', 'SQL Server', 'PostgreSQL', 'Python', 'Linux'],
      },
      {
        title: 'Application Developer / Analyst',
        company: 'Emory University',
        location: 'Atlanta, GA',
        period: '2018 – 2022',
        current: false,
        description: 'Modernización backend y mejoras de arquitectura en un portafolio de más de 40 aplicaciones institucionales de investigación y cumplimiento.',
        highlights: [
          'Lideré la arquitectura de migración de múltiples plataformas legacy en ColdFusion a PHP, revirtiendo lógica de negocio y rediseñando capas de acceso a datos para mejorar mantenibilidad y seguridad.',
          'Optimicé arquitectura de bases de datos y procesamiento backend en sistemas de reporting y cumplimiento, mejorando rendimiento y confiabilidad de flujos institucionales.',
          'Refactoricé plataformas PHP legacy a una arquitectura modular orientada a objetos, estandarizando patrones de acceso a datos y reduciendo vulnerabilidades.',
          'Diseñé e implementé infraestructura interna de control de versiones y colaboración (Git + SSH), estableciendo arquitectura de desarrollo consistente entre equipos.',
          'Provisioné servidores Linux y entornos virtualizados para hosting de aplicaciones y herramientas internas.',
          'Mentoré desarrolladores y promoví prácticas modernas de arquitectura backend en sistemas mantenidos.',
        ],
        tags: ['PHP', 'ColdFusion', 'SQL', 'Linux', 'Git'],
      },
      {
        title: 'Full-Stack Developer',
        company: 'Beet CG',
        location: 'Remoto',
        period: '2017 – 2018',
        current: false,
        description: 'Arquitectura de servicios backend y entrega de herramientas internas.',
        highlights: [
          'Diseñé arquitectura de servicios backend e integraciones de autenticación con proveedores externos de identidad.',
          'Modelé arquitectura de datos relacional y flujos backend principales para sistemas de clientes y facturación.',
          'Desarrollé dashboards operacionales y herramientas internas que soportan procesos de negocio.',
        ],
        tags: ['PHP', 'SQL', 'JavaScript', 'REST'],
      },
      {
        title: 'Full-Stack Developer',
        company: 'Lagomar',
        location: 'Remoto',
        period: '2016 – 2017',
        current: false,
        description: 'Plataforma backend de datos para seguimiento logístico marítimo.',
        highlights: [
          'Diseñé y desarrollé una plataforma backend de datos para seguimiento logístico marítimo, reemplazando procesos manuales en hojas de cálculo.',
          'Implementé arquitectura de ingestión de datos y reporting que permitió visibilidad operativa en tiempo real.',
        ],
        tags: ['PHP', 'SQL', 'JavaScript'],
      },
    ],
  },
  projects: {
    eyebrow: 'Proyectos',
    title: 'Trabajo en',
    titleAccent: 'progreso.',
    underConstructionTitle: 'En Construcción',
    underConstructionDesc: 'La mayor parte de mi trabajo productivo vive detrás de firewalls empresariales — sistemas de facturación telecom y plataformas internas que no pueden publicarse como open-source. Estoy preparando casos de estudio y herramientas open-source para publicación.',
    badge1: 'Preparando casos de estudio',
    badge2: 'Próximamente Q2 2025',
    followNote: 'Sigue a @marcomontilla en GitHub para actualizaciones.',
    statusLabels: { live: 'En Vivo', planned: 'Planeado', proprietary: 'Propietario' },
    items: [
      {
        title: 'Plataforma de Observabilidad Telecom',
        description: 'Dashboard interno de monitoreo para automatización batch distribuida. Backend FastAPI, frontend React, MSSQL/Postgres.',
        tags: ['FastAPI', 'React', 'PostgreSQL', 'Python'],
        status: 'Proprietary',
      },
      {
        title: 'Motor de Pipeline de Facturación',
        description: 'Automatización de facturación rediseñada para telecom multi-marca. 70% de reducción en runtime, ejecución desatendida en producción.',
        tags: ['PHP', 'SQL Server', 'Laravel'],
        status: 'Proprietary',
      },
      {
        title: 'Portfolio — Este Sitio',
        description: 'Portfolio personal moderno. React + Vite + TypeScript + Tailwind. Lo que estás viendo ahora mismo.',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind'],
        status: 'Live',
        live: true,
      },
      {
        title: 'Próximamente',
        description: 'Proyectos open-source, herramientas y casos de estudio están siendo documentados y preparados para publicación.',
        tags: [],
        status: 'Planned',
        placeholder: true,
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Construyamos',
    titleAccent: 'algo sólido.',
    fields: { name: 'Nombre', email: 'Correo', subject: 'Asunto', message: 'Mensaje' },
    placeholders: {
      name: 'Tu nombre',
      email: 'tu@empresa.com',
      subject: '¿De qué se trata?',
      message: 'Cuéntame sobre el proyecto, rol o problema en el que estás trabajando...',
    },
    sendButton: 'Enviar mensaje',
    sendingButton: 'Enviando...',
    successTitle: '¡Mensaje enviado!',
    successDesc: 'Te responderé en 24–48 horas.',
    sendAnother: 'Enviar otro',
    errorMsg: 'Algo salió mal. Intenta escribirme directamente.',
    directEmail: 'O escríbeme directamente:',
    availabilityNote2: 'Particularmente interesado en roles senior o de liderazgo backend donde el diseño de sistemas y la confiabilidad sean prioritarios.',
    contactLabels: {
      bestWay: 'La mejor forma de contactarme',
      code: 'Código y proyectos',
      network: 'Red profesional',
      remote: 'Disponible remotamente',
    },
  },
  footer: {
    built: 'Construido con React + Vite.',
    palette: 'Paleta de Colores',
  },
}

export const translations: Record<Lang, Translation> = { en, es }
