import { Sparkles } from 'lucide-react'

interface InfoCardProps {
  title: string
  copy: string
  highlight: string
}

export default function InfoCard({ title, copy, highlight }: InfoCardProps) {
  return (
    <article className="info-card">
      <div className="info-card-chip">
        <Sparkles size={16} />
        {highlight}
      </div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  )
}
