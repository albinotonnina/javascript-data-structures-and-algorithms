class meanMedianMode {
  constructor(arr) {
    this.arr = arr
  }

  getMean(arr) {
    return arr.reduce((acc, num) => acc + num) / arr.length
  }

  getMedian(arr) {
    arr.sort((a, b) => a - b)

    let median

    const isOddLength = arr.length % 2 !== 0

    if (isOddLength) {
      median = arr[Math.floor(arr.length / 2)]
    } else {
      const mid1 = arr[arr.length / 2 - 1]
      const mid2 = arr[arr.length / 2]
      median = (mid1 + mid2) / 2
    }

    return median
  }

  getMode(arr) {
    const modeObj = arr.reduce((obj, num) => {
      if (!obj[num]) obj[num] = 0
      obj[num]++

      return obj
    }, {})

    // create array of mode/s
    let maxFrequency = 0
    let modes = []

    for (let num in modeObj) {
      if (modeObj[num] > maxFrequency) {
        modes = [num]
        maxFrequency = modeObj[num]
      } else if (modeObj[num] === maxFrequency) modes.push(num)
    }
    // if every value appears same amount of times
    if (modes.length === Object.keys(modeObj).length) modes = []
    return modes
  }

  getMeanMedianMode() {
    return {
      mean: this.getMean(this.arr),
      median: this.getMedian(this.arr),
      mode: this.getMode(this.arr)
    }
  }
}

export default meanMedianMode
