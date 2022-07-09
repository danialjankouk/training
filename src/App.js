import React, { useState, useTransition } from "react";
import "./App.css";
//component
import { numbersCreator } from "./components/numbers";
const App = () => {
  const [value, setValue] = useState("");
  const [numbers, setNumbers] = useState(numbersCreator());
  //useTransition
  const [isPending, startTransition] = useTransition();

  const changeHandler = (event) => {
    setValue(event.target.value); 
    startTransition(() => {
      setNumbers(numbersCreator(event.target.value));
    });
  };

  return (
    <div className="App mt-5">
      <input value={value} type="text" onChange={changeHandler} />
      {isPending ? <h1>Loading ...</h1> : ""}
      {numbers.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default App;
