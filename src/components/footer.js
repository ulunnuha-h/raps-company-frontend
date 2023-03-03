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
      className="text-white hover:font-bold active:bg-primary-900 rounded-sm transition-all md:ml-7 px-2 my-5 md:my-0">
      <a href={val.href}>{val.name}</a>
    </li>
))

export default function Footer () {
  return (
    <div className='bg-secondary-900 text-primary-50'>
      <footer className='container mx-auto items-center'>
        <section className='flex flex-col lg:flex-row lg:justify-between py-7'>
          <a href='#' className='mx-auto lg:m-0'>
            <Image src={logo} alt="logo" height={35}/>
          </a>
          <ul className='flex font-poppins items-center flex-row mx-auto mt-5 lg:m-0'>
            {navButton}
          </ul>
        </section>
        <hr className='w-full'/>
        <section className='flex items-center lg:justify-between py-7 font-poppins flex-col-reverse lg:flex-row'>
            <span className='text-center lg:text-left'>Copyright © 2023 <span className='text-primary-500'>
              Raps Company</span>, All rights reserved.
            </span>
            <span className='text-primary-500 mb-3 lg:mb-0'>instagram Twitter</span>
        </section>
      </footer>
    </div>
  )
}
