import AnimatedBackground from './backgrounds/AnimatedBackground'

interface HeroProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <section className="hero">
      <AnimatedBackground />
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">Taller creativo</p>
        <h1>{title}</h1>
        <p className="hero-copy">{subtitle}</p>
        <div className="hero-actions">{children}</div>
      </div>
    </section>
  )
}
