/*
There are three sizes of poodles: standard, miniature, and toy, 
Write a program that asks the user what size their poodle is. 
The user must use the words: standard, miniature, or toy. 
However, they can use whatever case they want 
(eg. TOY, Toy, toy, etc). Let the user say how many times 
they want to run the program.
Use a while loop.
Have you program give them a 
message using the format below. 

      Toy dogs are so tiny. 
or   
      Miniature dogs are very small but very hardy 
or
     Standard dogs are really very large.
*/

let size = ''
let sizeCap = ''
let j = 0
let runTimes = Number(prompt("How many times do you want to run the program?"))
while (j < runTimes) {
  size = prompt("Pick a poodle size: standard, miniature, or toy")
  sizeCap = size.toLowerCase()

  switch (sizeCap) {
    case "toy":
      alert("Toy dogs are so tiny.")
      break
    case "miniature":
      alert("Miniature dogs are very small but very hardy")
      break
    case "standard":
      alert("Standard dogs are really very large.")
      break
  }
  j++
}
