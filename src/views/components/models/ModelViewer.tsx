// components/ModelViewer.tsx
import React, { useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

interface ModelProps {
  url: string
}

const Model: React.FC<ModelProps> = ({ url }) => {
  const gltf = useGLTF(url) as GLTF

  useEffect(() => {
    // Ensure materials have the correct side setting
    gltf.scene.traverse((object: THREE.Object3D) => {
      if ((object as THREE.Mesh).isMesh) {
        const mesh = object as THREE.Mesh
        // mesh.material = new THREE.MeshStandardMaterial()
        mesh.material.side = THREE.DoubleSide
      }
    })
  }, [gltf])

  return <primitive object={gltf.scene} />
}

interface ModelViewerProps {
  url: string
}

const ModelViewer: React.FC<ModelViewerProps> = ({ url }) => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <ExposureSettings exposure={0.8} />
      <Model url={url} />
      <OrbitControls />
    </Canvas>
  )
}

const ExposureSettings: React.FC<{ exposure: number }> = ({ exposure }) => {
  const { gl } = useThree()
  useEffect(() => {
    gl.toneMappingExposure = exposure
  }, [gl, exposure])
  return null
}

export default ModelViewer
