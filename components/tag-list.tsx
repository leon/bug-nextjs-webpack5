import Link from 'next/link'
import { BlogTagId } from 'lib/BlogTag'
import { getBlogTag } from 'lib/getBlogTag'

export interface TagListProps {
  tags: BlogTagId[]
}
export function TagList({ tags }: TagListProps) {
  return (
    <ul className="list-none">
      {tags.map((tagId) => {
        const tag = getBlogTag(tagId)
        return (
          <li key={tag.id} className="inline-block">
            <Link href={tag.link}>
              <a className="m-1 py-1 px-2 no-underline bg-primary rounded">{tag.name}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
