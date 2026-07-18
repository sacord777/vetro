interface CTAButtonProps {
  label: string
  href: string
  onClick?: () => void
}

export default function CTAButton({ label, href, onClick }: CTAButtonProps) {
  return (
    <a href={href} className="cta-button" onClick={onClick}>
      {label}
    </a>
  )
}
