class Queue {
  constructor(arr) {
    this.items = arr || []
  }

  enqueue(items) {
    this.items.push(items)
  }

  dequeue() {
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }
}

export default Queue
