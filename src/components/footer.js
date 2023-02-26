import React from 'react'
import Image from 'next/image'
import logo from '../../public/assets/logo.svg'

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

const navButton = navLink.map((val, idx) => (
    <li
      key={idx}
      className="text-white hover:bg-red-600 active:bg-red-900 rounded-sm transition-all ml-7">
      <a href={val.href}>{val.name}</a>
    </li>
))

export default function Footer () {
  return (
    <div className='bg-blue-900'>
      <footer className='container mx-auto items-center'>
        <section className='flex justify-between py-5'>
          <a href='#'>
            <Image src={logo} alt="logo" height={50}/>
          </a>
          <ul className='flex font-poppins items-center'>
            {navButton}
          </ul>
        </section>
        <hr className='w-full'/>
        <section className='flex justify-between py-5'>
            <p>Copyright © 2023 Raps Company, All rights reserved.</p>
            <span>instagram Twitter</span>
        </section>
      </footer>
    </div>
  )
}
