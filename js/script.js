let userSolary = prompt("Введіть розмір вашої заробітної плати")
userSolary = parseFloat(userSolary)

console.log(userSolary)

// Розрахунок нарахування Премії відносно ЗП

const userAward = (userSolary / 100) * 15
console.log(userAward + " " + "- ваша премія")

// ЗП + Премія

const userSolaryWithAward = (userSolary + userAward)
console.log(userSolaryWithAward + " " + "- ваша заробітна плата з урахуванням премії")

// ЗП + Премія поділені на Податок

const userTax = ((userSolary + userAward) / 100) * 10
console.log(userTax + " " + "- ваш податок з урахуванням зарплати та премії")

// ЗП - Податки

const netSolaryAmount = userSolaryWithAward - userTax
console.log(netSolaryAmount + " " + "- ваша заробітна плата з урахуванням податків")

// Витрати в магазині

let userCosts = 190

// Залишок від ЗП з урахуванням витрат в Магазині

const userSolaryBalance = netSolaryAmount - userCosts
// console.log(userSolaryBalance + " " + "- залишок зарплати з урахуванням витрат")

// Виведення  в Alert залишку

alert(userSolaryBalance + " " + "- залишок зарплати з урахуванням витрат")