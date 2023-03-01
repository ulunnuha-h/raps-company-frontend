import React, { useEffect, useState } from 'react'
import paymentOption from '@/components/paymentOption'

export default function Step1 ({ nextAction, formDataHandler, formData }) {
  const [jumlah, setJumlah] = useState(formData.jumlah || '')
  const [whatsapp, setWhatsapp] = useState(formData.whatsapp || '')
  const [norekening, setNorekening] = useState(formData.norekening || '')
  const [metodeBayar, setMetodeBayar] = useState(formData.metodeBayar)
  const [hargaDl, setHargaDl] = useState()

  useEffect(() => {
    setHargaDl(3200)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()

    formDataHandler({
      jumlah,
      whatsapp,
      norekening,
      metodeBayar
    })
    nextAction()
  }

  return (
    <main className='container mx-auto pt-16'>
      <div className='p-12 bg-[#ACB8DE] bg-opacity-20'>
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
              <span>Nominal yang akan didapatkan: <b>Rp. {(jumlah * hargaDl || 0).toLocaleString('en-US')}</b></span>
            </span>
            <span className='flex flex-col w-2/5'>
              <label>Nomor Whatsapp (Contoh: 082xxxxxxxxx)</label>
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
            {paymentOption(metodeBayar, setMetodeBayar)}
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
