import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import Hero from '../components/Hero'
import CourseGrid from '../components/course/CourseGrid'
import MediaShowcase from '../components/ui/MediaShowcase'
import { ChevronDown, Sparkles, CalendarDays, Layers } from 'lucide-react'
import { courses } from '../constants/courses'
import { faqItems } from '../constants/faq'
import { whatsappNumber, whatsappText } from '../constants/site'

export default function HomePage() {
  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappText}`

  return (
    <>
      <Seo
        title="Vetro | Talleres creativos de resina en Río Cuarto"
        description="Cursos presenciales de porcelanato líquido, epoxy resin y UV resin en un taller creativo con atención personalizada en Río Cuarto. Aprende técnica profesional y disfruta del proceso."
      />
      <Hero
        title="Aprendé técnicas de resina con oficio, calma y creatividad."
        subtitle="Un taller presencial pensado para que descubras el proceso, practiques con materiales reales y crees proyectos con identidad propia." 
      >
        <Link to="/courses" className="button button-primary">
          Ver cursos
        </Link>
      </Hero>

      <section className="section section-surface">
        <div className="container grid-2 gap-48 align-center">
          <div>
            <p className="eyebrow">Técnica con propósito</p>
            <h2>Aprendé algo nuevo con calma y confianza</h2>
            <p>
              En Vetro enseñamos porcelanato líquido, epoxy resin y UV resin desde el método correcto,
              con acompañamiento personalizado y una experiencia práctica que prioriza el aprendizaje.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-card-top">
                <Sparkles size={18} className="stat-icon" />
                <p className="stat-value">Aprendizaje práctico</p>
              </div>
              <p className="stat-label">Técnicas que podés repetir en tu próximo proyecto</p>
            </div>
            <div className="stat-card">
              <div className="stat-card-top">
                <CalendarDays size={18} className="stat-icon" />
                <p className="stat-value">Ambiente inspirador</p>
              </div>
              <p className="stat-label">Clases presenciales con atención cálida y ordenada</p>
            </div>
            <div className="stat-card">
              <div className="stat-card-top">
                <Layers size={18} className="stat-icon" />
                <p className="stat-value">Guía personalizada</p>
              </div>
              <p className="stat-label">Acompañamiento paso a paso en cada etapa del taller</p>
            </div>
          </div>
        </div>
      </section>

      <MediaShowcase
        title="Mirá un poco de cómo se puede trabajar"
        description="Una invitación a conocer de cerca la mezcla, la técnica y el acabado premium que dan forma a cada proyecto." 
        videoSrc="/anycubicresin.mp4"
        posterSrc="/tutorial-poster.webp"
        ctaLabel="Reservar plaza"
        ctaHref="/contact"
      />

      <section className="section">
        <div className="container gallery-grid">
          <article className="media-card">
            <img src="/workinggroup.jpg" alt="Grupo trabajando con resina en un taller" />
            <div>
              <p className="media-tag">Taller en acción</p>
              <h3>Aprendé en un ambiente colaborativo</h3>
            </div>
          </article>
          <article className="media-card">
            <img src="/llaverosInicialesResin.jpg" alt="Llaveros de resina creados en el taller" />
            <div>
              <p className="media-tag">Proyectos reales</p>
              <h3>Creá piezas decorativas con detalles únicos</h3>
            </div>
          </article>
          <article className="media-card">
            <img src="/materials.jpg" alt="Materiales y pigmentos para resina" />
            <div>
              <p className="media-tag">Materiales seleccionados</p>
              <h3>Conocé los insumos usados en cada técnica</h3>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Nuestros cursos</p>
            <h2>Aprendé con un método práctico y creativo</h2>
            <p>
              Cursos presenciales pensados para personas curiosas que quieren dominar la técnica,
              experimentar con resina y construir proyectos con acabados de calidad.
            </p>
          </div>
          <CourseGrid courses={courses} />
        </div>
      </section>

      <section className="section section-surface">
        <div className="container grid-2 gap-48 align-center">
          <div className="media-card">
            <img src="/workinggroup.jpg" alt="Instructor y estudiantes trabajando en resina" />
            <div>
              <p className="media-tag">Meet Gustavo</p>
              <h3>Más de 10 años enseñando técnicas de resina con pasión y método</h3>
              <p>
                Gustavo combina experiencia práctica y una enseñanza cercana para que cada alumno
                avance con seguridad, disfrute el proceso y vea proyectos reales aparecer con calidad.
              </p>
              <ul className="course-card-list">
                <li>Metodología práctica orientada al resultado</li>
                <li>Guía paso a paso en cada clase</li>
                <li>Atención personalizada para cada proyecto</li>
                <li>Un taller amigable pensado para la confianza creativa</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="eyebrow">Instructor</p>
            <h2>Aprendé con un docente atento a tu progreso</h2>
            <p>
              Los cursos de Gustavo están diseñados para que puedas avanzar con claridad,
              dominar técnicas profesionales y sentir que creces en cada proyecto.
              El ambiente es relajado, respetuoso y enfocado en la calidad.
            </p>
            <a href={whatsappHref} className="button button-primary" target="_blank" rel="noreferrer">
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Aprendizaje real</p>
            <h2>Lo que dicen quienes ya cursaron</h2>
          </div>
          <div className="testimonial-grid">
            <article className="testimonial-card">
              <p className="testimonial-text">
                "El taller me permitió entender la técnica paso a paso. Salí con proyectos concretos,
                ideas nuevas y ganas de seguir practicando en casa."
              </p>
              <p className="testimonial-author">Carla, alumna</p>
            </article>
            <article className="testimonial-card">
              <p className="testimonial-text">
                "Gustavo enseña con paciencia y propuestas claras. Me sentí acompañado desde la mezcla
                hasta el acabado, y terminé la clase con mucha confianza."
              </p>
              <p className="testimonial-author">Martín, participante</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-surface">
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

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Reserva tu lugar</p>
            <h2>Consultá por WhatsApp y comenzá tu próximo proyecto creativo</h2>
            <p>
              Hablá directamente con Gustavo para conocer disponibilidad, modalidades y propuestas
              para cursos o talleres en instituciones y espacios de trabajo.
            </p>
          </div>
          <a href={whatsappHref} className="button button-primary" target="_blank" rel="noreferrer">
            Enviar mensaje por WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
