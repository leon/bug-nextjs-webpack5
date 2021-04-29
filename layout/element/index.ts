import { A } from './a'
import { Code, Pre } from './code'
import { Vimeo } from './vimeo'
import { FAQ, FAQuestion } from 'components/faq'
import { CardGrid, CardGridItem } from 'components/card-grid'
import { NavList, NavListItem } from 'components/nav-list'
import { Note } from 'components/note'
import { H1, H2, H3, Em, HR, OL, P, Strong, UL } from './text'
import { Table, TD, TH, TR } from './table'
import { Img } from './img'

export const mdxComponents = {
  // headings
  h1: H1,
  h2: H2,
  h3: H3,

  // text formatting
  p: P,
  strong: Strong,
  em: Em,
  ul: UL,
  ol: OL,
  hr: HR,

  // links
  a: A,

  // image
  img: Img,

  // Tables
  table: Table,
  tr: TR,
  th: TH,
  td: TD,

  // Code Highlight
  pre: Pre,
  code: Code,

  // Custom Elements
  Vimeo,
  Note,
}
