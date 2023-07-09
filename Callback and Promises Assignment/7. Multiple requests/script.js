async function fetchData() {
    try {
      const todoResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const todoData = await todoResponse.json();
  
      const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const postData = await postResponse.json();
  
      const combinedData = {
        todo: todoData,
        post: postData
      };
  
      console.log(combinedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the fetchData function
  fetchData();
  