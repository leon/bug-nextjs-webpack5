import Image from 'next/image'

export interface ImgProps {
  src: string
  width: number
  height: number
  alt?: string
  className?: string
}
export function Img(props: ImgProps) {
  return <Image layout="intrinsic" {...props} />
}
