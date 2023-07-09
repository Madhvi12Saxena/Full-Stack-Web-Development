// Sample list of books
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "Who are you?", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
  ];
  
  // Callback function to log titles in alphabetical order
  function logTitles(titles) {
    const sortedTitles = titles.sort();
    console.log("Sorted Titles:");
    sortedTitles.forEach(title => {
      console.log(title);
    });
  }
  
  // Function to extract titles from books
  function getBookTitles(books, callback) {
    const titles = books.map(book => book.title);
    callback(titles);
  }
  
  // Call the getBookTitles function and pass the callback function
  getBookTitles(books, logTitles);
  