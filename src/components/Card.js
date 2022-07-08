import React from "react";

const Card = () => {
  return (
    <div className="bg-slate-300 flex flex-col justify-center items-center w-[25rem] h-[30rem] rounded-md">
      <div className="flex flex-col justify-center items-center gap-y-5">
        <input
          type="text"
          className="rounded-md focus:ring-green-600 focus:ring-2"
        />
        <select className="w-[14rem] rounded-md focus:ring-green-600 focus:ring-2">
          <option>option1</option>
          <option>option2</option>
          <option>option3</option>
          <option>option4</option>
          <option>option5</option>
        </select>
        <input
          type="checkbox"
          className="rounded-md text-green-500 focus:ring-green-600 focus:ring-2"
        />
        <input
          type="date"
          className="rounded-md focus:ring-green-600 focus:ring-2"
        />
      </div>
    </div>
  );
};

export default Card;
