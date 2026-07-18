import { PlayCircle } from 'lucide-react'

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
          <p className="eyebrow">Tutorial premium</p>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="video-cta-group">
            <a href={ctaHref} className="button button-primary">
              {ctaLabel}
            </a>
            <div className="trust-indicators">
              <span>
                <PlayCircle size={16} />
                14 minutos de demostración real
              </span>
              <span>
                <strong>Guía</strong> demostrativa paso a paso
              </span>
            </div>
          </div>
        </div>

        <div className="video-panel">
          <div className="video-player-shell">
            <video controls poster={posterSrc} className="responsive-video">
              <source src={videoSrc} type="video/mp4" />
              Tu navegador no soporta reproducción de video.
            </video>
          </div>
          <p className="video-caption">Aprendé la técnica completa desde la preparación hasta el acabado final.</p>
        </div>
      </div>
    </section>
  )
}
