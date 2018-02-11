class HashTable {
  constructor(size) {
    this.values = {}
    this.numberOfValues = 0
    this.size = size
  }

  add(key, value) {
    var hash = this.calculateHash(key)
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {}
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      this.numberOfValues++
    }
    this.values[hash][key] = value
  }

  remove(key) {
    var hash = this.calculateHash(key)
    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      delete this.values[hash][key]
      this.numberOfValues--
    }
  }

  calculateHash(key) {
    return key.toString().length % this.size
  }

  search(key) {
    var hash = this.calculateHash(key)
    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      return this.values[hash][key]
    } else {
      return null
    }
  }
  length() {
    return this.numberOfValues
  }
  print() {
    var string = ''
    for (var value in this.values) {
      for (var key in this.values[value]) {
        string += this.values[value][key] + ' '
      }
    }
    return string.trim()
  }
}

module.exports = HashTable
