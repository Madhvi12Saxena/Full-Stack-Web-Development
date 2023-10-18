function ageInDays(person, logResult) { 
    
     let fullName = `${person.firstName} ${person.lastName}`; 
  
     
     let ageInDays = person.age * 365; 
  
      
     return function () { 
         logResult(fullName, ageInDays); 
     }; 
 } 
  
  
 function logResult(fullName, ageInDays) { 
     console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`); 
 } 
  
 let person = { 
     firstName: "Harshit", 
     lastName: "Saxena", 
     age: 22 
 }; 
  
 let logAgeInDaysCallback = ageInDays(person, logResult); 
 logAgeInDaysCallback();