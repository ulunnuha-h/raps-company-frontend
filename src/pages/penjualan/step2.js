import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { postPenjualan } from '@/data/penjualan'
import { getEnvironment } from '@/data/environment'

const allowedFormat = [
  'image/jpeg',
  'image/jpg',
  'image/png'
]

export default function Step2 ({ nextAction, prevAction, formDataHandler, formData }) {
  const [file, setFile] = useState(formData.file || null)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [environment, setEnvironment] = useState({})

  useEffect(() => {
    getEnvironment()
      .then(({ data }) => setEnvironment(data.data))
  }, [])

  useEffect(() => {
    window.scroll(0, 0)
  }, [errorMessage])

  const fileHandler = (e) => {
    setFile(e.target.files[0])
  }

  const errorHandler = (msg) => {
    setErrorMessage(msg)
    window.scroll(0,0)
  }

  const submitHandler = e => {
    e.preventDefault()
    setLoading(true)
    if (file) {
      errorHandler('')
      formDataHandler({ file })
      postPenjualan({ ...formData, file })
        .then(() => {
          errorHandler('')
          nextAction()
        })
        .catch(({response}) => {
          errorHandler(response.data.message)
        })
        .finally(() => setLoading(false))
    } else {
      errorHandler('Silakan upload screenshot bukti penjualan')
      setLoading(false)
    }
  }

  const prevHandler = () => {
    if (file) {
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
          <ol className='ml-5 font-poppins text-sm lg:text-xl list-decimal '>
            <li>Buka aplikasi Growtopia dan kunjungi sesuai informasi berikut :
              <ol className='list-[lower-latin] ml-5'>
                <li>World: {environment.world}</li>
                <li>Owner: {environment.owner}</li>
                <li>Password: {environment.password}</li>
              </ol>
            </li>
            <li>Drop Diamond Lock kamu ke Donation Box (WAJIB TULIS NO WA PADA DONATION BOX YA!).</li>
            <li>Screenshot lalu masukan bukti screenshot ke website ya.</li>
            <li>Admin akan melakukan pengecekan dan mengirimkan hasil penjualan kamu melalui nomor metode pembayaran yang telah kamu pilih.</li>
            <li>Transaksi Sukses, Terimakasih.</li>
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
              ></input>
          </span>
        </section>
        <section className='flex justify-between'>
          <button className='btn-primary px-5 lg:px-12 py-4 font-bold' disabled={loading} type='button' onClick={prevHandler}>Kembali</button>
          <button
            className='btn-primary px-5 lg:px-12 py-4 font-bold'
            type='submit'
            disabled={errorMessage !== ''}>{loading ? 'Loading . . .' : 'Jual'}</button>
        </section>
      </form>
    </main>
  )
}

Step2.defaultProps = {
  formData: {
    jumlah: 0,
    whatsapp: '',
    norekening: '',
    metodeBayar: null,
    file: null
  }
}
