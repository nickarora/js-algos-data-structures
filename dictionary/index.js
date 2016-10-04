class Dictionary {
  constructor() {
    this.items = {}
  }

  set(key, value) {
    this.items[key] = value
  }

  get(key) {
    return this.items[key]
  }

  getItems() {
    return this.items
  }

  delete(key) {
    if (!this.has(key)) return false
    delete this.items[key]
    return true
  }

  has(key) {
    // eslint-disable-next-line
    return this.items.hasOwnProperty(key)
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  keys() {
    return Object.keys(this.items)
  }

  values() {
    return Object.values(this.items)
  }
}

export default Dictionary
