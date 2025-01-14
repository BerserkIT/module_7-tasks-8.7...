//Задание 8.7.1

function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
    name: 'John',
    age: 30
};

printInfo.call(person);

//Задание 8.7.2

function calculate(a, b, operator) {
    if (operator === "+") {
        return a + b;
    }
    if (operator === "-") {
        return a - b;
    }
    if (operator === "*") {
        return a * b;
    }
    if (operator === "/") {
        return a / b;
    } else {
        console.log("Некорректный оператор! Оператор может иметь значение: +, -, *, /");
        return null;
    }
}

const params = {};
const result = calculate.apply(params, [2, 3, "+"]);
console.log(result);

//Задание 8.7.3

const users = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 16 },
    { name: 'David', age: 22 },
    { name: 'Eve', age: 18 }
];

const adults = users.filter(user => user.age >= 18);
const names = adults.map(user => user.name);

console.log(adults); // Массив пользователей 18+
console.log(names);  // Имена пользователей 18+

//Задание 8.7.4

function setFullName(fullName) {
    this.fullName = fullName;
}

const persona = {
    name: 'John',
    age: 30
};

const setPersonFullName = setFullName.bind(persona);
setPersonFullName("John Smith");
console.log(persona.fullName);

//Задание 8.7.5

function getUniqueSortedArray(numbers) {
    const uniqueNumbers = [...new Set(numbers)];
    return uniqueNumbers.sort((a, b) => a - b);
}

const inputArray = [5, 3, 8, 3, 1, 5, 9, 1, 7];
const results = getUniqueSortedArray(inputArray);

console.log(results);
