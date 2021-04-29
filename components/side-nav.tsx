import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

export interface SideNavItemProps {
  href: string
  activeExactMatch?: boolean
  children: ReactNode
}
export function SideNavItem({ href, activeExactMatch, children }: SideNavItemProps) {
  const router = useRouter()
  const isActive = activeExactMatch === true ? router.asPath === href : router.asPath.startsWith(href)

  return (
    <Link href={href}>
      <a
        className={classNames(
          'block p-2', // layout
          'no-underline', // text
          'border-gray-100 border-l-4', // border
          'hover:bg-gray-lightest hover:border-l-accent', // hover
          isActive ? 'bg-gray-100 text-accent border-l-accent' : null,
        )}
      >
        {children}
      </a>
    </Link>
  )
}

export interface SideNavProps {
  children: ReactNode
}
export function SideNav({ children }: SideNavProps) {
  return <nav className="flex flex-col divide-y">{children}</nav>
}
