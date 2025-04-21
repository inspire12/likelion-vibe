import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuBar from './components/MenuBar'
import Home from './pages/Home'
import Project from './pages/Project'
import History from './pages/History'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="history" element={<History />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
