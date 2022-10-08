import React from 'react'
import '../css/About.css'
import Three from '../three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div>
        <h1 className="h1">About Me</h1>
        <span className="hr">
          <hr />
        </span>
      </div>
      <p className="desc">
        <h2>Who Am I?</h2>
        My name is Liraz Maoz, born in 1994 and currently lives in the center of
        Israel and i'm a full stack web developer. I used to work in an
        advertising agency as a social manager.
        <br />
        <br />
        <h2>Languages</h2>
        Javascript, ReactJS, Angular, Redux, css
        <br />
        <br />
        <h2>Server Side</h2>
        NODE JS and in databases: mySQL and mongoDB. <br /> I'm a fast learner
        and an excellent team player!
      </p>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Three />
      </Canvas>

      <p className="desc">
        Do you think I can fit into your company? I would love for you to
        <Link to="/contact" className="link fw-bold">
          {' '}
          contact me!
        </Link>
      </p>
    </>
  )
}

export default About
