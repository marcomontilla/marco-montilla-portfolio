import type { SkillCategory, ExperienceItem, StatItem } from '@/types'

export const personal = {
  name: 'Marco Montilla',
  title: 'Backend & Systems Engineer',
  titleHighlight: 'Lead-Level',
  tagline: 'I build reliable backend systems — legacy modernization, billing automation, and production observability at scale.',
  location: 'Atlanta, GA',
  email: 'contact.marco@proton.me',
  github: 'https://github.com/marcomontilla',
  linkedin: 'https://linkedin.com/in/marcomontilla',
  available: true,
  availabilityNote: 'Open to senior & lead opportunities',
  summary: `Lead-level Backend & Systems Engineer with a decade of experience specializing in the architecture and modernization of large-scale production platforms. I own complex cross-system migrations, billing and monitoring infrastructure, and reliability improvements across multi-brand environments — including systems serving 500k+ telecom subscribers. My edge is in data-intensive backend design, production observability, and transforming fragile legacy platforms into reliable, maintainable systems.`,
}

export const stats: StatItem[] = [
  { label: 'Years of Experience', value: 9, suffix: '+' },
  { label: 'Subscribers Served', value: 500, suffix: 'k+' },
  { label: 'Pipeline Runtime Cut', value: 70, suffix: '%' },
  { label: 'Platforms Modernized', value: 40, suffix: '+' },
]

export const skills: SkillCategory[] = [
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
]

export const experience: ExperienceItem[] = [
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
]

export const education = {
  degree: 'B.S. Computer Engineering',
  institution: 'Universidad Rafael Belloso Chacín',
  focus: 'Computer Engineering',
}

export const strengths = [
  'Backend & platform architecture',
  'Legacy → modern system migration',
  'Data-intensive backend platforms',
  'SQL performance & data architecture',
  'Billing & automation pipelines',
  'Monitoring & observability architecture',
  'Production reliability engineering',
  'Cross-team technical leadership',
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
