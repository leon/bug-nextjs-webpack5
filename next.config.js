const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'layout',
  defaultLayout: true,
  remarkPlugins: [],
  rehypePlugins: [],
  pageExtensions: ['ts', 'tsx', 'mdx'],
})({
  reactStrictMode: true,
  future: {
    webpack5: true, // turn off to make it work
    strictPostcssConfiguration: true,
  },
})
