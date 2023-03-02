import React, { useState } from 'react'

export default function Step1 ({ nextAction }) {
  const [world, setWorld] = useState()
  // const [name, setName] = useState()
  const [growId, setGrwowId] = useState()
  const [whatsapp, setWhatsapp] = useState()
  const [jumlah, setJumlah] = useState()

  const submitHandler = (e) => {
    e.preventDefault()
    nextAction()
  }

  return (
    <main className='container mx-auto pt-16'>
      <div className='p-12 bg-[#ACB8DE] bg-opacity-20'>
        <h3 className='text-white font-grotesk mb-7'>Form Penjualan Diamond Lock</h3>
        <form className='flex flex-col text-primary-50 font-poppins' onSubmit={submitHandler}>
          {/* Input world dan growid */}
          <section className='flex md:gap-12 gap-3 mb-7 flex-col md:flex-row'>
            <span className='flex flex-col w-2/5'>
              <label>World</label>
              <input
                type='text'
                className='input-field my-2'
                value={world} onChange={e => setWorld(e.target.value)}
                placeholder='Masukkan World'/>
            </span>
            <span className='flex flex-col w-2/5'>
              <label>Nomor GrowId</label>
              <input
                type='number'
                className='input-field my-2'
                placeholder='Masukkan GrowId'
                value={growId}
                onChange={e => setGrwowId(e.target.value) }/>
            </span>
          </section>
          {/* Input nama dan nomor whatsapp */}
          <section className='flex md:gap-12 gap-3 mb-7 flex-col md:flex-row'>
            <span className='flex flex-col w-2/5'>
              <label>Nama</label>
              <input
                type='number'
                className='input-field my-2'
                value={jumlah} onChange={e => setJumlah(e.target.value)}
                placeholder='Masukkan Nama'
                />
            </span>
            <span className='flex flex-col w-2/5'>
              <label>Nomor Whatsapp</label>
              <input
                type='number'
                className='input-field my-2'
                placeholder='Masukkan Nomor Whatsapp'
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value) }
                />
            </span>
          </section>
          {/* Input tipe dan jumlah pembelian */}
          <section className='flex md:gap-12 gap-3 mb-7 flex-col md:flex-row'>
            <span className='flex flex-col w-2/5'>
              <label className='mb-3'>Jenis Pembelian</label>
              <ul className='flex gap-5'>
                <li>
                    <input type='radio' id='dl' name='Jenis Pembelian'></input>
                    <label htmlFor='dl' className='mx-1'>Diamond Lock (DL)</label>
                </li>
                <li>
                    <input type='radio' id='bgl' name='Jenis Pembelian'></input>
                    <label htmlFor='bgl' className='mx-1'>
                        <span>Blue Gem Lock (BGL)</span><br/>
                        <span className='ml-[90px] text-sm'>1 BGL = 100 DL</span>
                    </label>
                </li>
              </ul>
            </span>
            <span className='flex flex-col w-2/5'>
              <label>Jumlah Pembelian</label>
              <input
                type='number'
                className='input-field my-2'
                placeholder='Masukkan Jumlah Pembelian'
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value) }
                />
                <section className='flex gap-2'>
                    <span>DL : -</span>
                    <span>BGL : -</span>
                    <span className='items-end'>Total Harga : -</span>
                </section>
            </span>
          </section>
          {/* Input tipe dan jumlah pembelian */}
          <section className='flex md:gap-12 gap-3 mb-7 flex-col md:flex-row font-grotesk'>
            <h3 className='w-2/5'>DL Price: <span className='text-primary-500'>Rp 3.400</span></h3>
            <h3 className='w-2/5'>BGL Price: <span className='text-primary-500'>Rp 330.00</span></h3>
          </section>
          <button className='btn-primary px-6 py-4 self-end font-bold' type='submit'>Selanjutnya</button>
        </form>
      </div>
    </main>
  )
}
