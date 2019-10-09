/*
Write a program that gets two numbers from the user, uses a 
function to tell whether they are both even or not. Also use a 
boolean operator. Then in the main program, tell the user 
what was found: 
      The results of our test:  both numbers are even.
*/

function evenOrNot(num) {
  if (num % 2 == 0)
    return true
  else
    return false
}

let numThree1 = Number(prompt("enter a number"))
let numThree2 = Number(prompt("enter a number"))

let firstEven = evenOrNot(numThree1)
let secondEven = evenOrNot(numThree2)

if (firstEven == true && secondEven == true) {
  alert("The results of our test:  both numbers are even.")
} else {
  alert("one or both numbers are odd")
}
