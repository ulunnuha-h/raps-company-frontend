const phoneNumberFormatter = (number) => {
  if (number[0] === '0') number.slice(1)

  number = '+62' + number
  return number
}

export default phoneNumberFormatter
