import './App.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Skill from './components/Skill'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exat path="/home" element={<Home />} />
          <Route exat path="/about" element={<About />} />
          <Route exat path="/contact" element={<Contact />} />
          <Route exat path="/skill" element={<Skill />} />
          <Route path="*" Navigate={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
