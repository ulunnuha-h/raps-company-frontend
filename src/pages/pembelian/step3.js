import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Step3 () {
  const [rekening, setRekening] = useState('')
  const [QRCode, setQRCode] = useState('')
  const [link, setLink] = useState('')

  useEffect(() => {
    setRekening('')
    setQRCode('https://api.veritrans.co.id/v2/gopay/b0633d4c-ae62-4602-bb66-3e0c50d975a5/qr-code')
    setLink('www.google.com')
  }, [])

  return (
    <main className='container mx-auto py-16 flex flex-col-reverse lg:flex-row lg:gap-6 gap-3'>
      <div className='p-5 lg:p-12 bg-[#ACB8DE] bg-opacity-20 lg:w-3/5 mx-2 lg:mx-0 text-primary-50 flex flex-col h-fit'>
        <h3 className='font-grotesk lg:mb-7 mb-3'>Pembayaran</h3>
        <p className='font-poppins lg:mb-16'>Cek Tata Cara Pembayaran via Gopay <a className='text-primary-500' href='#'>Disini</a></p>
        <section className='font-poppins flex items-center self-end gap-5 lg:mt-16 mt-8'>
          <span>Waktu pembayaran tersisa</span>
          <h4 className='font-grotesk py-2 px-5 bg-secondary-500 text-primary-900'>15:00</h4>
        </section>
      </div>
      <div className='p-12 bg-[#ACB8DE] bg-opacity-20 lg:w-2/5 mx-2 lg:mx-0 text-primary-50 flex flex-col items-center font-poppins h-fit'>
        { QRCode && <Image src={QRCode} alt='qrcode' width='500' height='500'></Image> }
        { rekening && <span className='text-lg lg:text-2xl font-grotesk bg-primary-50 text-secondary-700 font-bold w-full text-center py-2'>{rekening}</span>}
        { (rekening || QRCode) && <span className='my-5'>Atau</span>}
        {link && <button className='btn-primary px-6 py-3 font-bold w-full'>Buka Aplikasi</button>}
      </div>
    </main>
  )
}
