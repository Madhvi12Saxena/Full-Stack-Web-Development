function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
      const greeting = `Hello, ${name}!`;
      resolve(greeting);
    });
  }
  
  // Example usage
  const name = "Mithun";
  greetWithPromise(name)
    .then(greeting => {
      console.log(greeting);
    })
    .catch(error => {
      console.error(error);
    });
  