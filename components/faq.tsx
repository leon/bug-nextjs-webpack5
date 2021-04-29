import { ReactNode } from 'react'

export interface FAQuestionProps {
  title: string
  children: ReactNode
}
export function FAQuestion({ title, children }: FAQuestionProps) {
  return (
    <div className="py-4">
      <h3 className="m-0 font-heading text-xl md:text-2xl">{title}</h3>
      <div>{children}</div>
    </div>
  )
}

export interface FAQProps {
  children: ReactNode
}
export function FAQ({ children }: FAQProps) {
  return <div className="my-8 divide-y">{children}</div>
}
