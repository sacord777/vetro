import Seo from '../components/ui/Seo'
import CourseGrid from '../components/course/CourseGrid'
import { courses } from '../constants/courses'

export default function CoursesPage() {
  return (
    <>
      <Seo
        title="Vetro | Cursos disponibles"
        description="Explorá nuestros cursos de porcelain liquid, epoxy resin y UV resin para comenzar un oficio profesional y rentable."
      />
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Cursos completos</p>
            <h1>Cursos disponibles</h1>
            <p>Formación práctica tanto para niños como para adultos, para comenzar un nuevo hobby, un nuevo oficio de alta demanda y excelente retorno monetario.</p>
          </div>
          <CourseGrid courses={courses} showButton />
        </div>
      </section>
    </>
  )
}
