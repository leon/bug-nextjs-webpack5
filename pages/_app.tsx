import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from 'layout/element'

import 'styles/tailwind.css'
import 'styles/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={mdxComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
