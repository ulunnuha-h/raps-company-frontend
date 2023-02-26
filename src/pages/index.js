import React from 'react'
import Image from 'next/image'
import background from '../../public/assets/background.jpg'
import dl from '../../public/assets/dl.png'

export default function Home () {
  return (
    <main className='bg-cover bg-bottom' style={ { backgroundImage: `url(${background.src})` }}>
      <div className='container mx-auto h-screen flex items-center justify-center' id='hero' >
        <section className='basis-1/2 mr-12'>
          <h1 className='text-primary-50 font-grotesk mb-5'>JUAL/BELI DIAMOND LOCK OPEN 24 JAM</h1>
          <p className='mb-12'>Dapatkan Diamond Lock dengan harga terbaik!</p>
          <section>
            <button className='btn-secondary px-10 py-2 mr-5'>Jual</button>
            <button className='btn-primary px-10 py-2'>Beli</button>
          </section>
        </section>
        <section>
          <Image src={dl} alt='DiamondLock' className='mx-auto bg-secondary-500 bg-opacity-20 border-[20px] border-secondary-500 p-7'></Image>
        </section>
      </div>
    </main>
  )
}
