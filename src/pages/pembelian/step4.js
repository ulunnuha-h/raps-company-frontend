import React from 'react'
import Image from 'next/image'

export default function Step4 () {
  return (
    <main className='container mx-auto py-16'>
      <div className='p-16 bg-[#ACB8DE] flex gap-12 items-center w-fit mx-auto'>
        <Image src='/assets/illustration2.png' alt='illustration' width='300' height='300'></Image>
        <section className='font-grotesk text-primary-900'>
          <h3 className='mb-5'>Pembayaran Berhasil!</h3>
          <span className='text-2xl'>DL/BGL Pembelianmu Akan Segera Menjadi Milikmu!</span>
        </section>
      </div>
    </main>
  )
}
