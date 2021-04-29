import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

export interface TopNavItemProps {
  name: string
  href: string
  activeExactMatch?: boolean
}
export function TopNavItem({ name, href, activeExactMatch }: TopNavItemProps) {
  const router = useRouter()
  const isActive = activeExactMatch === true ? router.asPath === href : router.asPath.startsWith(href)

  return (
    <Link href={href}>
      <a
        className={classNames(
          'flex items-center', // layout
          'font-heading font-bold no-underline text-primary', // text
          'h-10 px-3 border-l-4 hover:bg-gray-lightest hover:border-l-accent', // mobile
          'md:h-12 md:mx-1 md:border-l-0', // desktop
          isActive ? 'border-l-accent md:text-accent' : null, // active
        )}
      >
        {name}
      </a>
    </Link>
  )
}

export interface TopNavItemButtonProps {
  name: string
  href: string
}
export function TopNavItemButton({ name, href }: TopNavItemButtonProps) {
  return (
    <Link href={href}>
      <a
        className={classNames(
          'flex items-center', // layout
          'bg-accent',
          'font-heading font-bold no-underline text-white', // text
          'h-10 px-3 hover:bg-accent-dark', // mobile
          'md:h-12 md:mx-1', // desktop
        )}
      >
        {name}
      </a>
    </Link>
  )
}

export interface TopNavProps {
  children: ReactNode
}
export function TopNav({ children }: TopNavProps) {
  return (
    <div
      className={classNames(
        'flex flex-col mt-5 mx-1', // mobile
        'md:flex md:flex-row md:ml-auto', // desktop
      )}
    >
      {children}
    </div>
  )
}
