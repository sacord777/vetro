import type { Course } from '../types'

export const courses: Course[] = [
  {
    id: 'bijou-llaveros',
    slug: 'bijou-llaveros',
    title: 'Bijouterie & Llaveros',
    category: 'Artesanias',
    badge: 'Taller práctico',
    headline: 'Domina la técnica para crear piezas premium con Resina UV.',
    shortDescription:
      'Aprendé a crear bijouterie, llaveros y accesorios pequeños con acabados refinados en Resina UV.',
    description:
      'Un taller creativo para diseñar y fabricar piezas únicas de joyería y objetos decorativos, aprendiendo mezclas, moldes y acabados de alta calidad.',
    outcomes: [
      'Seleccionar y preparar moldes, inclusiones y materiales para accesorios',
      'Lograr acabados transparentes y detalles pulidos en resina UV',
      'Diseñar piezas únicas con color, brillos y texturas premium',
      'Curar, desmoldar y finalizar objetos pequeños con método profesional',
    ],
    modules: [
      'Introducción a Resina UV y materiales para bijouterie',
      'Preparación de moldes y uso de inclusiones decorativas',
      'Curado UV, desmoldado y pulido de piezas pequeñas',
      'Montaje de llaveros, dijes y accesorios con acabados premium',
    ],
    duration: '2 Días',
    price: '$0',
    seatsAvailable: 12,
    highlights: ['Piezas premium', 'Detalles a medida', 'Método práctico'],
  },
  {
    id: 'epoxy',
    slug: 'epoxy',
    title: 'Taller Infantil',
    category: 'Experiencias',
    badge: 'Kids',
    headline: 'Un taller para niños que descubren resina de forma segura y creativa.',
    shortDescription:
      'Actividades guiadas para que los niños aprendan a trabajar con resina y creen piezas divertidas.',
    description:
      'Un espacio pensado para los más jóvenes, donde pueden experimentar con colores, texturas y técnicas básicas de resina en proyectos adecuados para ellos.',
    outcomes: [
      'Aprender a mezclar y aplicar resina en proyectos pequeños',
      'Crear objetos coloridos con inclusiones y efectos sencillos',
      'Entender cómo cuidar y terminar las piezas con seguridad',
      'Disfrutar del proceso creativo en un ambiente lúdico y apoyado',
    ],
    modules: [
      'Introducción a resina y seguridad para niños',
      'Preparación de colores y mezclas simples',
      'Creación de objetos pequeños con moldes y decoraciones',
      'Curado, desmoldado y acabado suave para proyectos infantiles',
    ],
    duration: '2 Días',
    price: '$0',
    seatsAvailable: 10,
    highlights: ['Actividad lúdica', 'Fácil y segura', 'Creatividad guiada'],
  },
  {
    id: 'uv-resin',
    slug: 'uv-resin',
    title: 'Bandejas & Posavasos',
    category: 'Decoración',
    badge: 'Rápido',
    headline: 'Aprendé a crear bandejas y posavasos premium con resina UV.',
    shortDescription:
      'Diseñá y fabricá piezas funcionales y decorativas con acabados brillantes y detalles refinados.',
    description:
      'Un taller práctico para aprender resina UV aplicada a bandejas, posavasos y objetos de mesa con calidad de producto terminado.',
    outcomes: [
      'Diseñar composiciones elegantes para bandejas y posavasos',
      'Lograr acabados lisos, transparentes y sin burbujas',
      'Integrar tintes, pigmentos y materiales decorativos con técnica precisa',
      'Finalizar piezas resistentes y listas para uso o exhibición',
    ],
    modules: [
      'Selección de insumos, moldes y bases para objetos de mesa',
      'Preparación de piezas y aplicación de resina UV',
      'Curado, desmoldado y pulido de bandejas y posavasos',
      'Acabado final y montaje de accesorios premium',
    ],
    duration: '2 Días',
    price: '$0',
    seatsAvailable: 14,
    highlights: ['Objetos de mesa', 'Acabado premium', 'Trabajo detallado']
  },
]
