const { computeAverageScore, checkStatus } = require('../src/javascript101')

const students = [
            { name: "Alice", score: 85 },
            { name: "Bob", score: 67 },
            { name: "Charlie", score: 43 }
        ]

// this test checks if computeAverageScore() correctly compute the average scores of a given students list
test('computeAverageScore', () => {
    expect(computeAverageScore(students)).toBe(65)
})

// this test checks if checkStatus() correctly return the Pass/Fail status of a given student
test('checkStatus', () => {
    expect(checkStatus(students[2])).toBe('Fail')
})