import React from "react";
import "./App.css";
//components
import Main from "./components/Main";
const App = () => {
  return (
    <div className="dark:bg-slate-800 h-screen bg-slate-200 container mx-auto flex justify-center items-center">
      <Main/>
    </div>
  );
};

export default App;
