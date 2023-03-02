import paymentMethod from '@/config/paymentMethod'
import Image from 'next/image'

const paymentOption = (metodeBayar, setMetodeBayar) => {
  return paymentMethod.map((val, idx) => (
    <div key={idx} className='mt-5'>
      <label className='flex'>{val.category}</label>
      <section className='flex flex-wrap gap-6'>
        {val.list.map((val, idx) => (
          <label htmlFor={val.name} className='my-3 cursor-pointer' key={idx}>
            <input
              type='radio'
              id={val.name}
              name='paymentButton'
              value={val.idx}
              className='peer hidden'
              onChange={() => setMetodeBayar(val.idx)}
              required
              checked = {val.idx === metodeBayar}
              />
            <Image
              src={val.img}
              className='peer-checked:bg-opacity-100 peer-checked:border-[5px] bg-secondary-500 bg-opacity-50 hover:bg-opacity-100 p-5 object-contain h-[100px] w-[180px] transition-all'
              alt={val.name}
              width='150'
              height='100'/>
          </label>)
        )}
      </section>
    </div>
  ))
}

export default paymentOption
