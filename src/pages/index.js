import React from 'react'
import background from '../../public/assets/background.jpg'

export default function Home () {
  return (
    <main className='bg-cover bg-bottom' style={ { backgroundImage: `url(${background.src})` }}>
      <div className='container mx-auto h-screen' id='hero' >
        <section className='flex justify-center items-center h-full'>
          <p className='text-red-500'>
            Get started by editing&nbsp;
            <code className=''>src/pages/index.js</code>
          </p>
        </section>
      </div>
    </main>
  )
}
