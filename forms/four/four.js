/*
Write a program that uses an array(s)  to keep track of 
employees and the number of years they have been at the 
company.  
>Then let the user add a new employee and years 
of service, 
>and delete the last employee added.  
>Output the 
arrays, one name per line, 
  before the array has been changed, 
  after a new employee is added, and 
  after the last employee is deleted. 


Use array(s), array method(s), for loop(s), and if/else 
statement(s). 

Use this data: 

Mary Edwards, 22 years, Don Smith, 10 years, Tricia Evans, 5 years
*/

let employees = ['Mary Edwards', 'Don Smith','Tricia Evans']
let years = [22, 10, 5]
for(i = 0; i < employees.length; i++)
  console.log(`${employees[i]} with years ${years[i]}.`)

let newEmp = prompt("Enter the name of a new employee")
employees.push(newEmp)
years.push(0)

for(i = 0; i < employees.length; i++)
  console.log(`${employees[i]} with years ${years[i]}.`)

employees.pop()
years.pop()

for(i = 0; i < employees.length; i++)
  console.log(`${employees[i]} with years ${years[i]}.`)