import type { NavItem } from '../types'

export const siteTitle = 'Vetro | Talleres creativos de resina en Río Cuarto'
export const siteDescription =
  'Cursos presenciales de porcelanato líquido, epoxy resin y UV resin en un taller creativo con atención personalizada. Aprende técnica, diseño y práctica en un ambiente relajado.'

export const whatsappNumber = '+5493585480214'
export const whatsappText = encodeURIComponent(
  'Hola Vetro, quiero más información sobre los cursos y talleres de resina.'
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
