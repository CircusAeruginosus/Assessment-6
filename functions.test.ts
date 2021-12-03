const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("return an array", () => {
        expect(shuffleArray([1,2,3])).toContain(1)
        expect(shuffleArray([1,2,3])).toContain(2)
        expect(shuffleArray([1,2,3])).toContain(3)
    })
    test("check that returned array has same length as argument ", () => {
        expect(shuffleArray).toHaveLength(5)
    })
})