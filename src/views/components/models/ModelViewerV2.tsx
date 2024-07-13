import React, { useEffect } from 'react'

interface Props {
  src: string
  avatar: string
}

// Declare the model-viewer element to avoid TypeScript errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string
        alt?: string
        'camera-controls'?: boolean
        ar?: boolean
        'ar-modes'?: string
        exposure?: string
        poster?: string
      }
    }
  }
}

const ModelViewerV2: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@google/model-viewer')
    }
  }, [])

  return (
    <model-viewer
      style={{ width: '100%', height: '100%' }}
      src={props.src}
      alt='A 3D model'
      camera-controls
      ar
      ar-modes='webxr scene-viewer quick-look'
      exposure='0.8'
      poster={props.avatar}
    ></model-viewer>
  )
}

export default ModelViewerV2
