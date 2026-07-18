import { Link } from 'react-router-dom'
import { CheckCircle2, Clock3, Sparkles, Tag } from 'lucide-react'
import type { Course } from '../../types'

interface CourseCardProps {
  course: Course
  showButton?: boolean
}

export default function CourseCard({ course, showButton }: CourseCardProps) {
  return (
    <article className="course-card">
      <div className="course-card-header">
        <span className="course-card-badge">
          <Sparkles size={14} />
          {course.badge}
        </span>
        <h3>{course.title}</h3>
      </div>

      <p className="course-card-copy">{course.shortDescription}</p>

      <ul className="course-card-list">
        {course.highlights.map((item) => (
          <li key={item}>
            <CheckCircle2 size={14} className="course-list-icon" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="course-card-meta">
        <span className="course-meta-item">
          <Clock3 size={14} className="meta-icon" />
          {course.duration}
        </span>
        <strong className="course-meta-item course-meta-price">
          <Tag size={14} className="meta-icon" />
          {course.price}
        </strong>
      </div>

      {showButton ? (
        <Link to={`/courses/${course.slug}`} className="button button-secondary">
          Ver detalles
        </Link>
      ) : null}
    </article>
  )
}
