const phoneNumberFormatter = (number) => {
  number = number.trimStart()
  if (number[0] === '0') {
    number = number.slice(1)
    number = '+62' + number
  }
  return number
}

export default phoneNumberFormatter
