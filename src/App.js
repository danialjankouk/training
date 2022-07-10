import React, { useState, useTransition } from "react";
import "./App.css";
//component
import { numbersCreator } from "./components/numbers";
import NumberList from "./components/NumberList";
const App = () => {
  const [value, setValue] = useState("");
  const [numbers, setNumbers] = useState(numbersCreator());

  const changeHandler = (event) => {
    setValue(event.target.value); 
      setNumbers(numbersCreator(event.target.value));
  };

  return (
    <div className="App mt-5">
      <input value={value} type="text" onChange={changeHandler} />
      <NumberList numbers={numbers}/>
    </div>
  );
};

export default App;
