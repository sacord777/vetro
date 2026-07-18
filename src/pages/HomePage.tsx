import Seo from '../components/ui/Seo'
import Hero from '../components/Hero'
import CourseGrid from '../components/course/CourseGrid'
import MediaShowcase from '../components/ui/MediaShowcase'
import { ChevronDown, TrendingUp, CalendarDays, Layers } from 'lucide-react'
import { courses } from '../constants/courses'
import { faqItems } from '../constants/faq'

export default function HomePage() {
  return (
    <>
      <Seo
        title="Vetro | Transformá tu vida con una habilidad rentable"
        description="Aprendé Porcelanato Líquido y Resina UV resin para generar ingresos extras con proyectos profesionales."
      />
      <Hero
        title="Transformá tu futuro con una habilidad rentable"
        subtitle="Aprendé porcelanato líquido y Resina UV para generar ingresos reales desde tu primer proyecto."
      >
        <a href="/courses" className="button button-primary">
          Ver cursos disponibles
        </a>
      </Hero>

      <MediaShowcase
        title="Mirá un poco de Técnica y Creatividad real"
        description="Un tutorial completo de 14 minutos que muestra el proceso creativo, la mezcla y el acabado premium."
        videoSrc="/anycubicresin.mp4"
        posterSrc="/anycubicresin.mp4"
        ctaLabel="Ver el tutorial"
        ctaHref="/contact#/contact"
      />

      <section className="section section-surface">
        <div className="container grid-2 gap-48 align-center">
          <div>
            <p className="eyebrow">Habilidad con demanda</p>
            <h2>Un oficio profesional que los clientes valoran</h2>
            <p>
              Vetro enseña técnicas reales y aplicables para trabajos de alto precio en vivienda,
              comercio y diseño. No es solo un curso; es una puerta a un servicio rentable.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-card-top">
                <TrendingUp size={18} className="stat-icon" />
                <p className="stat-value">+45%</p>
              </div>
              <p className="stat-label">Ganancia promedio por obra</p>
            </div>
            <div className="stat-card">
              <div className="stat-card-top">
                <CalendarDays size={18} className="stat-icon" />
                <p className="stat-value">2 Días</p>
              </div>
              <p className="stat-label">Formación completa</p>
            </div>
            <div className="stat-card">
              <div className="stat-card-top">
                <Layers size={18} className="stat-icon" />
                <p className="stat-value">3 cursos</p>
              </div>
              <p className="stat-label">Especializaciones prácticas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container gallery-grid">
          <article className="media-card">
            <img src="/sea-resin.jpg" alt="Acabado de resina marina en superficie" />
            <div>
              <p className="media-tag">Pisos y paredes</p>
              <h3>Acabados continuos de alto nivel</h3>
            </div>
          </article>
          <article className="media-card">
            <img src="/bandejaresin.webp" alt="Bandeja decorativa de resina premium" />
            <div>
              <p className="media-tag">Objetos decorativos</p>
              <h3>Detalles que suben el valor del proyecto</h3>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Nuestros cursos</p>
            <h2>Elige el camino que mejor se adapta a tu objetivo</h2>
          </div>
          <CourseGrid courses={courses} />
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Aprendizaje con respaldo</p>
            <h2>Lo que dicen nuestros alumnos</h2>
          </div>
          <div className="testimonial-grid">
            <article className="testimonial-card">
              <p className="testimonial-text">
                "Por fin una formación clara y práctica. Ya estoy cobrando por mi primer piso de
                porcelanato líquido." 
              </p>
              <p className="testimonial-author">Mariana, alumna Vetro</p>
            </article>
            <article className="testimonial-card">
              <p className="testimonial-text">
                "Las técnicas de epoxy me dieron confianza para entregar proyectos profesionales.
                Me contactan rápido." 
              </p>
              <p className="testimonial-author">Lucas, instalador</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">FAQ</p>
            <h2>Preguntas frecuentes</h2>
          </div>
          <div className="faq-grid">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>
                  <ChevronDown size={16} className="faq-icon" />
                  {item.question}
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
