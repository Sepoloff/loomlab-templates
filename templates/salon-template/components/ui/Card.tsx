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
  const baseStyles = 'rounded-xl bg-white overflow-hidden transition-all duration-300 shadow-md'
  
  const hoverStyles = hoverable 
    ? 'hover:shadow-2xl hover:shadow-rose-500/10 hover:scale-105 cursor-pointer'
    : 'shadow-md'

  return (
    <div
      className={clsx(baseStyles, hoverStyles, className)}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
