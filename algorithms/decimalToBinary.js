/* Challenge: convert decimal number to binary */

import Stack from '../stack'

const decimalToBinary = (initialNumber) => {
  const remStack = new Stack()
  let binaryString = ''
  let number = initialNumber

  while (number > 0) {
    remStack.push(number % 2)
    number = Math.floor(number / 2)
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop()
  }

  return parseInt(binaryString, 10)
}

// console.log('binary', decimalToBinary(234)) => 11101010

export default decimalToBinary
