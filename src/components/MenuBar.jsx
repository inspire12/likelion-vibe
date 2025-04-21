// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [show, setShow] = useState(true)
  const [lastY, setLastY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setShow(y < lastY || y < 50)
      setLastY(y)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])
  
  return (
    <nav
      className={`
        fixed top-0 left-0 w-full bg-white shadow-md z-10
        transform transition-transform duration-300
        ${show ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between">
        <div className="text-xl font-bold">MyPortfolio</div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/project" className="hover:underline">Project</Link></li>
          <li><Link to="/history" className="hover:underline">History</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
