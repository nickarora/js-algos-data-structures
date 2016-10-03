/* Technically, this is a min priority queue (1 is higher priority than 2) */

class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue {
  constructor(arr = []) {
    this.items = arr
  }

  enqueue(item, priority) {
    const queueElement = new QueueElement(item, priority)

    try {
      const breakEarly = {}
      this.items.forEach((el, i) => {
        if (queueElement.priority < el.priority) {
          this.items.splice(i, 0, queueElement)
          throw breakEarly
        }
      })
    } catch (e) {
      return
    }

    this.items.push(queueElement)
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

export default PriorityQueue
