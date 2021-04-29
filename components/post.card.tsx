import Image from 'next/image'
import { BlogPost } from 'lib/BlogPost'
import Link from 'next/link'

interface PostProps {
  post: BlogPost
}
export function PostCard({ post }: PostProps) {
  const randomImage = Math.floor(Math.random() * 3) + 1
  return (
    <Link href={'/blog' + post.link}>
      <a>
        <Image src={`/images/mesh-${randomImage}.png`} width={400} height={200} layout="responsive" />
        {post.tags && <span className="inline-block my-3 py-1 px-2 bg-black text-white uppercase font-bold">{post.tags[0]}</span>}
        <h1 className="font-display">{post.title}</h1>
        <p>{post.description}</p>
        Read more →
      </a>
    </Link>
  )
}
