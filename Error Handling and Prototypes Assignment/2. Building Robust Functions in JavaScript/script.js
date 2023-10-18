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
  const person1 = { name: "MS", age: 18 };
  console.log(getPerson(person1));
  
  const person2 = { name: "SS" };
  console.log(getPerson(person2)); // Output: Invalid parameter type
  
  const person3 = "HS";
  console.log(getPerson(person3)); // Output: Invalid parameter type
    