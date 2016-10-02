class Stack {
  constructor(arr) {
    this.items = arr || []
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }
}

export default Stack
