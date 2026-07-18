import type { Course } from '../../types'
import CourseCard from './CourseCard'

interface CourseGridProps {
  courses: Course[]
  showButton?: boolean
}

export default function CourseGrid({ courses, showButton }: CourseGridProps) {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} showButton={showButton} />
      ))}
    </div>
  )
}
