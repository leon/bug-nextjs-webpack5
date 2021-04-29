import { MainLayout } from './core/layout'

export default function DefaultLayout({ frontMatter, children }) {
  return <MainLayout frontMatter={frontMatter}>{children}</MainLayout>
}
