import './App.css'
import NavBar from './components/common/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Github from './components/pages/Github'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/github" element={<Github />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

{
  /*      */
}
