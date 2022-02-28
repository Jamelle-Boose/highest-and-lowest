const highAndLow = numbers => {
  const arr = numbers.split(" ")
  const sorted = arr.sort((a, b) => a - b)

  return `${sorted[sorted.length - 1]} ${sorted[0]}`
}

module.exports = highAndLow
