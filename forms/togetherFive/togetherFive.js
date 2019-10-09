/*
DO TOGETHER using code from form 'four'.

Copy the code from the previous exercise (about employees) before 
the new employee was added, and add the functionality to answer the 
question: Who has worked at the company the longest? Output their 
name.
**change name of employees, employeeYears, newEmp, deleteEmp, foundIndex 
variables to employees2, employeeYears2, newEmp2, deleteEmp2, foundIndex2
*/

let employees2 = ['Mary Edwards', 'Don Smith','Tricia Evans']
let years2 = [22, 10, 5]
for(i = 0; i < employees2.length; i++)
  console.log(`${employees2[i]} with years ${years2[i]}.`)

//who has worked longest hours
let longestTime = years2[0]

let locationIndex = 0
//went through array...

for (i = 1; i < years2.length; i++)
  if (longestTime < years2[i]) {
    longestTime = years2[i]
    locationIndex = i
  }
  
alert(`${employees2[locationIndex]}`)
