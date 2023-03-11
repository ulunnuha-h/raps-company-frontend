import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import priceBg from '../../public/assets/price-bg.svg'
import { Icon } from '@iconify/react'
import dl from '../../public/assets/dl.svg'
import bgl from '../../public/assets/bgl.svg'
import langkahTransaksi from '@/config/langkahTransaksi'
import TestimoniSlide from '@/components/testimoniSlide'
import InfiniteScrollText from '@/components/infiniteScrollText'
import Link from 'next/link'
import { getHarga } from '@/data/harga'

export default function Home () {
  const [parallaxProgres, setParallaxProgres] = useState(120)
  const [hargaBeliDl, setHargaBeliDl] = useState('-')
  const [hargaJualDl, setHargaJualDl] = useState('-')
  const [hargaBgl, setHargaBgl] = useState('-')
  const handleScroll = useCallback(() => {
    const { scrollY, innerHeight } = window
    if (scrollY < 1.4 * innerHeight) {
      const percent = (scrollY / (1.4 * innerHeight) * 30)
      setParallaxProgres(120 + percent)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [parallaxProgres, handleScroll])

  useEffect(() => {
    getHarga()
      .then(({ data }) => {
        setHargaBeliDl(data.data.harga_beli_dl)
        setHargaJualDl(data.data.harga_jual_dl)
        setHargaBgl(data.data.harga_beli_bgl)
      })
  }, [])

  return (
    <>
      {/* Hero Section */}
      <main className='bg-cover lg:h-[120vh] relative bg-no-repeat lg:bg-fixed bg-secondary-700'>
        <div className='z-10 container mx-auto h-screen flex items-center justify-center pt-16 lg:pt-0 flex-col-reverse md:flex-row relative' id='hero' >
          <section className='md:basis-1/2 md:mr-12 mx-7'>
            <h1 className='text-primary-800 font-grotesk md:mb-5 text-center'>OPEN 24 HOUR</h1>
            <h1 className='text-primary-50 font-grotesk md:mb-5 text-center'>TRUSTED & FAST DROP</h1>
            <p className='text-center'>BUY & SELL DIAMOND LOCK GROWTOPIA</p>
            <p className='text-center'>ALL PAYMENT</p>
            <section className='flex justify-center my-9 lg:flex-row flex-col gap-5 lg:gap-0'>
              <Link href='./penjualan' as='./penjualan' className='btn-secondary px-10 py-2 mr-5 w-full text-center font-bold'>Jual Diamond Lock</Link>
              <Link href='./pembelian' as='./pembelian' className='btn-primary px-10 py-2 w-full text-center font-bold'>Beli Diamond Lock</Link>
            </section>
          </section>
          <InfiniteScrollText/>
        </div>
        <h1 className='text-primary-50 w-full mt-5 z-10 relative'>
          <Icon icon="material-symbols:arrow-circle-down-outline" className='mx-auto'/>
        </h1>
        {/* <video
          src={require('../../public/Hero.mp4')}
          className='absolute top-[40px] h-screen xl:h-[100vh - 20px] object-cover brightness-75 w-full'
          autoPlay muted loop/> */}
      </main>

      {/* Diamond Lock Section */}
      <main className='bg-secondary-700 lg:p-12 p-5'>
        <h3 className='font-grotesk text-primary-50 text-center block lg:hidden'>Diamond Lock (DL)</h3>
        <div
          style={ { backgroundImage: `url(${priceBg.src})` } }
          className='container lg:my-12 my-7 mx-auto flex lg:justify-between justify-around items-center border-[10px] border-secondary-500 relative bg-cover py-6 px-4'>
          <span className='p-6 bg-secondary-500 translate-x-12 -translate-y-12 lg:block hidden'>
            <Image src={dl} className='p-6 lg:animate-pulse' alt='dl' width='300' height='300'></Image>
          </span>
          <section className='text-center'>
            <h2 className='font-grotesk text-primary-50'>Take</h2>
            <h2 className='font-grotesk lg:my-7 mb-5 text-primary-500'>Rp. {hargaJualDl.toLocaleString()}</h2>
            <Link href='./penjualan' as='./penjualan' className='btn-secondary lg:px-14 px-7 lg:py-3 py-1'>Jual</Link>
          </section>
          <section className='text-center'>
            <h2 className='font-grotesk text-primary-50'>Price</h2>
            <h2 className='font-grotesk lg:my-7 mb-5 text-primary-500'>Rp. {hargaBeliDl.toLocaleString()}</h2>
            <Link href='./pembelian' as='./pembelian' className='btn-primary lg:px-14 px-7 lg:py-3 py-1'>Beli</Link>
          </section>
          <section className='h-[260px] lg:block hidden'>
            <h3 className='text-primary-50 text-center w-8 whitespace-nowrap rotate-90 font-grotesk mr-6'>Diamond Lock</h3>
          </section>
        </div>
      </main>

      {/* Blue Gem Lock */}
      <main className='bg-secondary-700 p-5 xl:p-12'>
        <h3 className='font-grotesk text-primary-50 text-center block xl:hidden'>Blue Gem Lock (BGL)</h3>
        <div
          style={ { backgroundImage: `url(${priceBg.src})` } }
          className='container my-12 mt-7 mx-auto flex justify-between items-center border-[10px] border-secondary-500 relative bg-cover xl:flex-row flex-col-reverse'>
          <section className='translate-y-32 xl:block hidden'>
            <h3 className='text-primary-50 text-center w-8 whitespace-nowrap -rotate-90 font-grotesk ml-6'>Blue Gem Lock</h3>
          </section>
          <section className='text-center text-primary-50 font-grotesk flex flex-col xl:w-1/2'>
            <h3 className='self-start mb-5 flex flex-col xl:flex-row'>
              <span className='mb-3'>1 BGL = 100 DL</span>
              <span className='text-primary-500 relative line-through xl:ml-3'> Rp {(hargaBeliDl * 100).toLocaleString()} </span>
            </h3>
            <h2 className='xl:self-end mb-9'>
              NOW ONLY<br className='block xl:hidden'></br> <span className='text-primary-500'>Rp {hargaBgl.toLocaleString()}</span>
            </h2>
            <section className='flex justify-center xl:justify-between items-center mb-5 xl:mb-0'>
              <span className='font-grotesk text-xl hidden xl:block'>&quot;Sama Jumlahnya, Beda Harganya&quot;</span>
              <Link href='./pembelian' as='./pembelian' className='btn-primary py-3 px-12 font-bold'>Beli</Link>
            </section>
          </section>
          <span className='xl:p-9 p-3 bg-secondary-500 xl:-translate-x-12 xl:-translate-y-12 min-w-fit m-5 xl:my-0'>
            <Image src={bgl} className='p-6 xl:animate-pulse' alt='bgl' width='300' height='300'></Image>
          </span>
        </div>
        <span id='langkah'/>
      </main>

      {/* Langkah-langkah jual beli */}
      <main className='bg-secondary-700 lg:p-12 p-5'>
        <h3 className='font-grotesk text-primary-50 text-center mb-7'>3 Langkah mudah untuk Jual/Beli Diamond Lock</h3>
        <div className='flex justify-between lg:flex-row flex-col lg:gap-9 gap-5 container mx-auto'>
        {langkahTransaksi.map((val, idx) => (
          <section
            key={idx}
            className='basis-1/3 flex flex-col items-center justify-end bg-secondary-500 bg-opacity-20 lg:py-16 p-7'>
            <Image src={val.img} alt='illustration' width='200' height='200'></Image>
            <h5 className='text-white font-grotesk my-3'>{val.name}</h5>
            <p className='text-base text-center'>{val.desc}</p>
          </section>
        ))}
        </div>
        <span id='testimoni'/>
      </main>

      {/* Testimoni Pelanggan */}
      <main className='bg-secondary-700 lg:p-12 p-2 py-5'>
        <h3 className='font-grotesk text-primary-50 text-center mb-7'>Testimoni pelanggan kami</h3>
        <div>
          <TestimoniSlide/>
        </div>
      </main>
    </>
  )
}
