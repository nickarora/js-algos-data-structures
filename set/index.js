class Set {
  constructor() {
    this.items = {}
  }

  add(value) {
    if (this.has(value)) return false
    this.items[value] = value
    return true
  }

  delete(value) {
    if (!this.has(value)) return false
    delete this.items[value]
    return true
  }

  has(value) {
    // eslint-disable-next-line
    return this.items.hasOwnProperty(value)
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.values(this.items)
  }
}

export default Set
