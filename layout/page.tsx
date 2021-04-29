import { MainLayout } from './core/layout'

export default function PageLayout({ frontMatter, children }) {
  console.log('page', frontMatter)

  return (
    <MainLayout frontMatter={frontMatter}>
      <div className="container mx-auto my-8 md:max-w-6xl">{children}</div>
    </MainLayout>
  )
}
