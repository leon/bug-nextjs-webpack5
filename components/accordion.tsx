import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'

export interface AccordionItemProps {
  title: string
  children: ReactNode
}
export function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!isOpen)

  return (
    <>
      <h2 className="accordion-header">
        <button
          className={classNames('accordion-button', isOpen ? null : 'collapsed')}
          type="button"
          aria-expanded={isOpen}
          onClick={toggleOpen}
        >
          {title}
        </button>
      </h2>
      <div className={classNames('accordion-collapse', 'collapse', isOpen ? 'show' : null)} aria-label={title}>
        <div className="accordion-body">{children}</div>
      </div>
    </>
  )
}

export interface AccordionProps {
  children: ReactNode
}
export function Accordion({ children }: AccordionProps) {
  return <div className="accordion">{children}</div>
}
