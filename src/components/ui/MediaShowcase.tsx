import { PlayCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

interface MediaShowcaseProps {
  title: string
  description: string
  videoSrc: string
  posterSrc: string
  ctaLabel: string
  ctaHref: string
}

export default function MediaShowcase({
  title,
  description,
  videoSrc,
  posterSrc,
  ctaLabel,
  ctaHref,
}: MediaShowcaseProps) {
  return (
    <section className="section section-surface video-section">
      <div className="container video-section-grid">
        <div className="video-copy">
          <p className="eyebrow">Invitación al taller</p>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="video-cta-group">
            <Link to={ctaHref} className="button button-primary">
              {ctaLabel}
            </Link>
            <div className="trust-indicators">
              <span>
                <PlayCircle size={16} />
                Sentí el proceso creativo antes de tu primera clase
              </span>
              <span>
                <strong>Observá</strong> técnica, mezcla y acabado profesional
              </span>
            </div>
          </div>
        </div>

        <div className="video-panel">
          <div className="video-player-shell">
            <video controls preload='metadata' poster={posterSrc} className="responsive-video">
              <source src={videoSrc} type="video/mp4" />
              Tu navegador no soporta reproducción de video.
            </video>
          </div>
          <p className="video-caption">Conocé el flujo de trabajo creativo desde la preparación hasta el acabado final.</p>
        </div>
      </div>
    </section>
  )
}
