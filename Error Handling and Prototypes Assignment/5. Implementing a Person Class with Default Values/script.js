class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Instantiate an instance of the Person class
  const person1 = new Person("Nobita", 15);
  console.log(person1.getDetails()); 
  
  const person2 = new Person();
  console.log(person2.getDetails()); // Output: Name: Unknown, Age: 0
  