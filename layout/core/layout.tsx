import { ReactNode } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { FrontMatter } from 'lib/frontmatter'

export interface MainLayoutProps {
  frontMatter: FrontMatter
  children: ReactNode
}
export function MainLayout({ frontMatter, children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export interface SidebarLayoutProps {
  frontMatter: FrontMatter
  nav: ReactNode
  children: ReactNode
}
export function SidebarLayout({ frontMatter, nav, children }) {
  return (
    <MainLayout frontMatter={frontMatter}>
      <div className="grid md:grid-cols-12 gap-5 m-8 mt-12">
        <div className="md:col-span-3">{nav}</div>
        <div className="md:col-span-9 md:max-w-6xl">{children}</div>
      </div>
    </MainLayout>
  )
}
