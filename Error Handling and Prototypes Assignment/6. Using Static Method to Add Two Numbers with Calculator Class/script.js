class Calculator {
    static add(num1, num2) {
      return num1 + num2;
    }
  }
  
  // Call the add method without instantiating the Calculator class
  console.log(Calculator.add(5, 3)); // Output: 8
  