/* Challenge: convert decimal number to binary */

import Stack from '../stack'

const decimalConverter = (initialNumber, base) => {
  const remStack = new Stack()
  const digits = '0123456789ABCDEF'
  let binaryString = ''
  let number = initialNumber

  while (number > 0) {
    remStack.push(number % base)
    number = Math.floor(number / base)
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()]
  }

  return binaryString
}

// console.log('binary', decimalConverter(234, 2)) => 11101010
// console.log('binary', decimalConverter(52234, 16)) => CC0A

export default decimalConverter
