import React from 'react'
import Image from 'next/image'

export default function Step3 ({ nextAction }) {
  // const [metodeBayar, setMetodeBayar] = useState()

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   console.log(metodeBayar)
  // }

  return (
    <main className='container mx-auto py-16 flex gap-6'>
      <div className='p-12 bg-[#ACB8DE] bg-opacity-20 w-3/5 text-primary-50 flex flex-col h-fit'>
        <h3 className='font-grotesk mb-7'>Pembayaran</h3>
        <p className='font-poppins mb-16'>Cek Tata Cara Pembayaran via Gopay <a className='text-primary-500' href='#'>Disini</a></p>
        <section className='font-poppins flex items-center self-end gap-5 mt-16'>
          <span>Waktu pembayaran tersisa</span>
          <h4 className='font-grotesk py-2 px-5 bg-secondary-500 text-primary-900'>15:00</h4>
        </section>
      </div>
      <div className='p-12 bg-[#ACB8DE] bg-opacity-20 w-2/5 text-primary-50 flex flex-col items-center font-poppins'>
        <Image src='https://api.veritrans.co.id/v2/gopay/b0633d4c-ae62-4602-bb66-3e0c50d975a5/qr-code' alt='qrcode' width='500' height='500'></Image>
        <span className='my-5'>Atau</span>
        <button className='btn-primary px-6 py-3 font-bold w-full'>Buka Aplikasi</button>
      </div>
    </main>
  )
}
