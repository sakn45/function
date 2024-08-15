// 8.7.1
function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
    name: "Anton",
    age: 20
};


printInfo.call(person);

// 8.7.2
function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return null;
    }
}

const operation = {
    a: 0,
    b: 0, 
    operator: "" 
};

const result = calculate.apply(operation, [2, 3, "+"]);

console.log(result); 


// 8.7.3

const users = [
    { name: "Andrew", age: 17 },
    { name: "Roman", age: 20 },
    { name: "Fedor", age: 18 },
    { name: "Anna", age: 15 },
    { name: "Eve", age: 22 }
];


const adultUsers = users.filter(user => user.age >= 18);


const names = adultUsers.map(user => user.name);

console.log(adultUsers); 
console.log(names);      

// 8.7.4

function setFullName(fullName) {
    this.fullName = fullName;
}

const person = {
    name: "Roman",
    age: 26
};

const setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");


console.log(person.fullName); 

// 8.7.5

function getArray(arr) {
    const uniqueSet = new Set(arr);

    const sortedArray = Array.from(uniqueSet).sort((a, b) => a - b);

    return sortedArray;
}


const numbers = [3, 8, 1, 5, 2, 3, 9, 1, 8, 7];
const sortedNumbers = getArray(numbers); 

console.log(sortedNumbers);
