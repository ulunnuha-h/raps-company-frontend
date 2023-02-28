import React from 'react'
import Image from 'next/image'

export default function Step3 () {
  return (
    <main className='container mx-auto py-16'>
      <div className='p-16 bg-[#ACB8DE] flex gap-12 items-center w-fit mx-auto'>
        <Image src='/assets/illustration1.png' alt='illustration' width='300' height='300'></Image>
        <section className='font-grotesk text-primary-900'>
          <h3 className='mb-5'>Permintaan Penjualan Berhasil Terkirim</h3>
          <span className='text-2xl'>Segera kirim DL kamu di World yang telah tersedia!</span>
        </section>
      </div>
    </main>
  )
}
