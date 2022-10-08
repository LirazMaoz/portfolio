import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img
            className="img"
            src={require('../../images/logo.png')}
            alt="logo"
          />
        </Link>
      </div>
      {(toggleMenu || screenWidth > 768) && (
        <ul className="list">
          <li className="items">
            <Link to="/about" onClick={toggleNav}>
              About Me
            </Link>
          </li>
          <li className="items">
            <Link to="/github" onClick={toggleNav}>
              Github
            </Link>
          </li>
          <li className="items">
            <Link to="/contact" onClick={toggleNav}>
              Contact
            </Link>
          </li>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        <i className="bi bi-list"></i>
      </button>
    </nav>
  )
}
