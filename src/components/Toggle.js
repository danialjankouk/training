import React from "react";
import useDarkmode from "./useDarkmode";
//icons
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";
const Toggle = () => {
  const [setTheme, colorTheme] = useDarkmode();
  return (
    <div className="dark:bg-slate-700 bg-slate-400 p-3 rounded-lg flex flex-col w-32 justify-center items-center">
      <div>
        {colorTheme === "dark" ? (
          <div
            onClick={() => setTheme(colorTheme)}
            className="capitalize cursor-pointer gap-x-1 flex flex-row-reverse w-32 justify-evenly hover:bg-slate-400 p-1 rounded-md text-white hover:text-slate-700"
          >
            darkmode
            <HiOutlineMoon className="mt-1" />
          </div>
        ) : (
          <div
            onClick={() => setTheme(colorTheme)}
            className="capitalize cursor-pointer w-32 justify-evenly gap-x-1 flex flex-row-reverse p-1 rounded-md text-white hover:text-slate-400"
          >
            lightmode
            <FiSun className="mt-1" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Toggle;
