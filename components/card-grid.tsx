import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'

export interface CardGridItemProps {
  href: string
  imgSrc: string
  title: string
  description: string
}
export function CardGridItem({ href, imgSrc, title, description }: CardGridItemProps) {
  return (
    <Link href={href}>
      <a
        className={classNames(
          'block', // layout
          'no-underline text-black', // text
          'border-transparent border-b-4',
          'hover:border-b-accent', // hover
        )}
      >
        <Image src={imgSrc} width={302} height={192} layout="responsive" />
        <h4 className="my-3 p-2 font-heading text-xl">{title}</h4>
      </a>
    </Link>
  )
}

export interface CardGridProps {
  children: ReactNode
}
export function CardGrid({ children }: CardGridProps) {
  return (
    <nav
      className={classNames(
        'grid gap-4 md:grid-cols-3 xl:grid-cols-4', // layout
      )}
    >
      {children}
    </nav>
  )
}
