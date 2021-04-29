import Link from 'next/link'
import { ReactNode } from 'react'

export interface AProps {
  href: string
  children: ReactNode
}
export function A({ href, ...props }: AProps) {
  const isExternalLink = href && (href.startsWith('https://') || href.startsWith('http://'))

  if (isExternalLink) {
    return <a href={href} target="_blank" rel="noopener" {...props} />
  }

  return (
    <Link href={href}>
      <a {...props} />
    </Link>
  )
}
