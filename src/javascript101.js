
function ex1() {
    /*
        TODO: return the value of newperson.firstName and the value of newcars[0] as a concatenated string
    */
    var cars = ["Saab", "Volvo", "BMW"];
    var newcars = cars;
    var person = {firstName: "Yournal", lastName: "Drunk", age: 50};
    var newperson = person;
    person.firstName = "Jun";
    cars[0] = "what";
    
    return "Junwhat" // e.g., "YournalSaab"

}

function ex2() {
    /*
        TODO: 
            - run the given Javascript expression in JavaScript console 
            - return all the results together as a concatenated string

            console.log(5 + "34"); 
            console.log("Bob" - "bill")
            console.log(5 - "4")      
            console.log(5 % 10)
            console.log(true + true)
            console.log(false - true)
            console.log(5 >= 1)
            console.log("A" > "B")
            console.log("a" > "A")
            console.log(true != true)

    */

    return "534NaN152-1truefalsetruefalse" // e.g., the result of the first two expressions is "534NaN"

}

function ex3(firstNumber, secondNumber) {
    /*
        TODO:
            - validate if both firstNumber and secondNumber are Numbers
            - if yes, return the sum of the two numbers
            - else return the string "NaN"

    */

    if(isNaN(firstNumber) || isNaN(secondNumber)) {
        return "NaN"
    } else {
           return Number(firstNumber) + Number(secondNumber)
    }
       
      
}

function ex4(persons) {
    /*
        TODO:
            - Given persons list, loop through the list
            - find the Youngest person called “The Chosen One”
            - return his age 
               

        // data structure of persons (example)
        var persons = [ 
            {name: "The Forgotten One", age: 50},
            {name: "The Special One", age: 55},
            {name: "The Happy One", age: 58},
            {name: "The Chosen One", age: 54},
            {name: "The Babyface One", age: 48},
            {name: "The Chosen One", age: 44},
        ]

        (in this example, the function return 44)
    */

    var len = persons.length
    var age 
    var found = false

    for (let i=0; i<len; i++) {
        let person = persons[i]
        if (person.name == "The Chosen One") {
            if (!found) {
                age = person.age
                found = true
            } else {
                if (person.age < age) {
                    age = person.age
                }
            }
        }
        
    }

    return age
   
}

function ex5(str) {
    /*
     TODO:
            - Given a string, check whether the string is a palindrome or not.
            - if yes, return the Boolean true
            - else, return false 

        **A palindrome is a string which reads the same backward as forward. For example, “Race Car” and “Anna” are palindromes. “Apple Pie” and “John” are not. Ignore spaces in deciding a palindrome.

    */
    // turn the string to lowercase
    str = str.toLowerCase();

    // remove spaces
    str = str.replace(/ /g, "");
    //str = str.replaceAll(" ", "");
    console.log(str);

    // reverse input string 
    // split the string into an array of characters first and reverse the array
    // then form the string again by joining the array elements
    var str2 = str.split('').reverse().join('');

    if(str == str2) {
        return true
    } else {
        return false
    }

}


/*
    Complete computeAverageScore function so that it
        - calculate average score of students
        - return average score

    Complete checkStatus function so that it
        - check the score of a given student
        - return "Pass" if the score is >= 50; otherwise "Fail"
*/
const students = [
            { name: "Alice", score: 85 },
            { name: "Bob", score: 67 },
            { name: "Charlie", score: 42 }
        ]

function computeAverageScore(students) {
    let result = 0
    // add your code here
    for (let student of students) {
        result += student.score
    }

    result = result / students.length

    return result
}

function checkStatus(student) {
    // add your code here
    if (student.score >= 50) {
        return "Pass"
    } else {
        return "Fail"
    }
}

module.exports = { ex1, ex2, ex3, ex4, ex5, computeAverageScore, checkStatus }

