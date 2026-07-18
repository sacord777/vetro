import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  as?: 'button' | 'a'
  href?: string
  className?: string
}

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonPropsBase = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  href,
  className,
  ...props
}: ButtonProps & (AnchorProps | ButtonPropsBase)) {
  const classes = [`button`, `button-${variant}`, className].filter(Boolean).join(' ')

  if (as === 'a') {
    return (
      <a className={classes} href={href} {...(props as AnchorProps)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...(props as ButtonPropsBase)}>
      {children}
    </button>
  )
}
