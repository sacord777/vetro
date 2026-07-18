import type { ReactNode } from 'react'

interface InstructorCardProps {
  title: string
  name: string
  description: string
  details: string[]
  actions: ReactNode
}

export default function InstructorCard({
  title,
  name,
  description,
  details,
  actions,
}: InstructorCardProps) {
  return (
    <article className="instructor-card">
      <div className="instructor-card-header">
        <span className="eyebrow instructor-eyebrow">{title}</span>
        <h2>{name}</h2>
      </div>
      <p className="instructor-copy">{description}</p>
      <ul className="instructor-list">
        {details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="instructor-actions">{actions}</div>
    </article>
  )
}
