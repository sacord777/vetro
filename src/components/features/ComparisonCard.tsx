import { CircleDot } from 'lucide-react'

interface ComparisonCardProps {
  title: string
  leftLabel: string
  rightLabel: string
  leftCopy: string
  rightCopy: string
}

export default function ComparisonCard({
  title,
  leftLabel,
  rightLabel,
  leftCopy,
  rightCopy,
}: ComparisonCardProps) {
  return (
    <article className="comparison-card">
      <h3>{title}</h3>
      <div className="comparison-grid">
        <div>
          <p className="comparison-label">
            <CircleDot size={14} className="comparison-label-icon" />
            {leftLabel}
          </p>
          <p>{leftCopy}</p>
        </div>
        <div>
          <p className="comparison-label">
            <CircleDot size={14} className="comparison-label-icon" />
            {rightLabel}
          </p>
          <p>{rightCopy}</p>
        </div>
      </div>
    </article>
  )
}
