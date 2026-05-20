'use client'

import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/data/nav'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY + 200
      sections.forEach(section => {
        const id = '#' + section.getAttribute('id')
        if (section instanceof HTMLElement && id) {
          if (section.offsetTop <= scrollY && section.offsetTop + section.offsetHeight > scrollY) {
            setActive(id)
          }
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href: string) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-400 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-[10px] px-10 py-3'
          : 'px-10 py-5'
      }`}
    >
      <a href="#" className="text-[22px] text-white tracking-[0.15em] font-light">
        LIN MO
      </a>

      <ul
        className={`flex gap-9 md:static md:flex-row md:bg-transparent md:p-0 ${
          menuOpen
            ? 'flex absolute top-full left-0 right-0 flex-col items-center gap-5 py-5 bg-surface/98 backdrop-blur-[10px]'
            : 'hidden md:flex'
        }`}
      >
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-[13px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                active === link.href ? 'text-accent' : 'text-text-muted hover:text-accent'
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setMenuOpen(o => !o)}
        className="hidden max-md:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer"
        aria-label="菜单"
      >
        <span className="block w-6 h-px bg-white transition-all duration-300" />
        <span className="block w-6 h-px bg-white transition-all duration-300" />
        <span className="block w-6 h-px bg-white transition-all duration-300" />
      </button>
    </nav>
  )
}
