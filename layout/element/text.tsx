import { ReactNode } from 'react'

export interface HeadingProps {
  children: string
}

export function H1({ children }: HeadingProps) {
  const linkId = children.replace(/ /g, '-').toLowerCase()
  return (
    <h1 id={linkId} className="font-heading mt-4 mb-4 text-4xl md:text-5xl">
      {children}
    </h1>
  )
}

export function H2({ children }: HeadingProps) {
  const linkId = children.replace(/ /g, '-').toLowerCase()
  return (
    <h2 id={linkId} className="font-heading mt-16 mb-2 text-3xl md:text-4xl">
      {children}
    </h2>
  )
}

/**
 *
 * @param HeadingProps
 * @returns
 */
export function H3({ children }: HeadingProps) {
  const linkId = children.replace(/ /g, '-').toLowerCase()
  return (
    <h3 id={linkId} className="font-heading mt-8 mb-2 text-2xl md:text-3xl">
      {children}
    </h3>
  )
}

export interface TextProps {
  children: ReactNode
}

export function P({ children }: TextProps) {
  return <p className="mb-4">{children}</p>
}

export function Strong({ children }: TextProps) {
  return <strong className="font-bold">{children}</strong>
}

export function Em({ children }: TextProps) {
  return <em className="italic">{children}</em>
}

export function UL({ children }: TextProps) {
  return <ul className="list-disc mb-4 pl-5">{children}</ul>
}

export function OL({ children }: TextProps) {
  return <ol className="list-disc mb-4 pl-5">{children}</ol>
}

export function HR() {
  return <hr className="my-4" />
}
