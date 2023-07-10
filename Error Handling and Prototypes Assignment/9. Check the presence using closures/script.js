function numberChecker(numbers) {
    return function(number) {
      return numbers.includes(number);
    };
  }
  
  // Example usage
  const checkNumber = numberChecker([1, 2, 3, 4, 5]);
  
  console.log(checkNumber(3)); // Output: true
  console.log(checkNumber(6)); // Output: false
  