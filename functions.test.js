const favoriteMovies = ["Matrix", "Tron", "Kung Fu Hustle", "Count Of Monte Cristo"]
const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions')

test('Should return 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('Should return Hello James.', () => {
    expect(greeting('James')).toEqual('Hello James')
    expect(greeting('Jill')).toEqual('Hello Jill')
})


describe("Math functions", () => {

    test('Should return the sum of num1 + num2', () => {
        expect(add(1, 2)).toBeGreaterThanOrEqual(3)
        expect(add(5, 9)).toEqual(14)
    })
    
    test('Should return the product of num1(num2)', () => {
        expect(multiply(2, 1)).toEqual(2)
        expect(multiply(5, 9)).toEqual(45)
    })
    
    test('Should return the quotient of num1/num2', () => {
        expect(divide(2, 1)).toEqual(2)
        expect(divide(9, 3)).toEqual(3)
    })
    
    test('Should return the difference of num1 - num2', () => {
        expect(subtract(2, 1)).toEqual(1)
        expect(subtract(9, 3)).toEqual(6)
    })

})