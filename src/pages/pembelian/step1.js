import phoneNumberFormatter from '@/utilities/phoneNumberFormatter'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { getHarga } from '@/data/harga'
import gambarDl from '../../../public/assets/dl.svg'
import gambarBgl from '../../../public/assets/bgl.svg'
import Image from 'next/image'

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
  const [isDl, setIsDl] = useState(formData.isDl !== undefined ? formData.isDl : true)

  // Fungsi yang dijalankan ketika kolom jumlah berubah
  const jumlahHandler = e => {
    const { value } = e.target
    if (isDl) {
      setJumlah(value)
      setDl(value % 100)
      setBgl(Math.floor(value / 100))
      setTotal((value % 100) * hargaDl + Math.floor(value / 100) * hargaBgl)
    } else {
      setJumlah(value)
      setBgl(value)
      setDl(0)
      setTotal(value * hargaBgl)
    }
  }

  // Fungsi yang dijalankan ketika kolom total diubah
  const totalHandler = e => {
    const { value } = e.target
    if (isDl) {
      setTotal(value)
      const jumlahBgl = Math.floor(value / hargaBgl)
      const jumlahDl = ((value % hargaBgl) / hargaDl)
      const jumlah = (jumlahBgl * 100 + jumlahDl).toFixed(2)
      setJumlah(jumlah)
      setDl(Math.floor(jumlahDl))
      setBgl(Math.floor(jumlahBgl))
    } else {
      setTotal(value)
      setBgl(Math.floor(value / hargaBgl))
      setJumlah((value / hargaBgl).toFixed(2))
      setDl(0)
    }
  }

  // Fungsi yang dijalankan ketika pilihan dl atau bgl diubah
  const isDlHandler = (value) => {
    setIsDl(value)
    setBgl(0)
    setDl(0)
    setTotal(0)
    setJumlah(0)
  }

  useEffect(() => {
    getHarga()
      .then(({ data }) => {
        setHargaDl(data.data.harga_beli_dl)
        setHargaBgl(data.data.harga_beli_bgl)
      })
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    if (world === '' || name === '' || growId === '' || whatsapp === '' || jumlah === '' || total === '' || total === 0) {
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
        bgl,
        isDl
      })
      nextAction()
    }
  }

  return (
    <main className='container mx-auto py-16'>
      <div className='form-card'>
        <h3 className='text-white font-grotesk mb-7'>Form Pembelian Diamond Lock</h3>
        <p className={`error-card ${error ? 'flex' : 'hidden'}`}>
          <Icon icon="material-symbols:error" className='text-3xl'/>
          <span>Silakan isi seluruh kolom form</span>
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
              <label>Grow ID</label>
              <input
                type='text'
                className='input-field my-2'
                placeholder='Masukkan Grow ID'
                value={growId}
                onChange={e => setGrwowId(e.target.value) }/>
            </span>
          </section>
          {/* Input nama dan nomor whatsapp */}
          <section className='flex lg:gap-12 gap-3 mb-7 flex-col lg:flex-row'>
            <span className='flex flex-col w-full lg:w-2/5'>
              <label>Nama Lengkap</label>
              <input
                type='text'
                className='input-field my-2'
                value={name} onChange={e => setName(e.target.value)}
                placeholder='Masukkan Nama Lengkap'
                />
            </span>
            <span className='flex flex-col w-full lg:w-2/5'>
              <label>Nomor Whatsapp (contoh : 082xxxxxxxxx)</label>
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
            <span className='flex flex-col w-full lg:w-2/5 mb-7 lg:mb-0'>
              <label className='mb-3'>Jenis Pembelian</label>
              <ul className='flex gap-4 flex-col'>
                <li className='flex items-center w-fit'>
                    <input type='radio' id='dl' name='Jenis Pembelian' checked={isDl} className='cursor-pointer' onChange={() => isDlHandler(true)}></input>
                    <label htmlFor='dl' className='mx-1 flex items-center gap-2'>
                      <span>Diamond Lock</span>
                      <Image src={gambarDl} height='25' width='25' alt='Gambar DL' className='hover:scale-125 duration-300'></Image>
                    </label>
                </li>
                <li className='flex items-center w-fit'>
                    <input type='radio' id='bgl' name='Jenis Pembelian' checked={!isDl} className='cursor-pointer' onChange={() => isDlHandler(false)}></input>
                    <label htmlFor='bgl' className='mx-1 flex items-center gap-2'>
                        <span>Blue Gem Lock</span>
                        <Image src={gambarBgl} height='25' width='25' alt='Gambar BGL' className='hover:scale-125 duration-300'></Image>
                        <span className='text-xs'> 1 BGL = 100 DL</span>
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
              <h3>DL Price: <span className='text-primary-500'>Rp {hargaDl.toLocaleString()}</span></h3>
              <h3>BGL Price: <span className='text-primary-500'>Rp {hargaBgl.toLocaleString()}</span></h3>
            </span>
            <span className='flex flex-col w-full lg:w-2/5'>
              <label>Total Harga</label>
              <input
                type='number'
                className='input-field my-2'
                value={total}
                onChange={totalHandler}
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

Step1.defaultProps = {
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
