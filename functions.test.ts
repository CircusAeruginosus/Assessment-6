const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("return an array", () => {
        expect(shuffleArray).toBe([])
    })
    test("return array of same length as argument", () => {
        expect(shuffleArray).toHaveLength(5)
    })
})