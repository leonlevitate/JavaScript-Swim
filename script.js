// let num1;
// let num2
// let operator;

function calculator(num1, num2, operator){
  if (operator === "*") {
    multiply = num1 * num2
    console.log(multiply)
  } else if (operator === "/") {
    division = num1 / num2
    console.log(division);
  } else if (operator === "-") {
    subtract = num1 - num2
    console.log(subtract);
  } else if (operator === "+") {
    addition = num1 + num2
    console.log(addition);
  } else {
    console.log("Error Oop");
  }
};

calculator(8, 2, "*");
