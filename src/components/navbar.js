import React, { useEffect, useState } from 'react'
import logo from '../../public/assets/logo.svg'
import Image from 'next/image'
import { Icon } from '@iconify/react'

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

  // Client Window Height berguna untuk menghitung jarak yang sudah di scroll untuk perubahan style navbar
  const [clientWindowHeight, setClientWindowHeight] = useState('')
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }

  // ShowBg untuk mengindikasikan munculnya background dan ShowBtn untuk munculnya button pada navbar
  const [showBg, setShowBg] = useState(false)
  const [showBtn, setShowBtn] = useState(false)

  const bgStyle = () => (showBg ? 'bg-secondary-700' : '')
  const btnStyle = () => (showBtn ? '' : 'hidden')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    if (clientWindowHeight > 0) {
      setShowBg(true)
    } else {
      setShowBg(false)
    }

    if (clientWindowHeight > 400) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [clientWindowHeight])

  const navButton = navLink.map((val, idx) => (
    <li
      key={idx}
      className="md:ml-3 text-white flex items-center my-2">
      <a href={val.href} className='hover:bg-primary-600 active:bg-primary-900 transition-all md:py-0 py-3 px-2 rounded-sm'>
        {val.name}
      </a>
    </li>
  ))

  return (
    <div className={`fixed w-full ${bgStyle()}`}>
      <nav className='flex justify-between py-3 px-7 md:px-3 container mx-auto transition-all'>
        <a href='#' className='flex'>
          <Image src={logo} alt="logo"/>
        </a>
        <button className='block md:hidden text-white active:bg-primary-700 px-1 rounded-sm' onClick={openHandler}>
          <Icon icon="octicon:three-bars" />
        </button>
        <ul className={`md:flex font-poppins responsive-nav ${openStyle()}`}>
          {navButton}
          <section className={`${btnStyle()}`}>
            <button className='btn-secondary px-7 py-1 mx-5 text-base'>Jual</button>
            <button className='btn-primary px-7 py-1 text-base'>Beli</button>
          </section>
        </ul>
      </nav>
    </div>
  )
}
