class _Array {
  constructor() {
    this.array = [];
  }

  add(data) {
    this.array.push(data);
  }

  remove(data) {
    this.array = this.array.filter((current) => current !== data);
  }

  search(data) {
    const foundIndex = this.array.indexOf(data);
    return ~foundIndex ? foundIndex : null;
  }

  getAtIndex(index) {
    return this.array[index];
  }

  length() {
    return this.array.length;
  }

  print() {
    return this.array.join(' ');
  }
}

module.exports = _Array;
