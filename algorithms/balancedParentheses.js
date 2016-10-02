/* Balanced Parentheses
  Balanced parentheses means that each opening symbol
  has a corresponding closing symbol and the pairs of
  parentheses are properly nested. */

import Stack from '../stack'

const balancedParentheses = (expression) => {
  const BreakException = {}

  try {
    const paren = new Stack()

    expression.split('').forEach((char) => {
      if (char === '(') {
        paren.push('(')
      }

      if (char === ')' && !paren.isEmpty()) {
        paren.pop()
      } else if (char === ')') {
        throw BreakException
      }

      return
    })

    if (!paren.isEmpty()) throw BreakException
  } catch (e) {
    if (e === BreakException) return false
  }

  return true
}

// console.log('testing (())', balancedParentheses('(())'))
// console.log('testing ))((', balancedParentheses('))(('))
// console.log('testing (abc + (xyz - tty()))', balancedParentheses('(abc + (xyz - tty()))'))
// console.log('testing (abc + (xyz - tty())', balancedParentheses('(abc + (xyz - tty())'))

export default balancedParentheses
