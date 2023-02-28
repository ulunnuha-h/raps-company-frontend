import React from 'react'

export default function Step2 ({ nextAction }) {
  console.log(nextAction)
  const submitHandler = e => {
    e.preventDefault()
    nextAction()
  }

  return (
    <main className='container mx-auto py-16'>
      <form className='p-12 bg-[#ACB8DE] bg-opacity-20 flex flex-col' onSubmit={submitHandler}>
        <h3 className='text-white font-grotesk mb-7'>Form Penjualan Diamond Lock</h3>
        <section className='bg-secondary-500 text-primary-900 py-7 px-12 mb-7'>
          <h3 className='font-grotesk text-center mb-5'>Tutorial Mengirim Diamond Lock</h3>
          <ol className='ml-5 font-poppins text-xl list-decimal'>
            <li>Pastikan kamu telah mengirim foto sebagai bukti kepemilikan Diamond Lock melalui website ini.</li>
            <li>Klik tombol jual.</li>
            <li>Tunggu hingga Admin Rapsshop mengirimkan informasi melalui Whatsapp berupa World, Password, dan Owner Growtopia yang menjadi tempat pengiriman Diamond Lock.</li>
            <li>Lakukan pengiriman Diamond Lock sesuai dengan Informasi tersebut.</li>
            <li>Setelah pengiriman berhasil, Rapsshop akan melakukan transfer kepada nomor yang sesuai dengan metode pembayaran pilihanmu.</li>
          </ol>
        </section>
        <section className='text-primary-50 font-poppins flex flex-col'>
          <span>Unggah Bukti Kepemilikan Diamond Lock</span>
          <span className='text-sm'>Ukuran maksimal file : 5 mb, Format file : .png atau .jpg</span>
          <span className='my-5 border-2 w-full h-56 flex justify-center items-center flex-col text-center'>
            <label className='mb-3' htmlFor='file'>Drag and drop files here or click to upload</label>
            <input type='file' className='p-3 border-[1px]' id='file' name='file'></input>
          </span>
        </section>
        <button className='btn-primary px-12 py-4 self-end font-bold' type='submit'>Jual</button>
      </form>
    </main>
  )
}
