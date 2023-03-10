import React, { useEffect, useState } from 'react'
import logo from '../../public/assets/logo.svg'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import navLink from '@/config/navLink'
import { getAllSocialMedia } from '@/data/platforms'

export default function Navbar () {
  // Open untuk mengindikasikan navbar responsive terbuka atau tidak
  const [open, setOpen] = useState(false)
  const openHandler = () => setOpen(!open)
  const openStyle = () => {
    if (open) {
      return 'top-0 opacity-100'
    } else {
      return '-top-96 opacity-0 lg:top-0 lg:opacity-100'
    }
  }

  // Client Window Height berguna untuk menghitung jarak yang sudah di scroll untuk perubahan style navbar
  const [clientWindowHeight, setClientWindowHeight] = useState('')
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }

  // ShowBg untuk mengindikasikan munculnya background dan ShowBtn untuk munculnya button pada navbar
  const [showBg, setShowBg] = useState(false)
  const [showBtn, setShowBtn] = useState(false)
  const [urlParam, setUrlParam] = useState('')

  const bgStyle = () => (showBg ? 'bg-secondary-900 lg:bg-secondary-700' : 'lg:bg-transparent bg-secondary-900')
  const btnStyle = () => (showBtn ? 'w-full block' : 'lg:w-0 block lg:hidden')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    if (clientWindowHeight > 0) {
      setShowBg(true)
    } else {
      setShowBg(false)
    }

    if (clientWindowHeight > 400 || urlParam !== '/') {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [clientWindowHeight, urlParam])

  const router = useRouter()

  useEffect(() => {
    setUrlParam(router.pathname)
  }, [router])

  const autoPlayAudio = () => {
    const audio = document.getElementById('audio')
    audio.play()
      .then(val => console.log(val))
      .catch(err => console.log(err))
  }

  // Setting sosial media di navbar
  const [sosmed, setSosmed] = useState([])
  useEffect(() => {
    getAllSocialMedia()
      .then(({ data }) => setSosmed(data.data))
  }, [])

  const navButton = navLink.map((val, idx) => (
    <li
      key={idx}
      className="lg:ml-3 text-white flex items-center lg:my-2 my-1 transition-all">
      <Link
        href={val.href}
        as={val.href}
        className='lg:hover:font-bold active:bg-primary-900 transition-all lg:py-0 py-3 rounded-sm mx-auto lg:m-0 w-full text-center'
        scroll={false}>
        {val.name}
      </Link>
    </li>
  ))

  return (
    <div className={`fixed w-full ${bgStyle()} duration-300`}>
      <div className='bg-secondary-700'>
        <section className='text-primary-300 container mx-auto py-2 font-poppins flex justify-between'>
          <span className='flex gap-3'>
          {sosmed.map((val, idx) => {
            return (
              <a key={idx} href={val.link} target="_blank">
                <Icon icon={`fa6-brands:${val.platform.toLowerCase()}`} className='text-2xl'/>
              </a>
            )
          })}
          </span>
          <span>Raps Company</span>
        </section>
      </div>
      <nav className='flex justify-between py-3 px-7 lg:px-0 container mx-auto transition-all' onLoad={() => autoPlayAudio()}>
        <audio controls id='audio' loop autoPlay src='/Growtopia.mp3' className='hidden'
        />
        <Link href='./' as='./' className='flex z-10'>
          <Image src={logo} alt="logo"/>
        </Link>
        <button className='block lg:hidden text-white active:bg-primary-700 px-1 rounded-sm' onClick={openHandler}>
          <h2><Icon icon="octicon:three-bars" /></h2>
        </button>
        <ul className={`lg:flex font-poppins responsive-nav gap-2 duration-300 ${openStyle()}`}>
          {navButton}
          <section className={`${btnStyle()} flex justify-center gap-5 lg:ml-5 lg:mt-0 mt-5 m-0 transition-all overflow-hidden duration-300`}>
            <Link href='./penjualan' as='./penjualan' className='btn-secondary px-7 py-1 text-base h-fit'>Jual</Link>
            <Link href='./pembelian' as='./pembelian' className='btn-primary px-7 py-1 text-base h-fit'>Beli</Link>
          </section>
        </ul>
      </nav>
    </div>
  )
}
