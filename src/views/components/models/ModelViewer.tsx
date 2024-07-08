// components/ModelViewer.tsx
import React, { useEffect } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Bounds } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { IProductModel } from 'src/types/product-types'

interface ModelProps {
  url: string
}

interface Props {
  model: IProductModel
}

// Test
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

const CameraSetup: React.FC = () => {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0, 2) // Set initial camera position closer to the model
    camera.zoom = 1.5 // Increase the zoom to make the model fit better
    camera.updateProjectionMatrix()
  }, [camera])

  return null
}

const ModelViewer: React.FC<Props> = (props: Props) => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <ExposureSettings exposure={0.8} />
      <Bounds fit clip observe>
        <Model url={props.model.url} />
      </Bounds>
      <OrbitControls makeDefault />
      <CameraSetup />
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
