import React from 'react'
import Image from 'next/image'
import background from '../../public/assets/background.jpg'
import dl from '../../public/assets/dl.png'
import { Icon } from '@iconify/react'

export default function Home () {
  return (
    <main className='bg-cover bg-bottom h-[140vh]' style={ { backgroundImage: `url(${background.src})` }}>
      {/* Hero Section */}
      <div className='container mx-auto h-screen flex items-center justify-center flex-col-reverse md:flex-row' id='hero' >
        <section className='md:basis-1/2 md:mr-12 mx-7'>
          <h1 className='text-primary-50 font-grotesk md:mb-5 text-center md:text-left'>JUAL/BELI DIAMOND LOCK OPEN 24 JAM</h1>
          <p className='md:mb-12 mb-5 text-center md:text-left'>Dapatkan Diamond Lock dengan harga terbaik!</p>
          <section className='flex justify-center md:justify-start'>
            <button className='btn-secondary px-10 py-2 mr-5'>Jual</button>
            <button className='btn-primary px-10 py-2'>Beli</button>
          </section>
        </section>
        <section className='m-12 md:m-0'>
          <Image src={dl} alt='DiamondLock' className='mx-auto bg-secondary-500 bg-opacity-20 border-[20px] border-secondary-500 p-7'></Image>
        </section>
        <h2 className='absolute bottom-0 text-center font-grotesk font-outline-1 text-white'>BUY 1 GET 1 <span className='text-transparent'>BUY 1 GET 1</span> BUY 1 GET 1</h2>
      </div>
      <h1 className='text-primary-50 w-full mt-5'>
        <Icon icon="material-symbols:arrow-circle-down-outline" className='mx-auto'/>
      </h1>
    </main>
  )
}
