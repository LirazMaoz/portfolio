import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import texture from '../images/bricks.jpg'

const Three = () => {
  const colorMap = useLoader(TextureLoader, texture)
  return (
    <>
      <mesh rotation={[90, 0, 20]}>
        <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
        <meshNormalMaterial attach="material" />
      </mesh>
    </>
  )
}

export default Three