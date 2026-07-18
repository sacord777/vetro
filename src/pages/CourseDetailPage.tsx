import { useParams, Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import { courses } from '../constants/courses'

export default function CourseDetailPage() {
  const { courseId } = useParams()
  const course = courses.find((item) => item.slug === courseId)

  if (!course) {
    return (
      <>
        <Seo title="Vetro | Curso no encontrado" description="Curso no disponible, revisá la lista de cursos disponibles." />
        <section className="section">
          <div className="container">
            <h1>Curso no encontrado</h1>
            <p>Revisa la lista de cursos disponibles.</p>
            <Link to="/courses" className="button button-secondary">
              Ver cursos
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Seo title={`Vetro | ${course.title}`} description={course.headline} />
      <section className="section section-surface">
        <div className="container">
          <div className="course-detail-header">
            <span className="course-badge">{course.badge}</span>
            <h1>{course.title}</h1>
            <p>{course.headline}</p>
            <div className="course-meta">
              <span>{course.duration}</span>
              <span>{course.price}</span>
            </div>
          </div>

          <div className="grid-2 gap-48 course-detail-grid">
            <div>
              <h2>Qué vas a aprender</h2>
              <ul className="course-list">
                {course.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Contenido del curso</h2>
              <ul className="course-list">
                {course.modules.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="section-cta">
            <a href="/contact" className="button button-primary">
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
