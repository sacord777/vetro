export interface Course {
  id: string
  slug: string
  title: string
  category: string
  headline: string
  shortDescription: string
  description: string
  outcomes: string[]
  modules: string[]
  duration: string
  price: string
  seatsAvailable: number
  badge: string
  highlights: string[]
  heroImage?: string
}

export interface Benefit {
  title: string
  description: string
  icon: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface StatItem {
  label: string
  value: string
}

export interface MediaItem {
  id: string
  title: string
  description: string
  type: 'image' | 'embed' | 'video'
  src: string
  poster?: string
}

export interface NavItem {
  title: string
  path: string
}
