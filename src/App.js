import React from "react";
import "./App.css";
//components
import Main from "./components/Main";
import Toggle from "./components/Toggle";
const App = () => {
  return (
    <>
      <div className="dark:bg-slate-800 h-screen bg-slate-200 container mx-auto flex flex-col md:flex-row justify-center items-center">
        <Main />
        <Toggle />
      </div>
    </>
  );
};

export default App;
