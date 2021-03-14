const {ccatParse} = require('./ccat-parse.js')
const tests = require("./tests.json")

tests.forEach(t => {
    test('Correctly parses test input', () => {
        tests.forEach(test => {
            const output = ccatParse(test.input)
            expect(output).toStrictEqual(test.expect)
        })
      })
})

