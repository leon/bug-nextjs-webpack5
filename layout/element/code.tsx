import classNames from 'classnames'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import github from 'prism-react-renderer/themes/github'
import { ReactNode } from 'react'

export function Pre(props: any) {
  return <div {...props} />
}

export interface CodeProps {
  className: string
  children: string
}
export function Code({ children, className }: CodeProps): ReactNode {
  const language = className?.replace(/language-/, '') as Language

  return (
    <Highlight {...defaultProps} theme={github} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={classNames(className, 'my-4 p-4')} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
