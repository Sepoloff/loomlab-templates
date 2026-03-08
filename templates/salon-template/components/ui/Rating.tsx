import { Star } from 'lucide-react'

interface RatingProps {
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Rating({
  value,
  max = 5,
  size = 'md',
  className = '',
}: RatingProps) {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  return (
    <div className={`flex gap-1 ${className}`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`${sizeMap[size]} transition-all ${
            i < value
              ? 'fill-rose-500 text-rose-500'
              : 'text-light-300'
          }`}
        />
      ))}
    </div>
  )
}
