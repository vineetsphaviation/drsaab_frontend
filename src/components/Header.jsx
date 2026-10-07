import { useState } from 'react'
import { SectionContainer, Button } from './ui'
import logo from '../assets/logo_header.png'

const navItems = [
  ['Home', '#home'],
  ['Our Services', '#services'],
  ['How It Works', '#how'],
  ['Panchayat Model', '#panchayat'],
  ['Urban Partner', '#urban'],
  ['Franchise', '#franchise'],
  ['Support', '#support'],
  ['About Us', '#about'],
  ['Contact Us', '#contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <SectionContainer className="relative flex h-[62px] items-center gap-5">
        <a href="#home" className="shrink-0">
          <img src={logo} alt="Dr. Saab" className="h-auto w-[143px]" />
        </a>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-2 xl:flex">
          {navItems.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={`whitespace-nowrap rounded px-2 py-2 text-[10px] font-bold transition-colors hover:text-brand-700 ${
                index === 0 ? 'bg-brand-50 text-brand-900' : 'text-ink'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <Button href="#book">◉&nbsp; Book a Service</Button>
          <Button href="#franchise" variant="outline">◉&nbsp; Become a Partner</Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          className="ml-auto rounded p-2 text-xl text-brand-900 xl:hidden"
        >
          ☰
        </button>

        {open && (
          <div className="absolute left-0 right-0 top-full bg-white p-4 shadow-lg xl:hidden">
            <nav className="grid gap-1">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded px-3 py-3 text-sm font-bold text-ink hover:bg-brand-50 hover:text-brand-900"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </SectionContainer>
    </header>
  )
}