import { ReactNode } from 'react'

export interface TableProps {
  children: ReactNode
}

export function Table({ children }: TableProps) {
  return <table className="w-full my-8">{children}</table>
}

export function TR({ children }: TableProps) {
  return <tr className="border-b">{children}</tr>
}

export interface THTDProps {
  children: ReactNode
  align: string
}

export function TH({ children, align, ...props }: THTDProps) {
  return (
    <th className={`p-3 ${alignText[align] ?? 'text-left'}`} {...props}>
      {children}
    </th>
  )
}

export function TD({ children, align, ...props }: THTDProps) {
  return (
    <td className={`p-3 ${alignText[align] ?? 'text-left'}`} {...props}>
      {children}
    </td>
  )
}

const alignText = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}
