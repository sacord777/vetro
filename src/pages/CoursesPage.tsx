import Seo from '../components/ui/Seo'
import CourseGrid from '../components/course/CourseGrid'
import { courses } from '../constants/courses'

export default function CoursesPage() {
  return (
    <>
      <Seo
        title="Vetro | Cursos creativos de resina en Río Cuarto"
        description="Explorá cursos presenciales de porcelanato líquido, epoxy resin y UV resin en un taller creativo con atención personalizada." 
      />
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Cursos completos</p>
            <h1>Cursos disponibles</h1>
            <p>Descubrí formaciones presenciales diseñadas para que aprendas con técnica, disfrutes del proceso creativo y desarrolles proyectos de resina con calidad profesional.</p>
          </div>
          <CourseGrid courses={courses} showButton />
        </div>
      </section>
    </>
  )
}
