import clsx from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
  onClick?: () => void
}

export function Card({
  children,
  className,
  hoverable = false,
  onClick,
}: CardProps) {
  const baseStyles = 'rounded-xl bg-dark-800 overflow-hidden transition-all duration-300'
  
  const hoverStyles = hoverable 
    ? 'hover:shadow-2xl hover:shadow-gold-500/10 hover:scale-105 cursor-pointer'
    : 'shadow-lg'

  return (
    <div
      className={clsx(baseStyles, hoverStyles, className)}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
