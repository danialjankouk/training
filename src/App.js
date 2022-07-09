import React from "react";
import "./App.css";
//components
import Content from "./components/Content";
const App = () => {
  return (
    <div className="bg-slate-200 h-screen flex items-center flex-col pt-10">
      <Content />
    </div>
  );
};

export default App;
