import { NavLink } from 'react-router-dom'

export default function MenuBar() {
  return (
    <nav className="bg-gray-800 text-white px-8 py-4 flex justify-center gap-8">
      {[
        { to: '/', label: 'Home' },
        { to: '/project', label: 'Project' },
        { to: '/history', label: 'History' },
        { to: '/contact', label: 'Contact' },
      ].map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive
              ? 'font-semibold border-b-2 border-white'
              : 'opacity-80 hover:opacity-100'
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
