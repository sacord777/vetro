import type { Course } from '../types'

export const courses: Course[] = [
  {
    id: 'porcelanato-liquido',
    slug: 'porcelanato-liquido',
    title: 'Porcelanato Líquido',
    category: 'Revestimientos',
    badge: 'Más rentable',
    headline: 'Transformá espacios con un acabado premium y rentable.',
    shortDescription:
      'Aprendé desde la preparación hasta la instalación de pisos y paredes en porcelanato líquido.',
    description:
      'Una ruta práctica para dominar un oficio con demanda en viviendas, comercios y proyectos de diseño.',
    outcomes: [
      'Instalación profesional de pisos y revestimientos',
      'Acabados impecables con alto valor percibido',
      'Gestión de proyectos y presupuestos',
    ],
    modules: [
      'Calculo de materiales y preparación de base',
      'Mezcla y aplicación de resinas de alta resistencia',
      'Texturas, cuarzo y pigmentación premium',
      'Sellado y conservación del acabado',
    ],
    duration: '2 Días',
    price: '$59.999',
    seatsAvailable: 12,
    highlights: ['Alto margen por proyecto', 'Demanda creciente', 'Muy bajo mantenimiento'],
  },
  {
    id: 'epoxy',
    slug: 'epoxy',
    title: 'Epoxy Resin',
    category: 'Superficies',
    badge: 'Preferido',
    headline: 'Creá pisos, muebles y superficies únicas con epoxy.',
    shortDescription:
      'Domina el trabajo con resina epóxica para acabados industriales y decorativos.',
    description:
      'Diseño, mezcla y aplicación para proyectos comerciales, garajes y muebles personalizados.',
    outcomes: [
      'Montaje de pisos y barras con resistencia superior',
      'Efectos visuales y pigmentación profesional',
      'Estrategias de venta rápida a clientes locales',
    ],
    modules: [
      'Bases industriales y preparación segura',
      'Pigmentación, texturas y efectos 3D',
      'Cura, lijado y terminaciones altas',
      'Servicio al cliente y cotizaciones rentables',
    ],
    duration: '2 Días',
    price: '$79,999',
    seatsAvailable: 10,
    highlights: ['Alta durabilidad', 'Baja inversión inicial', 'Amplia aplicación comercial'],
  },
  {
    id: 'uv-resin',
    slug: 'uv-resin',
    title: 'UV Resin',
    category: 'Acabados',
    badge: 'Rápido',
    headline: 'Aprendé técnicas rápidas para trabajos creativos y de alto valor.',
    shortDescription:
      'Crea mesas, objetos decorativos y proyectos detallados con resina UV.',
    description:
      'Una habilidad ideal para emprendimientos con pedidos personalizados y entregas ágiles.',
    outcomes: [
      'Piezas decorativas de alta rentabilidad',
      'Proceso acelerado y control de curado UV',
      'Marketing para ventas directas a clientes y tiendas',
    ],
    modules: [
      'Materiales, moldes y preparación de piezas',
      'Curado UV y acabado impecable',
      'Combinación de técnicas con tintes y inclusiones',
      'Posicionamiento comercial y productos premium',
    ],
    duration: '2 Días',
    price: '$29,999',
    seatsAvailable: 14,
    highlights: ['Servicio rápido', 'Muy buena margen', 'Perfecto para ecommerce'],
  },
]
