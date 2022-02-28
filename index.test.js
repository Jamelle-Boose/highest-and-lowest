const highAndLow = require("./index")

describe("High and Low", () => {
  it("should return the highest and lowest number", () => {
    expect(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")).toBe("542 -214")
  })

  it("should return the highest and lowest number", () => {
    expect(highAndLow("1 -1")).toBe("1 -1")
  })

  it("should return the highest and lowest number", () => {
    expect(highAndLow("1 1")).toBe("1 1")
  })

  it("should return the highest and lowest number", () => {
    expect(highAndLow("-1 -1")).toBe("-1 -1")
  })

  it("should return the highest and lowest number", () => {
    expect(highAndLow("1 -1 0")).toBe("1 -1")
  })

  it("should return the highest and lowest number", () => {
    expect(highAndLow("1 1 1")).toBe("1 1")
  })

  it("should return the highest and lowest number", () => {
    expect(highAndLow("-1 -1 -1")).toBe("-1 -1")
  })

  it("should return the highest and lowest number", () => {
    expect(highAndLow("42")).toBe("42 42")
  })

  it("should return the highest and lowest number", () => {
    expect(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6 0")).toBe(
      "542 -214"
    )
  })
})
