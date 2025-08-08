const { ex1, ex2, ex3, ex4, ex5, computeAverageScore, checkStatus } = require('../src/javascript101')

const persons = [ 
            {name: "The Chosen One", age: 24},
            {name: "The Blur Blur One", age: 55},
            {name: "The Mad One", age: 58},
            {name: "The Chosen One", age: 54},
            {name: "The Jialat One", age: 48},
            {name: "The Chosen One", age: 44},
        ]

const palindrome = "Was it a car or a cat I saw"

const students = [
            { name: "Alice", score: 85 },
            { name: "Bob", score: 67 },
            { name: "Charlie", score: 43 }
        ]


test('ex1', () => {
    expect(ex1()).toBe("Junwhat")
})

test('ex2', () => {

            // console.log(5 + "34"); //534
            // console.log("Bob" - "bill"); //NaN
            // console.log(5 - "4");  //1          
            // console.log(5 % 10); //5
            // console.log(true + true); //2
            // console.log(false - true); //-1
            // console.log(5 >= 1); //true
            // console.log("A" > "B"); //false
            // console.log("a" > "A"); //true
            // console.log(true != true); //false

    expect(ex2()).toBe("534NaN152-1truefalsetruefalse")
})

test('ex3', () => {
    expect(ex3(4, 7)).toBe(11)
})

test('ex3', () => {
    expect(ex3("abc", "")).toBe("NaN")
})

test('ex4', () => {
    expect(ex4(persons)).toBe(24)
})

test('ex5', () => {
    expect(ex5(palindrome)).toBe(true)
})


// this test checks if computeAverageScore() correctly compute the average scores of a given students list
test('computeAverageScore', () => {
    expect(computeAverageScore(students)).toBe(65)
})

// this test checks if checkStatus() correctly return the Pass/Fail status of a given student
test('checkStatus', () => {
    expect(checkStatus(students[2])).toBe('Fail')
})