import React from 'react'

const InfiniteScrollText = () => {
  const text = 'BUY 1 GET 1'
  return (
    <section className='absolute bottom-0 overflow-hidden w-[98vw]'>
      <h2 className='bottom-0 text-center font-grotesk font-outline-1 text-white whitespace-nowrap animate-scrollText'>
        {[1, 1, 1, 1, 1, 1, 1, 1].map((val, idx) => (
          <>{text} <span className='text-transparent'> {text} </span></>
        ))}
      </h2>
    </section>
  )
}

export default InfiniteScrollText
