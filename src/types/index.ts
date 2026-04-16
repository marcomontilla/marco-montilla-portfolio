export interface SkillCategory {
  category: string
  icon: string
  description: string
  items: string[]
}

export interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  current: boolean
  description: string
  highlights: string[]
  tags: string[]
}

export interface StatItem {
  label: string
  value: number
  suffix: string
  prefix?: string
}
