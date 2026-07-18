interface TimelineItemProps {
  title: string
  details: string
}

export default function TimelineItem({ title, details }: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-marker" />
      <div>
        <h4>{title}</h4>
        <p>{details}</p>
      </div>
    </div>
  )
}
