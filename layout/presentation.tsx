import { SidebarLayout } from './core/layout'
import { SideNav, SideNavItem } from 'components/side-nav'

export default function PresentationLayout({ frontMatter, children }) {
  return (
    <SidebarLayout frontMatter={frontMatter} nav={Nav()}>
      {children}
    </SidebarLayout>
  )
}

function Nav() {
  return (
    <SideNav>
      <SideNavItem href="/presentation" activeExactMatch>
        About the platform
      </SideNavItem>
      <SideNavItem href="/presentation/how-to-use">How to use the platform</SideNavItem>
      <SideNavItem href="/presentation/view-types">View types</SideNavItem>
      <SideNavItem href="/presentation/faq">FAQ</SideNavItem>
    </SideNav>
  )
}
