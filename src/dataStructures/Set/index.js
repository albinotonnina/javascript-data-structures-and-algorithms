class Set {
  constructor() {
    this.values = [];
    this.numberOfValues = 0;
  }

  add(value) {
    if (!this.contains(value)) {
      this.values.push(value);
      this.numberOfValues++;
    }
  }

  remove(value) {
    if (this.contains(value)) {
      this.values.splice(this.values.indexOf(value), 1);
      this.numberOfValues--;
    }
  }

  contains(value) {
    // f**k explorer.
    return this.values.includes(value);
  }

  union(set) {
    const newSet = new Set();

    set.values.concat(this.values).forEach((value) => newSet.add(value));

    return newSet;
  }

  intersect(set) {
    const newSet = new Set();

    this.values
      .filter((value) => set.contains(value))
      .forEach((value) => newSet.add(value));

    return newSet;
  }

  difference(set) {
    const newSet = new Set();

    this.values
      .filter((value) => !set.contains(value))
      .forEach((value) => newSet.add(value));

    return newSet;
  }

  isSubset(set) {
    return set.values.every((value) => this.contains(value));
  }

  length() {
    return this.numberOfValues;
  }

  print() {
    return this.values.join(' ');
  }
}

module.exports = Set;
