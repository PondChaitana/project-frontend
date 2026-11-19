import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'หน้าแรก' },
  { to: '/activities', label: 'กิจกรรม' },
  { to: '/clubs', label: 'ชมรม' },
  { to: '/news', label: 'ข่าวสาร' },
]

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* โลโก้ + คำอธิบาย */}
        <Link to="/" className="flex items-center gap-4">
          <img src="/logo.png" alt="logo" className="h-12 w-12 rounded-full object-cover" />
          <span className="border-l border-brand pl-4 text-xs leading-tight">
            รวมกิจกรรมสำหรับนักศึกษา มจพ.
          </span>
        </Link>

        {/* เมนูกลาง */}
        <ul className="hidden gap-10 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 border-brand pb-1 text-brand'
                    : 'hover:text-brand'
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ปุ่มเข้าสู่ระบบ */}
        <Link
          to="/login"
          className="rounded-md bg-brand px-6 py-2 text-sm text-white hover:bg-brand-dark"
        >
          เข้าสู่ระบบ
        </Link>
      </nav>
    </header>
  )
}
