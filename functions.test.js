const favoriteMovies = ["Matrix", "Tron", "Kung Fu Hustle", "Count Of Monte Cristo"]
const {returnTwo, greeting, add, multiply, divide, subtract, menuOpened, modalActive} = require('./functions')

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

describe("DOM events", () => {
  test("this should show the falsy for when the menu is opened", () => {
    expect(menuOpened).toBeFalsy();
  });

  test("this should expect the modal active to not be falsy because the modal is active", () => {
    expect(modalActive).not.toBeFalsy();
    expect(modalActive).toBeTruthy();
  });
});



test("the movies list has matrix in it", () => {
  expect(favoriteMovies).toContain("Matrix");
  expect(new Set(favoriteMovies)).toContain("Matrix");
});