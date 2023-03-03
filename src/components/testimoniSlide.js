import React, { useRef, useState } from 'react'
import testimoni from '@/config/testimoni'
import { Icon } from '@iconify/react'
import TestimoniCard from './testimoniCard'

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

export default TestimoniSlide
