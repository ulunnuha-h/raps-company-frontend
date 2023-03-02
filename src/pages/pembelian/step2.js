import React, { useState } from 'react'
import paymentOption from '@/components/paymentOption'

export default function Step2 ({ nextAction }) {
  const [metodeBayar, setMetodeBayar] = useState()

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(metodeBayar)
  }

  return (
    <form className='container mx-auto py-16 flex gap-6' onSubmit={submitHandler}>
      <div className='p-12 bg-[#ACB8DE] bg-opacity-20 w-3/5'>
        <h3 className='text-white font-grotesk mb-7'>Form Penjualan Diamond Lock</h3>
        <section className='flex flex-col text-primary-50 font-poppins'>
          <label>Metode Pembayaran Hasil Penjualan (Pilih salah satu)</label>
            <section>
              {paymentOption(metodeBayar, setMetodeBayar)}
            </section>
            <button className='btn-primary px-6 py-3 self-start font-bold mt-5' type='submit'>Kembali</button>
        </section>
      </div>
      <div className=' w-2/5 h-fit'>
        <section className='p-12 bg-[#ACB8DE] bg-opacity-20'>
          <h3 className='text-white font-grotesk mb-7'>Order</h3>
          <table className='w-full text-primary-50 text-2xl'>
            <tr>
              <td>1</td>
              <td>BGL</td>
              <td className='text-end'>Rp. 330.000</td>
            </tr>
            <tr className='border-b-2'>
              <td className='py-5'>90</td>
              <td>DL</td>
              <td className='text-end'>Rp.306.000</td>
            </tr>
            <tr>
              <td colSpan='2' className='py-5'>Total</td>
              <td className='text-end'>Rp. 636.000</td>
            </tr>
          </table>
        </section>
        <button className='btn-primary px-6 py-3 font-bold mt-5 w-full' type='submit'>Bayar</button>
      </div>
    </form>
  )
}
