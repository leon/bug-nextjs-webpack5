import Link from 'next/link'
import classNames from 'classnames'
import { ReactNode } from 'react'

interface FooterNavItemProps {
  href: string
  children: ReactNode
}
function FooterNavItem({ href, children }: FooterNavItemProps) {
  return (
    <Link href={href}>
      <a
        className={classNames(
          'block p-2', // layout
          'text-gray-300 no-underline', // text
          'hover:border-l-accent', // hover
        )}
      >
        {children}
      </a>
    </Link>
  )
}

interface FooterNavProps {
  children: ReactNode
}
function FooterNav({ children }: FooterNavProps) {
  return <nav className="flex flex-col divide-y divide-gray-600">{children}</nav>
}

export function Footer() {
  return (
    <footer className="fixed-bottom bg-gray-900 py-4">
      <div className="container grid md:grid-cols-3 gap-6">
        <div className="p-8 text-gray-300">
          <h3 className="font-heading text-2xl">Company</h3>
          <p>company address</p>
        </div>
        <div className="p-8">
          <FooterNav>
            <FooterNavItem href="/">Start</FooterNavItem>
            <FooterNavItem href="/viewer">Viewer</FooterNavItem>
          </FooterNav>
        </div>
      </div>
    </footer>
  )
}
