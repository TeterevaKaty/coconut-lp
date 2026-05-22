import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  as?: 'button' | 'a'
  href?: string
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>

const variants = {
  primary: 'bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-500',
  secondary:
    'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:ring-slate-400',
}

export function Button({ children, variant = 'primary', as = 'button', className = '', href, ...props }: ButtonProps) {
  const shared =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white'
  const classes = `${shared} ${variants[variant]} ${className}`.trim()

  if (as === 'a') {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
