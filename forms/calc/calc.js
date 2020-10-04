function Calculate (num1, num2) {
  return num1 + num2
}



let p1 = prompt("Choose your first number")
let p2 = prompt("Choose your second number")

let summedNumbers = Calculate(Number(p1),Number(p2))

console.log(summedNumbers)