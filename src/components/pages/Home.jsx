import React from 'react'
import Description from '../description'
import AnimatedSphere from '../AnimatedSphere'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import '../css/description.css'

import '../css/canvas.css'
const Home = () => {
  return (
    <div>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
      <Description />
    </div>
  )
}

export default Home
