import "./App.css";
import Person from "./Components/Person";
import Button from "./Components/Button";
import Header from "./Components/Header";
import List from "./Components/List";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const items = ["Fruits", "Vegetables", "DriedFruits"];

  return (
    <>
      <Person name="Madhvi Saxena" age="18" />
      <Button text="Click me" onClick={handleClick} />
      <Header title="Welcome to my website!"/>
      <List items={items} />
    </>
  );
}

export default App;