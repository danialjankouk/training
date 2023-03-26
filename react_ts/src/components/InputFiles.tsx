import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputFiles:React.FC<Props> = ({ todo, setTodo }: Props) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo([e.currentTarget.name] = e.currentTarget.value)
  };  
  console.log(todo);
  
  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          value={todo}
          className="text-blue-400"
          placeholder="note here"
          onChange={inputHandler}
        />
        <button className="bg-slate-500" type="submit">
          Go
        </button>
      </div>
    </div>
  );
};

export default InputFiles;
