import React, { useState } from 'react'
import paymentMethod from '@/config/paymentMethod'
import Image from 'next/image'

export default function Step1 ({ nextAction }) {
  const [jumlah, setJumlah] = useState()
  const [whatsapp, setWhatsapp] = useState()
  const [norekening, setNorekening] = useState()
  const [metodeBayar, setMetodeBayar] = useState()

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(metodeBayar)
    nextAction()
  }

  return (
    <main className='container mx-auto pt-16'>
      <div className='p-7 bg-[#ACB8DE] bg-opacity-20'>
        <h3 className='text-white font-grotesk mb-7'>Form Penjualan Diamond Lock</h3>
        <form className='flex flex-col text-primary-50 font-poppins' onSubmit={submitHandler}>
          {/* Input jumlah diamond lock dan nomor whatsapp */}
          <section className='flex md:gap-12 gap-3 mb-7 flex-col md:flex-row'>
            <span className='flex flex-col w-2/5'>
              <label>Jumlah Diamond Lock</label>
              <input
                type='number'
                className='input-field my-2'
                value={jumlah} onChange={e => setJumlah(e.target.value)}
                placeholder='Masukkan Jumlah Diamond Lock'
                required
                />
              <span>Nominal yang akan didapatkan: <b>Rp. 3.000.000</b></span>
            </span>
            <span className='flex flex-col w-2/5'>
              <label>Nomor Whatsapp</label>
              <input
                type='number'
                className='input-field my-2'
                placeholder='Masukkan Nomor Whatsapp'
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value) }
                required
                />
            </span>
          </section>
          {/* Memilih metode pembayaran */}
          <label>Metode Pembayaran Hasil Penjualan (Pilih salah satu)</label>
          <section>
            {paymentOption(setMetodeBayar)}
          </section>
          {/* Input no rekening atau e-wallet */}
          <span className='flex flex-col w-2/5 mt-5'>
            <label>Nomor Rekening Bank/Dompet Digital</label>
            <input
              type='text'
              className='input-field my-2'
              placeholder='Masukkan Nomor Rekening Bank/Dompet Digital'
              value={norekening}
              onChange={e => setNorekening(e.target.value)}
            />
          </span>
          <button className='btn-primary px-6 py-4 self-end font-bold' type='submit'>Selanjutnya</button>
        </form>
      </div>
    </main>
  )
}

const paymentOption = (setMetodeBayar) => {
  return paymentMethod.map((val, idx) => (
    <div key={idx} className='mt-5'>
      <label className='flex'>{val.category}</label>
      <section className='flex flex-wrap gap-6'>
        {val.list.map((val, idx) => (
          <label htmlFor={val.name} className='my-3 cursor-pointer' key={idx}>
            <input
              type='radio'
              id={val.name}
              name='paymentButton'
              value={val.idx}
              className='peer hidden'
              onChange={() => setMetodeBayar(val.idx)}
              required
              />
            <Image
              src={val.img}
              className='peer-checked:bg-opacity-10 peer-checked:border-2 bg-secondary-500 bg-opacity-50 hover:bg-opacity-100 p-5 object-contain h-[100px] w-[180px] transition-all'
              alt={val.name}
              width='150'
              height='100'/>
          </label>)
        )}
      </section>
    </div>
  ))
}
