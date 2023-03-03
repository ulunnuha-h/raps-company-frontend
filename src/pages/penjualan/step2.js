import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

const allowedFormat = [
  'image/jpeg',
  'image/jpg',
  'image/png'
]

export default function Step2 ({ nextAction, prevAction, formDataHandler, formData }) {
  const [file, setFile] = useState(formData.file || { name: '' })
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    window.scroll(0, 0)
  }, [errorMessage])

  const fileHandler = (e) => {
    const { size, type } = e.target.files[0]
    console.log(size)
    const sizeOnMb = size / 1024 ** 2
    if (sizeOnMb > 5) {
      setErrorMessage('Ukuran file terlalu besar')
    } else if (!allowedFormat.some(val => val === type)) {
      setErrorMessage('Format file tidak sesuai')
    } else {
      setErrorMessage('')
      setFile(e.target.files[0])
    }
  }

  const submitHandler = e => {
    e.preventDefault()
    if (file.name !== '') {
      setErrorMessage('')
      formDataHandler({ file })
      nextAction()
    } else {
      setErrorMessage('Silakan upload screenshot bukti penjualan')
    }
  }

  const prevHandler = () => {
    if (file.name !== '') {
      formDataHandler({ file })
    }
    prevAction()
  }

  return (
    <main className='container mx-auto py-16'>
      <form className='form-card flex flex-col' onSubmit={submitHandler}>
        <h3 className='text-white font-grotesk mb-7'>Form Penjualan Diamond Lock</h3>
        { errorMessage !== ''
          ? (<p className='error-card'>
              <Icon icon="material-symbols:error" className='3xl' />
              <span>{errorMessage}</span>
            </p>)
          : null
        }
        <section className='bg-secondary-500 text-primary-900 p-5 lg:p-12 mb-7'>
          <h3 className='font-grotesk text-center mb-5'>Tutorial Mengirim Diamond Lock</h3>
          <ol className='ml-5 font-poppins text-sm lg:text-xl list-decimal'>
            <li>Pastikan kamu membawa DL yang akan dijual di inventory kamu.</li>
            <li>Buka aplikasi Growtopia dan kunjungi world sesuai informasi berikut:
              <ol className='list-disc ml-5'>
                <li>World: -</li>
                <li>Password: -</li>
                <li>Owner: -</li>
              </ol>
            </li>
            <li>Setelah kamu mengunjungi world tersebut, kirim DL milikmu.</li>
            <li>Transaksi penjualan selesai, Admin akan mengirimkan hasil penjualan kamu melalui nomor metode pembayaran yang telah kamu pilih.</li>
          </ol>
        </section>
        <section className='text-primary-50 font-poppins flex flex-col'>
          <span>Unggah Bukti Kepemilikan Diamond Lock</span>
          <span className='text-sm'>Ukuran maksimal file : 5 mb, Format file : .png, .jpeg atau .jpg</span>
          <span className='my-5 border-2 w-full h-56 flex justify-center items-center flex-col text-center'>
            <label className='mb-3' htmlFor='file'>Drag and drop files here or click to upload</label>
            <input
              type='file'
              className='p-3 border-[1px] w-3/4 lg:w-fit'
              id='file'
              name='file'
              onChange={fileHandler}
              accept=".jpg, .jpeg, .png"
              files={[file]}
              ></input>
          </span>
        </section>
        <section className='flex justify-between'>
          <button className='btn-primary px-5 lg:px-12 py-4 font-bold' type='button' onClick={prevHandler}>Kembali</button>
          <button
            className='btn-primary px-5 lg:px-12 py-4 font-bold'
            type='submit'
            disabled={errorMessage !== ''}>Jual</button>
        </section>
      </form>
    </main>
  )
}
