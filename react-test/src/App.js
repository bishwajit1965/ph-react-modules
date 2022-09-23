import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Car />
    </div>
  );
}

const Car = () => {
  const [car, setCar] = useState({
    name: "Toyota",
    color: "black",
    age: 12,
  });

  const updateCar = () => {
    setCar((previousState) => {
      return { ...previousState, color: "green", name: "Safari", age: 10 };
    });
  };

  return (
    <div>
      <h2>
        Hello {car.name} with {car.color} how are you? The car is {car.age}{" "}
        years old.
      </h2>
      <button type="button" onClick={updateCar}>
        Update
      </button>
    </div>
  );
};

export default App;
