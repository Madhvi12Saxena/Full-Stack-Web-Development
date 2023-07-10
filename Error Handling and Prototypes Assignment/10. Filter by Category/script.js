function filterProductsByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
  // Example usage
  const products = [
    { name: "Product 1", category: "Category 1" },
    { name: "Product 2", category: "Category 2" },
    { name: "Product 3", category: "Category 1" },
    { name: "Product 4", category: "Category 3" },
  ];
  
  const filterByCategory = filterProductsByCategory(products);
  
  const filteredProducts = filterByCategory("Category 1");
  console.log(filteredProducts);
  // Output: [{ name: "Product 1", category: "Category 1" }, { name: "Product 3", category: "Category 1" }]
  
  