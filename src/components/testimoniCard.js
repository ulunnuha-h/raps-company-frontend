import React from 'react'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const TestimoniCard = ({ val }) => {
  console.log(val.gambar)
  return (
    <div className='w-full sm:w-1/2 lg:w-1/3 inline-block px-2 snap-center'>
      <section className='testimoni-card flex flex-col items-center p-5 lg:px-5 lg:py-9 box-border w-full whitespace-normal'>
        <h2>
          <Icon icon="material-symbols:format-quote" />
        </h2>
        <p className='text-center my-9 mx-2'>{val.testimoni}</p>
        <section className='flex gap-2'>
          <Image src={`${val.gambar}`} alt='emote1' width='48' height='48'></Image>
          <aside className='flex flex-col'>
            <span className='font-bold'>{val.username}</span>
            <span className='text-xs'>{val.title}</span>
          </aside>
        </section>
      </section>
    </div>
  )
}

export default TestimoniCard
