import React from 'react'

const InfiniteScrollText = () => {
  const text = 'DISKON BGL'
  return (
    <marquee className='absolute bottom-0 overflow-hidden w-[98vw]'>
      <h2 className='bottom-0 text-center font-grotesk font-outline-1 text-white whitespace-nowrap'>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((val, idx) => (
          <span key={idx}>{text} <span className='text-transparent'> {text} </span></span>
        ))}
      </h2>
    </marquee>
  )
}

export default InfiniteScrollText
