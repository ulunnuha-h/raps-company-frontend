import React, { useRef, useState } from 'react'
import testimoni from '@/config/testimoni'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const TestimoniSlide = () => {
  const slider = useRef()
  const [scroll, setScroll] = useState('')
  const [leftArrow, setLeftArrow] = useState(false)
  const [rightArrow, setRightArrow] = useState(true)

  const moveLeft = () => {
    setScroll(slider.current.children[0].clientWidth)
    const currentScroll = slider.current.scrollLeft -= scroll
    checkArrow(currentScroll)
  }

  const moveRight = () => {
    setScroll(slider.current.children[0].clientWidth)
    const currentScroll = slider.current.scrollLeft += scroll
    checkArrow(currentScroll)
  }

  const checkArrow = (currentScroll) => {
    const { scrollWidth, clientWidth } = slider.current
    if (currentScroll > (scrollWidth - clientWidth - 1)) setRightArrow(false)
    else setRightArrow(true)

    if (currentScroll > 1) setLeftArrow(true)
    else setLeftArrow(false)
  }

  return (
    <main className='flex items-center'>
      <h1 onClick={moveLeft} className={`text-secondary-500 ${leftArrow ? 'cursor-pointer' : 'text-opacity-25'}`}>
        <Icon icon="material-symbols:navigate-before" />
      </h1>
      <div className='w-full whitespace-nowrap overflow-hidden snap-x' ref={slider} id='slider'>
        {testimoni.map((val, idx) => (
          <TestimoniCard val={val} key={idx}/>
        ))}
      </div>
      <h1 onClick={moveRight} className={`text-secondary-500 ${rightArrow ? 'cursor-pointer' : 'text-opacity-25'}`}>
          <Icon icon="material-symbols:navigate-next" />
      </h1>
    </main>
  )
}

const TestimoniCard = ({ val }) => {
  return (
    <div className='w-full lg:w-1/3 inline-block px-2 snap-center'>
      <section className='testimoni-card flex flex-col items-center px-5 py-9 box-border w-full whitespace-normal'>
        <h2>
          <Icon icon="material-symbols:format-quote" />
        </h2>
        <p className='text-center my-9 mx-2'>{val.text}</p>
        <section className='flex gap-2'>
          <Image src={val.emote} alt='emote1' width='48' height='48'></Image>
          <aside className='flex flex-col'>
            <span className='font-bold'>{val.title}</span>
            <span className='text-xs'>{val.subtitle}</span>
          </aside>
        </section>
      </section>
    </div>
  )
}

export default TestimoniSlide
