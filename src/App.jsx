import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import TeamPage from './pages/TeamPage'
import Blog from './pages/Blog'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/teampage' element={<TeamPage/>}/>
        <Route path="/blog" element={<Blog />}/>

      </Routes>
    </Router>
  )
}

export default App