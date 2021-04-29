import { SidebarLayout } from './core/layout'
import { SideNav, SideNavItem } from 'components/side-nav'

export default function EmbedLinkLayout({ frontMatter, children }) {
  return (
    <SidebarLayout frontMatter={frontMatter} nav={Nav()}>
      {children}
    </SidebarLayout>
  )
}

function Nav() {
  return (
    <SideNav>
      <SideNavItem href="/viewer" activeExactMatch>
        Getting Started
      </SideNavItem>
      <SideNavItem href="/viewer/in-depth">In Depth</SideNavItem>
    </SideNav>
  )
}
