// ./src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuBar from './components/MenuBar'
import GuidePopup from './components/GuidePopup.jsx'
import Home from './pages/Home'
import Project from './pages/Project'
import History from './pages/History'
import Contact from './pages/Contact'


export default function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <GuidePopup />
      {/* 메뉴바 높이만큼 패딩 추가 */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="history" element={<History />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
