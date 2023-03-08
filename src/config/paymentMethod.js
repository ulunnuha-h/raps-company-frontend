import payment0 from '../../public/assets/paymentMethod/0.png'
import payment1 from '../../public/assets/paymentMethod/1.png'
import payment2 from '../../public/assets/paymentMethod/2.png'
import payment6 from '../../public/assets/paymentMethod/6.png'
import payment8 from '../../public/assets/paymentMethod/8.png'
import payment4 from '../../public/assets/paymentMethod/4.png'

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
      }
    ]
  },
  {
    category: 'Transfer Bank',
    list: [
      {
        name: 'bca',
        idx: 4,
        img: payment8
      },
      {
        name: 'bri',
        idx: 5,
        img: payment4
      },
      {
        name: 'bni',
        idx: 6,
        img: payment6
      }
    ]
  }
]

export default paymentMethod
