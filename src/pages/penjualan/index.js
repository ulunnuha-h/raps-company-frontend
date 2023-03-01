import React, { useCallback, useEffect, useState } from 'react'
import bg from '../../../public/assets/backgroundPolos.jpg'
import { Icon } from '@iconify/react'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'

export default function Penjualan () {
  const [action, setAction] = useState(0)
  const [children, setChildren] = useState()
  const [formData, setFormData] = useState({})

  const formDataHandler = useCallback((data) => {
    let newData = formData
    newData = { ...newData, ...data }
    console.log(newData)
    setFormData(newData)
  }, [formData])

  const actionIndicator = (targetAction, styleIfTrue, styleIfFalse) => {
    if (action > targetAction) {
      return styleIfTrue
    } else {
      return styleIfFalse
    }
  }

  useEffect(() => {
    const nextAction = () => {
      setAction(action + 1)
      window.scroll(0, 0)
    }
    const prevAction = () => {
      setAction(action - 1)
      window.scroll(0, 0)
    }
    switch (action) {
      case 0:
        setChildren(<Step1 {...{ nextAction, formDataHandler, formData }}/>)
        break
      case 1:
        setChildren(<Step2 {...{ nextAction, prevAction, formDataHandler, formData }}/>)
        break
      case 2:
        setChildren(<Step3/>)
        break
    }
  }, [action, formData, formDataHandler])

  return (
    <main
        style={ { backgroundImage: `url(${bg.src})` }}
        className='bg-no-repeat bg-[#021331] pt-12 bg-cover'>
        <div className='pt-16 container mx-auto'>
            <section className='flex justify-between'>
              <p className='basis-1/3 text-left'>Isi Form</p>
              <p className='basis-1/3 text-center'>Upload Bukti Diamond Lock</p>
              <p className='basis-1/3 text-right'>Jual</p>
            </section>
            <section className='flex justify-between w-full items-center px-5'>
              <h2 className='-mx-5 z-10 text-primary-500'>
                  <Icon icon="material-symbols:square" />
              </h2>
              <p className='h-3 w-full bg-neutral-500 relative'>
                <span className={`bg-primary-500 h-full absolute transition-all ${actionIndicator(0, 'w-full', 'w-0')}`}></span>
              </p>
              <h2 className={`-mx-5 z-10 ${actionIndicator(0, 'text-primary-500', 'text-neutral-500')}`}>
                  <Icon icon="material-symbols:square" />
              </h2>
              <p className='h-3 w-full bg-neutral-500 relative'>
                <span className={`bg-primary-500 h-full absolute transition-all ${actionIndicator(1, 'w-full', 'w-0')}`}></span>
              </p>
              <h2 className={`-mx-5 z-10 ${actionIndicator(1, 'text-primary-500', 'text-neutral-500')}`}>
                  <Icon icon="material-symbols:square"/>
              </h2>
            </section>
        </div>
        {children}
    </main>
  )
}
