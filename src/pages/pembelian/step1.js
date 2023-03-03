import phoneNumberFormatter from '@/utilities/phoneNumberFormatter'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

export default function Step1 ({ nextAction, formDataHandler, formData }) {
  const [world, setWorld] = useState(formData.world || '')
  const [name, setName] = useState(formData.name || '')
  const [growId, setGrwowId] = useState(formData.growId || '')
  const [whatsapp, setWhatsapp] = useState(formData.whatsapp || '')
  const [jumlah, setJumlah] = useState(formData.jumlah || 0)
  const [total, setTotal] = useState(formData.total || 0)
  const [hargaDl, setHargaDl] = useState(0)
  const [hargaBgl, setHargaBgl] = useState(0)
  const [dl, setDl] = useState(formData.dl || 0)
  const [bgl, setBgl] = useState(formData.bgl || 0)
  const [error, setError] = useState(false)
  const [isDl, setIsDl] = useState(true)

  const jumlahHandler = e => {
    const { value } = e.target
    setJumlah(value)
    setDl(value % 100)
    setBgl(Math.floor(value / 100))
    setTotal((value % 100) * hargaDl + Math.floor(value / 100) * hargaBgl)
  }

  useEffect(() => {
    setHargaDl(3400)
    setHargaBgl(330000)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    if (world === '' || name === '' || growId === '' || whatsapp === '' || jumlah === '' || total === '') {
      setError(true)
      window.scroll(0, 0)
    } else {
      setError(false)
      formDataHandler({
        world,
        name,
        growId,
        whatsapp: phoneNumberFormatter(whatsapp),
        jumlah,
        total,
        dl,
        bgl
      })
      nextAction()
    }
  }

  return (
    <main className='container mx-auto py-16'>
      <div className='form-card'>
        <h3 className='text-white font-grotesk mb-7'>Form Penjualan Diamond Lock</h3>
        <p className={`error-card ${error ? 'flex' : 'hidden'}`}>
          <Icon icon="material-symbols:error" className='text-3xl'/>
          <span>Silakan isi seluruh kolom form dan pilih metode pembayaran</span>
        </p>
        <form className='flex flex-col text-primary-50 font-poppins' onSubmit={submitHandler}>
          {/* Input world dan growid */}
          <section className='flex lg:gap-12 gap-3 mb-3 lg:mb-5 flex-col lg:flex-row'>
            <span className='flex flex-col w-full lg:w-2/5'>
              <label>World</label>
              <input
                type='text'
                className='input-field my-2'
                value={world} onChange={e => setWorld(e.target.value)}
                placeholder='Masukkan World'/>
            </span>
            <span className='flex flex-col w-full lg:w-2/5'>
              <label>Nomor GrowId</label>
              <input
                type='text'
                className='input-field my-2'
                placeholder='Masukkan GrowId'
                value={growId}
                onChange={e => setGrwowId(e.target.value) }/>
            </span>
          </section>
          {/* Input nama dan nomor whatsapp */}
          <section className='flex lg:gap-12 gap-3 mb-7 flex-col lg:flex-row'>
            <span className='flex flex-col w-full lg:w-2/5'>
              <label>Nama</label>
              <input
                type='text'
                className='input-field my-2'
                value={name} onChange={e => setName(e.target.value)}
                placeholder='Masukkan Nama'
                />
            </span>
            <span className='flex flex-col w-full lg:w-2/5'>
              <label>Nomor Whatsapp</label>
              <input
                type='text'
                className='input-field my-2'
                placeholder='Masukkan Nomor Whatsapp'
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value) }
                />
            </span>
          </section>
          {/* Input tipe dan jumlah pembelian */}
          <section className='flex lg:gap-12 gap-3 mb-7 flex-col lg:flex-row'>
            <span className='flex flex-col w-full lg:w-2/5'>
              <label className='mb-3'>Jenis Pembelian</label>
              <ul className='flex gap-5'>
                <li>
                    <input type='radio' id='dl' name='Jenis Pembelian' checked={isDl} className='cursor-pointer' onChange={() => setIsDl(true)}></input>
                    <label htmlFor='dl' className='mx-1'>Diamond Lock (DL)</label>
                </li>
                <li>
                    <input type='radio' id='bgl' name='Jenis Pembelian' checked={!isDl} className='cursor-pointer' onChange={() => setIsDl(false)}></input>
                    <label htmlFor='bgl' className='mx-1'>
                        <span>Blue Gem Lock (BGL)</span><br/>
                        <span className='lg:ml-[80px] text-sm'>1 BGL = 100 DL</span>
                    </label>
                </li>
              </ul>
            </span>
            <span className='flex flex-col w-full lg:w-2/5'>
              <label>Jumlah Pembelian</label>
              <input
                type='number'
                className='input-field my-2'
                placeholder='Masukkan Jumlah Pembelian'
                value={jumlah}
                onChange={jumlahHandler}
                />
            </span>
          </section>
          {/* harga dan input total harga */}
          <section className='flex lg:gap-12 gap-5 mb-7 flex-col-reverse lg:flex-row font-grotesk'>
            <span className='flex gap-3 lg:gap-7 flex-col w-full lg:w-2/5 justify-center'>
              <h3>DL Price: <span className='text-primary-500'>Rp 3.400</span></h3>
              <h3>BGL Price: <span className='text-primary-500'>Rp 330.000</span></h3>
            </span>
            <span className='flex flex-col w-full lg:w-2/5'>
              <label>Total Harga</label>
              <input
                type='number'
                className='input-field my-2'
                value={total}
                onChange={e => setTotal(e.target.value) }
                />
                <section className='flex gap-2'>
                    <span>DL : {dl}</span>
                    <span>BGL : {bgl}</span>
                </section>
            </span>
          </section>
          <button className='btn-primary px-6 py-4 self-end font-bold' type='submit'>Selanjutnya</button>
        </form>
      </div>
    </main>
  )
}
