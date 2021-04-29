import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'

export interface NavListItemProps {
  href: string
  imgSrc: string
  title: string
  description: string
}
export function NavListItem({ href, imgSrc, title, description }: NavListItemProps) {
  return (
    <Link href={href}>
      <a
        className={classNames(
          'flex flex-row gap-4', // layout
          'bg-white text-black no-underline', // text
          'border-b', // border
          'hover:border-b-accent', // hover
        )}
      >
        <div className="relative w-24 h-24">
          <Image src={imgSrc} objectFit="cover" layout="fill" />
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="mb-3 font-heading text-2xl hover:underline">{title}</h4>
          {description && <p>{description}</p>}
        </div>
      </a>
    </Link>
  )
}

export interface NavListProps {
  children: ReactNode
}
export function NavList({ children }: NavListProps) {
  return (
    <nav
      className={classNames(
        'flex flex-col gap-4', // layout
      )}
    >
      {children}
    </nav>
  )
}
