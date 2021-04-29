export interface VimeoProps {
  src: string
}

export function Vimeo({ src }: VimeoProps) {
  return (
    <iframe
      className="max-h-screen-60"
      src={src}
      width="100%"
      height="700"
      frameBorder={0}
      allowFullScreen
      allow="fullscreen"
      loading="lazy"
    ></iframe>
  )
}
