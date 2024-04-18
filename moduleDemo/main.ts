import inquirer from 'inquirer';

// let answet = await inquirer.prompt({
//     name: "age",
//     type: "number",
//     message: "enter your age"
// });

// console.log(`Inshallah in, ${60 - answet.age} years you will become 60 years old`);

let input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "kindly enter your first no: "
});

let input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "kindly enter your second no: "
});

let total = input1.num1 + input2.num2

console.log(total);

