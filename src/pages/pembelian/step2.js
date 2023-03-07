import React, { useEffect, useState } from 'react'
import paymentOption from '@/components/paymentOption'
import { Icon } from '@iconify/react'

export default function Step2 ({ formDataHandler, formData, prevAction }) {
  const [metodeBayar, setMetodeBayar] = useState('')
  const [hargaDl, setHargaDl] = useState(0)
  const [hargaBgl, setHargaBgl] = useState(0)
  const { dl, bgl, total } = formData
  const [error, setError] = useState(false)

  useEffect(() => {
    setHargaBgl(330000)
    setHargaDl(3400)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    if (metodeBayar === '') {
      setError(true)
    } else {
      setError(false)
      formDataHandler({ metodeBayar })
    }
  }

  return (
    <form className='container mx-auto py-16 flex lg:flex-row flex-col gap-6' onSubmit={submitHandler}>
      <div className='form-card lg:w-3/5'>
        <h3 className='text-white font-grotesk mb-7'>Form Pembelian Diamond Lock</h3>
        <p className={`error-card ${error ? 'flex' : 'hidden'}`}>
          <Icon icon="material-symbols:error" className='text-3xl'/>
          <span>Silakan isi pilih salah satu metode pembayaran</span>
        </p>
        <section className='flex flex-col text-primary-50 font-poppins'>
          <label>Metode Pembayaran Hasil Penjualan (Pilih salah satu)</label>
            <section>
              {paymentOption(metodeBayar, setMetodeBayar)}
            </section>
            <button className='btn-primary px-6 py-3 self-start font-bold mt-5 hidden lg:block' type='button' onClick={prevAction}>Kembali</button>
        </section>
      </div>
      <div className='lg:w-2/5 h-fit mx-2 lg:mx-0 sticky top-24'>
        <section className='p-12 bg-[#ACB8DE] bg-opacity-20'>
          <h3 className='text-white font-grotesk mb-7'>Order</h3>
          <table className='w-full text-primary-50 text-2xl'>
            <tbody>
            <tr>
              <td>{bgl || 0}</td>
              <td>BGL</td>
              <td className='text-end'>Rp. {(hargaBgl * (bgl || 0)).toLocaleString()}</td>
            </tr>
            <tr className='border-b-2'>
              <td className='py-5'>{dl || 0}</td>
              <td>DL</td>
              <td className='text-end'>Rp. {(hargaDl * (dl || 0)).toLocaleString()}</td>
            </tr>
            <tr>
              <td colSpan='2' className='py-5'>Total</td>
              <td className='text-end'>Rp. {(total || 0).toLocaleString()}</td>
            </tr>
            </tbody>
          </table>
        </section>
        <button className='btn-primary px-6 py-3 font-bold mt-5 w-full' type='submit'>Bayar</button>
        <button
          className='btn-primary px-6 py-3 self-start font-bold mt-5 block lg:hidden w-full'
          type='button'
          onClick={prevAction}>Kembali</button>
      </div>
    </form>
  )
}

Step2.defaultProps = {
  formData: {
    world: '',
    name: '',
    growId: '',
    whatsapp: '',
    jumlah: 0,
    total: 0,
    dl: 0,
    bgl: 0,
    isDl: true
  }
}
