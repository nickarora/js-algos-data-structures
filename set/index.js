/* simulates the ES6 Set built in class */
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

  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value))
    return unionSet
  }

  intersection(otherSet) {
    const intersectionSet = new Set()
    this.values()
      .filter(value => otherSet.has(value))
      .forEach(value => intersectionSet.add(value))
    return intersectionSet
  }

  // exists in this set but not in otherSet
  difference(otherSet) {
    const intersectionSet = new Set()
    this.values()
      .filter(value => !otherSet.has(value))
      .forEach(value => intersectionSet.add(value))
    return intersectionSet
  }

  subset(otherSet) {
    if (this.size() > otherSet.size()) return false
    return this.values()
      .every(value => otherSet.has(value))
  }
}

export default Set
