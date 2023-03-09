import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

export default function Step3 ({ nextAction, transactionData }) {
  const [rekening, setRekening] = useState()
  const [QRCode, setQRCode] = useState('')
  const [link, setLink] = useState('')
  const [time, setTime] = useState(0)

  useEffect(() => {
    if (transactionData.payment_type === 'bank_transfer') {
      setRekening(transactionData.va_numbers[0])
    } else {
      transactionData.actions.forEach(val => {
        if (val.name === 'generate-qr-code') {
          setQRCode(val.url)
        }

        if (val.name === 'deeplink-redirect') {
          setLink(val.url)
        }
      })
    }
  }, [transactionData])

  useEffect(() => {
    setInterval(() => {
      const expire = new Date(transactionData.expiry_time).getTime()
      const newTime = new Date(expire - Date.now())
      setTime(newTime.getMinutes() + ' : ' + newTime.getSeconds().toString().padStart(2, '0'))
    }, 1000)
  }, [transactionData.expiry_time])

  return (
    <main className='container mx-auto py-16 flex flex-col-reverse lg:flex-row lg:gap-6 gap-3'>
      <div className='lg:w-3/5 flex gap-2 flex-col'>
        <div className='p-3 bg-yellow-500 bg-opacity-50 mx-2 lg:mx-0 text-primary-50 flex h-fit items-center gap-1'>
          <Icon icon="bi:exclamation-triangle" />
          <span>Silakan Screenshot Nomor Virtual Number/Gambar QR Code</span>
        </div>
        <div className='p-5 lg:p-12 bg-[#ACB8DE] bg-opacity-20  mx-2 lg:mx-0 text-primary-50 flex flex-col h-fit'>
          <h3 className='font-grotesk lg:mb-7 mb-3'>Pembayaran</h3>
          {/* <p className='font-poppins lg:mb-16'>Cek Tata Cara Pembayaran via Gopay <a className='text-primary-500' href='#'>Disini</a></p> */}
          <section className='font-poppins flex items-center gap-5 lg:mt-16 mt-8 self-end'>
            <span>Waktu pembayaran tersisa</span>
            <h4 className='font-grotesk py-2 px-5 bg-secondary-500 text-primary-900 w-36 text-center'>
              {time}
            </h4>
          </section>
        </div>
      </div>
      <div className='p-12 bg-[#ACB8DE] bg-opacity-20 lg:w-2/5 mx-2 lg:mx-0 text-primary-50 flex flex-col items-center font-poppins h-fit'>
        { QRCode && <Image src={QRCode} alt='qrcode' width='500' height='500'></Image> }
        { rekening && <span className='text-lg lg:text-2xl font-grotesk bg-primary-50 text-secondary-700 font-bold w-full text-center py-2'>
          Virtual Account {rekening.bank.toUpperCase()} {rekening.va_number}
        </span>}
        { ((rekening || QRCode) && link) && <span className='my-5'>Atau</span>}
        {link && <a href={link} target="_blank" className='btn-primary px-6 py-3 font-bold w-full text-center'>Buka Aplikasi</a>}
        { QRCode && <span className='my-5'>Atau</span>}
        {QRCode && <a href={QRCode} target="_blank" className='btn-primary px-6 py-3 font-bold w-full text-center'>Lihat QR Code</a>}
      </div>
    </main>
  )
}
