function toggleHeading() {
    const heading = document.getElementById("heading");
    if (heading.textContent === "The Most Affordable Learning Platform") {
      heading.textContent = "PW SKILLS";
    } 
    else {
      heading.textContent = "The Most Affordable Learning Platform";
    }
  };