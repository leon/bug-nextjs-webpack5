import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

export interface ListNavItemProps {
  href: string
  title: string
  description: string
}
export function ListNavItem({ href, title, description }: ListNavItemProps) {
  return (
    <Link href={href}>
      <a
        className={classNames(
          'flex mt-2', // layout
          'bg-white rounded-md', // bg
          'no-underline', // text
          'border-transparent border-l-4', // border
          'hover:bg-gray-lightest hover:border-l-accent', // hover
        )}
      >
        <div className="flex-initial w-32 h-32 bg-gray-600"></div>
        <div className="flex-1 flex flex-col justify-center pl-4">
          <h4 className="m-0 font-heading text-lg">{title}</h4>
          <p className="m-0">{description}</p>
        </div>
      </a>
    </Link>
  )
}

export interface ListNavProps {
  children: ReactNode
}
export function ListNav({ children }: ListNavProps) {
  return <nav className={classNames('flex flex-col')}>{children}</nav>
}
