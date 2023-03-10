import React, { useEffect, useState } from 'react'
import paymentOption from '@/components/paymentOption'
import { Icon } from '@iconify/react'
import phoneNumberFormatter from '@/utilities/phoneNumberFormatter'
import { getHarga } from '@/data/harga'

export default function Step1 ({ nextAction, formDataHandler, formData }) {
  const [jumlah, setJumlah] = useState(formData.jumlah || 0)
  const [whatsapp, setWhatsapp] = useState(formData.whatsapp || '')
  const [norekening, setNorekening] = useState(formData.norekening || '')
  const [metodeBayar, setMetodeBayar] = useState(formData.metodeBayar)
  const [hargaDl, setHargaDl] = useState(0)
  const [error, setError] = useState(false)

  useEffect(() => {
    getHarga()
      .then(({ data }) => setHargaDl(data.data.harga_jual_dl))
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()

    if (jumlah === '' || norekening === '' || whatsapp === '' || metodeBayar === undefined) {
      setError(true)
      window.scroll(0, 0)
    } else {
      formDataHandler({
        jumlah,
        whatsapp: phoneNumberFormatter(whatsapp),
        norekening,
        metodeBayar
      })
      setError(false)
      nextAction()
    }
  }

  return (
    <main className='container mx-auto pt-16'>
      <div className='form-card'>
        <h3 className='text-white font-grotesk mb-7'>Form Penjualan Diamond Lock</h3>
        <p className={`error-card ${error ? 'flex' : 'hidden'}`}>
          <Icon icon="material-symbols:error" className='text-3xl'/>
          <span>Silakan isi seluruh kolom form dan pilih metode pembayaran</span>
        </p>
        <form className='flex flex-col text-primary-50 font-poppins' onSubmit={submitHandler}>
          {/* Input jumlah diamond lock dan nomor whatsapp */}
          <section className='flex md:gap-12 gap-3 mb-7 flex-col md:flex-row'>
            <span className='flex flex-col lg:w-2/5 w-full mb-2'>
              <label>Jumlah Diamond Lock</label>
              <input
                type='number'
                className='input-field my-2'
                value={jumlah} onChange={e => setJumlah(e.target.value)}
                placeholder='Masukkan Jumlah Diamond Lock'
                />
              <span>Nominal yang akan didapatkan: <b>Rp. {(jumlah * hargaDl || 0).toLocaleString('en-US')}</b></span>
            </span>
            <span className='flex flex-col lg:w-2/5 mb-2'>
              <label>Nomor Whatsapp (Contoh: 082xxxxxxxxx)</label>
              <input
                type='text'
                className='input-field my-2'
                placeholder='Masukkan Nomor Whatsapp'
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value) }
                />
            </span>
          </section>
          {/* Memilih metode pembayaran */}
          <label>Metode Pembayaran Hasil Penjualan (Pilih salah satu)</label>
          <section>
            {paymentOption(metodeBayar, setMetodeBayar, 'qris')}
          </section>
          {/* Input no rekening atau e-wallet */}
          <span className='flex flex-col lg:w-2/5 my-5'>
            <label>Nomor Rekening Bank/Dompet Digital</label>
            <input
              type='text'
              className='input-field my-2'
              placeholder='Masukkan Nomor Rekening Bank/Dompet Digital'
              value={norekening}
              onChange={e => setNorekening(e.target.value)}
            />
          </span>
          <button className='btn-primary px-6 py-4 self-end font-bold' type='submit'>Selanjutnya </button>
        </form>
      </div>
    </main>
  )
}

Step1.defaultProps = {
  formData: {
    jumlah: 0,
    whatsapp: '',
    norekening: '',
    metodeBayar: null
  }
}
