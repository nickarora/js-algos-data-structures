/*
  Towers of Hanoi
  Classic disc moving problem
  Move a stack of discs with two simple rules:
  1. A larger disc can never be on top of a smaller disc
  2. Only one disc can be moved at a time
*/

import Stack from '../stack'

const towersOfHanoi = (numOfDiscs) => {
  const a = new Stack()
  const b = new Stack()
  const c = new Stack()

  // setup initial stack
  for (let i = numOfDiscs; i > 0; i -= 1) {
    a.push(i)
  }

  /* eslint-disable no-console */
  const printTowers = (from, to, helper) => {
    console.log('-----')
    console.log('Source:', from)
    console.log('Helper:', helper)
    console.log('Dest:', to)
  }
  /* eslint-enable no-console */

  const move = (n, from, to, helper) => {
    if (n <= 0) return
    move(n - 1, from, helper, to)
    to.push(from.pop())
    printTowers(from, to, helper)
    move(n - 1, helper, to, from)
  }

  move(numOfDiscs, a, c, b)
}

towersOfHanoi(3)

export default towersOfHanoi
