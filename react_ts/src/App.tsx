import React, { useState } from "react";
import "./App.css";
import InputFiles from "./components/InputFiles";
import { ITask } from "./components/Interfaces";
const App: React.FC = () => {
  const [todo , setTodo] = useState<string>("")
  const [todos , setTodos] = useState<ITask[]>([])
  return (
    <div className="bg-slate-400 flex flex-col items-center text-xl h-screen font-mono">
      <InputFiles todo={todo} setTodo={setTodo} />
      
    </div>
  );
};

export default App;
