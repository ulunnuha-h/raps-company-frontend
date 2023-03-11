import payment0 from '../../public/assets/paymentMethod/0.svg'
import payment1 from '../../public/assets/paymentMethod/1.svg'
import payment2 from '../../public/assets/paymentMethod/2.svg'
import payment3 from '../../public/assets/paymentMethod/3.svg'
import payment4 from '../../public/assets/paymentMethod/4.svg'
import payment5 from '../../public/assets/paymentMethod/5.svg'
import payment10 from '../../public/assets/paymentMethod/10.svg'
import payment20 from '../../public/assets/paymentMethod/20.svg'

const paymentMethod = [
  {
    category: 'Dompet Digital',
    list: [
      {
        name: 'qris',
        idx: 1,
        img: payment0
      },
      {
        name: 'gopay',
        idx: 2,
        img: payment1
      },
      {
        name: 'shopeepay',
        idx: 3,
        img: payment2
      },
      {
        name: 'dana',
        idx: 11,
        img: payment10
      },
      {
        name: 'ovo',
        idx: 21,
        img: payment20
      }
    ]
  },
  {
    category: 'Transfer Bank',
    list: [
      {
        name: 'bca',
        idx: 4,
        img: payment3
      },
      {
        name: 'bri',
        idx: 5,
        img: payment4
      },
      {
        name: 'bni',
        idx: 6,
        img: payment5
      }
    ]
  }
]

export default paymentMethod
