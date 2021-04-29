import { ReactNode } from 'react'

export interface NoteProps {
  children: ReactNode
  color?: 'info' | 'warning'
}

export function Note({ children, color }: NoteProps) {
  return (
    <div className={`my-4 p-3 rounded-md ${noteClasses[color ?? 'info']}`}>
      <strong>{color === 'warning' ? 'Warning' : 'Note'}:</strong> {children}
    </div>
  )
}

const noteClasses = {
  info: 'bg-accent-light border-accent-dark',
  warning: 'bg-red-600 border-red-800 text-white',
}
