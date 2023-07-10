function getPerson(person) {
    try {
      if (typeof person !== "object" || person === null || !("name" in person) || !("age" in person)) {
        throw new Error("Invalid parameter type");
      }
      const { name, age } = person;
      return `Name: ${name}, Age: ${age}`;
    } catch (error) {
      return error.message;
    }
  }
  const person1 = { name: "Mithun", age: 20 };
  console.log(getPerson(person1)); // Output: Name: John Doe, Age: 25
  
  const person2 = { name: "Jane Smith" };
  console.log(getPerson(person2)); // Output: Invalid parameter type
  
  const person3 = "John";
  console.log(getPerson(person3)); // Output: Invalid parameter type
    