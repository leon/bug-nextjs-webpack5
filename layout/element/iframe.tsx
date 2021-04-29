export interface IframeProps {
  src: string
}

export function Iframe({ src }: IframeProps) {
  return (
    <iframe
      className="max-h-screen-60"
      src={src}
      width="100%"
      height="700"
      frameBorder={0}
      allowFullScreen
      allow="fullscreen; camera; gyroscope; accelerometer; magnetometer"
      loading="lazy"
    ></iframe>
  )
}
