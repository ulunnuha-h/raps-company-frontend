import React from 'react'
import Image from 'next/image'

export default function Step4 () {
  return (
    <main className='container mx-auto py-16'>
      <div className='p-7 lg:p-16 bg-[#ACB8DE] flex gap-12 items-center w-fit mx-auto flex-col'>
        <Image src='/assets/illustration2.svg' alt='illustration' width='350' height='350' />
        <section className='font-grotesk text-primary-900 text-center'>
          <h3 className='mb-5'>Pembayaran Berhasil!</h3>
          <span className='text-2xl'>DL/BGL Pembelianmu Akan Segera Menjadi Milikmu!</span>
        </section>
        <section className='flex justify-around w-full flex-col lg:flex-row gap-5'>
          <button className='btn-primary lg:px-5 py-2'>Buka Aplikasi Growtopia</button>
          <button className='btn-primary lg:px-5 py-2'>Kembali ke Beranda</button>
        </section>
      </div>
    </main>
  )
}
