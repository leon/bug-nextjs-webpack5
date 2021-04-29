import { TopNav, TopNavItem, TopNavItemButton } from 'components/top-nav'

export function MainNav() {
  return (
    <TopNav>
      <TopNavItem name="Start" href="/" activeExactMatch />
      <TopNavItem name="Viewer" href="/viewer" />
      <TopNavItemButton name="Login" href="https://myapp/" />
    </TopNav>
  )
}
