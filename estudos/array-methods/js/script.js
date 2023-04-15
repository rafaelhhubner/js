const data = [
    { name: "Matheus", age: 31, salary: 2000, driverLicense: true },
    { name: "João", age: 18, salary: 1500, driverLicense: false },
    { name: "Mariana", age: 22, salary: 4000, driverLicense: true },
    { name: "Pedro", age: 50, salary: 7200, driverLicense: true},
    { name: "Érica", age: 16, salary: 0, driverLicense: false},
];

// 1 - Reverse
const reverseData = data.reverse()

console.log(reverseData);

// 2 - find
const highSalary = 5000

const highestSalary = data.find((user) => user.salary > highSalary)

console.log(highestSalary);

// 3 - findIndex
const lowestSalary = data.findIndex((user) => user.salary > 0 && user.salary < 2000);

console.log(lowestSalary);

data[lowestSalary].salary += 200;

console.log(data);

// includes
const numbers = [1, 2, 3, 4, 5];

const hasFour = numbers.includes(4);

console.log(hasFour);

console.log(numbers.includes(100));

// 5 - map
data.map((user) => user.newsletter = false);

console.log(data);

// 6 - filter
const drivers = data.filter((user) => user.driverLicense);

console.log(drivers);

// 7 - reduce
const sallariesSum = data.reduce((totalSalary, user) => (totalSalary += user.salary), 
  0
);

console.log(sallariesSum);

// 8 - forEach
const showUserNames = (users) => {
    users.forEach((user) => {
        console.log(`Olá ${user.name}`);
    });
};

showUserNames(data);

// 9 - some
let someoneWithNewsletter = data.some((user) => user.newsletter);

console.log(someoneWithNewsletter);

data[0].newsletter = true;

someoneWithNewsletter = data.some((user) => user.newsletter);

console.log(someoneWithNewsletter);

// 10 - every
const everyUserHasName = data.every((user) => user.name);

console.log(everyUserHasName);

/*const everyUserHasGoodSalary = data.every((user) => user.salary > 2000)*/

const everyUserHasGoodSalary = data.every((user) => {
    return user.salary > 2000;
});

console.log(everyUserHasGoodSalary);

