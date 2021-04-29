import Link from 'next/link'
import classNames from 'classnames'
import { MainNav } from 'layout/main.nav'

export function Header() {
  return (
    <header>
      <nav className="py-2 md:py-4">
        <div className="container md:mx-auto md:flex md:items-center">
          <div
            className={classNames(
              'flex', // layout
              'flex-col justify-between items-center', // mobile
              'md:flex-row', // desktop
            )}
          >
            <Link href="/">
              <a className="flex items-center font-heading no-underline text-primary">Company Docs</a>
            </Link>
          </div>

          <MainNav />
        </div>
      </nav>
    </header>
  )
}
