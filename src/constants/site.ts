import type { NavItem } from '../types'

export const siteTitle = 'Vetro | Habilidades que generan ingresos'
export const siteDescription =
  'Aprendé porcelanato líquido, epoxy resin y UV resin con un enfoque práctico para construir un oficio rentable y profesional.'

export const whatsappNumber = '+5493585480214'
export const whatsappText = encodeURIComponent(
  'Hola Vetro, quiero más información sobre los cursos y cómo empezar.'
)

export const navItems: NavItem[] = [
  { title: 'Inicio', path: '/' },
  { title: 'Cursos', path: '/courses' },
  { title: 'Materiales', path: '/materials' },
  { title: 'Nosotros', path: '/about' },
  { title: 'Contacto', path: '/contact' },
]

export const trustBadges = [
  'Formación práctica',
  'Tutoría directa',
  'Comunidad activa',
  'Constancia de finalización',
]
