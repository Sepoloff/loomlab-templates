import clsx from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning'
  size?: 'sm' | 'md'
}

export function Badge({
  children,
  variant = 'primary',
  size = 'md',
}: BadgeProps) {
  const variants = {
    primary: 'bg-gold-500/20 text-gold-500',
    secondary: 'bg-emerald-500/20 text-emerald-500',
    success: 'bg-emerald-500/20 text-emerald-500',
    warning: 'bg-yellow-500/20 text-yellow-500',
  }

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  }

  return (
    <span
      className={clsx(
        'inline-block rounded-full font-semibold transition-all duration-200',
        variants[variant],
        sizes[size]
      )}
    >
      {children}
    </span>
  )
}
