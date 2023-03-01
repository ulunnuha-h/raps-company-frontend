import React from 'react'
import Image from 'next/image'
import background from '../../public/assets/background.jpg'
import dl from '../../public/assets/dl.png'
import bgl from '../../public/assets/bgl.png'
import priceBg from '../../public/assets/price-bg.png'
import { Icon } from '@iconify/react'
import langkahTransaksi from '@/config/langkahTransaksi'

export default function Home () {
  return (
    <>
      {/* Hero Section */}
      <main className='bg-cover bg-bottom h-[140vh]' style={ { backgroundImage: `url(${background.src})` }}>
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

      {/* Diamond Lock Section */}
      <main className='bg-secondary-700 p-12'>
        <div
          style={ { backgroundImage: `url(${priceBg.src})` } }
          className='container my-12 mx-auto flex justify-between items-center border-[10px] border-secondary-500 relative bg-cover'>
          <Image src={dl} className='p-12 bg-secondary-500 translate-x-12 -translate-y-12' alt='dl' width='300'></Image>
          <section className='text-center'>
            <h2 className='font-grotesk text-primary-50'>Take</h2>
            <h2 className='font-grotesk my-7 text-primary-500'>Rp. 3000</h2>
            <button className='btn-secondary px-14 py-3'>Jual</button>
          </section>
          <section className='text-center'>
            <h2 className='font-grotesk text-primary-50'>Price</h2>
            <h2 className='font-grotesk my-7 text-primary-500'>Rp. 3400</h2>
            <button className='btn-primary px-14 py-3'>Beli</button>
          </section>
          <section className='h-[260px]'>
            <h3 className='text-primary-50 text-center w-8 whitespace-nowrap rotate-90 font-grotesk mr-6'>Diamond Lock</h3>
          </section>
        </div>
      </main>

      {/* Blue Gem Lock */}
      <main className='bg-secondary-700 p-12'>
        <div
          style={ { backgroundImage: `url(${priceBg.src})` } }
          className='container my-12 mx-auto flex justify-between items-center border-[10px] border-secondary-500 relative bg-cover'>
          <section className='translate-y-32'>
            <h3 className='text-primary-50 text-center w-8 whitespace-nowrap -rotate-90 font-grotesk ml-6'>Blue Gem Lock</h3>
          </section>
          <section className='text-center text-primary-50 font-grotesk flex flex-col w-1/2'>
            <h3 className='self-start mb-3'>1 BGL = 100 DL
              <span className='text-primary-500 relative line-through ml-3'>Rp 340.000</span>
            </h3>
            <h2 className='self-end mb-9'>
              NOW ONLY <span className='text-primary-500'>Rp 330.000</span>
            </h2>
            <section className='flex justify-between items-center'>
              <span className='font-grotesk text-xl'>&quot;Sama Jumlahnya, Beda Harganya&quot;</span>
              <button className='btn-primary py-3 px-12 font-bold'>Beli</button>
            </section>
          </section>
          <Image src={bgl} className='p-12 bg-secondary-500 -translate-x-12 -translate-y-12' alt='bgl' width='300'></Image>
        </div>
      </main>

      {/* Langkah-langkah jual beli */}
      <main className='bg-secondary-700 p-12'>
        <h3 className='font-grotesk text-primary-50 text-center mb-7'>3 Langkah mudah untuk Jual/Beli Diamond Lock</h3>
        <div className='flex justify-between'>
        {langkahTransaksi.map((val, idx) => (
          <section
            key={idx}
            className='basis-1/3 flex flex-col items-center justify-end bg-secondary-500 bg-opacity-20 mx-5 2xl:mx-12 py-16 px-7'>
            <Image src={val.img.src} alt='illustration' width={'200'} height={'200'}></Image>
            <h5 className='text-white font-grotesk my-3'>{val.name}</h5>
            <p className='text-base text-center'>{val.desc}</p>
          </section>
        ))}
        </div>
      </main>

      {/* Testimoni Pelanggan */}
      <main className='bg-secondary-700 p-12'>
        <h3 className='font-grotesk text-primary-50 text-center mb-7'>Testimoni pelanggan kami</h3>
      </main>
    </>
  )
}
