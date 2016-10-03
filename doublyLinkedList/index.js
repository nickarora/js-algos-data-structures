class Node {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  append(element) {
    const node = new Node(element)

    this.tail = node

    if (!this.head) {
      this.head = node
      this.length += 1
      return
    }

    let current = this.head

    while (current.next) {
      current = current.next
    }

    current.next = node
    node.prev = current

    this.length += 1
  }

  insert(position, element) {
    if (position < 0 || position >= this.length) return false

    const node = new Node(element)
    let current = this.head
    let previous
    let index = 0

    if (position === 0) {
      if (!this.head) {
        this.tail = node
      } else {
        node.next = current
        current.prev = node
      }

      this.head = node
      this.length += 1
      return true
    }

    while (index < position) {
      previous = current
      current = current.next
      index += 1
    }

    node.next = current
    previous.next = node
    current.prev = node
    node.prev = previous
    this.length += 1
    return true
  }

  removeAt(position) {
    if (!this.length || position < 0 || position >= this.length) return false

    let current = this.head
    let previous
    let index = 0

    if (position === 0) {
      this.head = current.next

      if (this.length === 1) {
        this.tail = null
      } else {
        this.head.prev = null
      }

      this.length -= 1
      return true
    }

    while (index < position) {
      previous = current
      current = current.next
      index += 1
    }

    previous.next = current.next
    current.next.prev = previous
    this.length -= 1
    return true
  }

  remove(element) {
    return this.removeAt(this.indexOf(element))
  }

  indexOf(element) {
    let current = this.head
    let index = 0

    while (current) {
      if (element === current.element) return index
      index += 1
      current = current.next
    }

    return -1
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  toString() {
    let current = this.head
    let string = ''

    while (current) {
      string += `${current.element}${current.next ? ' => ' : ''}`
      current = current.next
    }

    return string
  }

  print() {
    // eslint-disable-next-line
    console.log(this.toString())
  }
}

export default DoublyLinkedList
