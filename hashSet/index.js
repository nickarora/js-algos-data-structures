class HashSet {
  constructor() {
    this.storage = []
    this.count = 0
    this.limit = 8
    this.minPercentage = 0.25
    this.maxPercentage = 0.75
  }

  put(key, value) {
    const index = this.hash(key)
    this.storage[index] = this.storage[index] || []

    let override = false

    this.storage[index] = this.storage[index].map((tuple) => {
      if (tuple[0] === key) {
        override = true
        return [key, value]
      }

      return tuple
    })

    if (override) return this

    this.storage[index].push([key, value])
    this.incrementCount()
    return this
  }

  remove(key) {
    const index = this.hash(key)

    if (!this.storage[index]) return this

    const filteredBucket = this.storage[index].filter(tuple => tuple[0] !== key)
    if (filteredBucket.length === this.storage[index].length) return this

    this.storage[index] = filteredBucket
    this.decrementCount()
    return this
  }

  get(key) {
    const index = this.hash(key)
    const bucket = this.storage[index]

    if (!bucket) return this

    const foundTuple = bucket.filter(tuple => tuple[0] === key)[0]
    return foundTuple ? foundTuple[1] : null
  }

  getAll() {
    return this.storage
  }

  decrementCount() {
    this.count -= 1
    if (this.count < this.limit * this.minPercentage) {
      this.resize(this.limit / 2)
    }
  }

  incrementCount() {
    this.count += 1
    if (this.count > this.limit * this.maxPercentage) {
      this.resize(this.limit * 2)
    }
  }

  /* eslint-disable no-bitwise */
  hash(str) {
    let hash = 0

    str.split('').forEach((letter) => {
      hash = (hash << 5) + letter.charCodeAt(0)
      hash = (hash & hash) % this.limit
    })

    return hash
  }
  /* eslint-enable no-bitwise */

  resize(newLimit) {
    const oldStorage = this.storage
    this.limit = newLimit
    this.count = 0

    oldStorage.forEach((bucket) => {
      if (!bucket) return
      bucket.forEach((tuple) => {
        this.put(tuple[0], tuple[1])
        this.count += 1
      })
    })
  }
}

export default HashSet
