import React, { useState } from 'react'
import logo from '../../public/assets/logo.svg'
import Image from 'next/image'

const navLink = [
  {
    name: 'Beranda',
    href: '#'
  },
  {
    name: 'Langkah',
    href: '#'
  },
  {
    name: 'Testimoni',
    href: '#'
  }
]

export default function Navbar () {
  // Open untuk mengindikasikan navbar responsive terbuka atau tidak
  const [open, setOpen] = useState(false)
  const openHandler = () => setOpen(!open)
  const openStyle = () => {
    if (open) {
      return ''
    } else {
      return 'hidden'
    }
  }

  const navButton = navLink.map((val, idx) => (
    <li
      key={idx}
      className="ml-3 text-white hover:bg-red-600 active:bg-red-900 rounded-sm transition-all md:py-0 py-3 px-2">
      <a href={val.href}>{val.name}</a>
    </li>
  ))

  return (
    <div className='container mx-auto'>
      <nav className='flex justify-between py-7 px-3'>
        <a href='#'>
          <Image src={logo} alt="logo"/>
        </a>
        <button className='block md:hidden' onClick={openHandler}>Open</button>
        <ul className={`md:flex font-poppins responsive-nav ${openStyle()}`}>
          {navButton}
        </ul>
      </nav>
    </div>
  )
}
