import React from "react";
//assets
import appleWatch from "../assets/apple.png";
const Main = () => {
  return (
    <div className="dark:bg-slate-700 bg-slate-400 p-1 rounded-md w-[17rem] m-3 h-[17rem] flex justify-center items-center">
      <div className="text-white">
        <div className="items-center flex flex-col">
          <img src={appleWatch} alt="apple watch 7" className="w-[10rem]" />
        </div>
        <h1 className="capitalize">
          apple watch series 7 GPS, aluminium case
        </h1>
        <div className="flex justify-between items-center">
          <p className="font-bold text-white">$599</p>
          <button className="bg-blue-600 p-1 rounded-md hover:bg-blue-700 font-bold capitalize">
            add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
