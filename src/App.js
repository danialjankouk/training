import React from "react";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col justify-center items-center bg-slate-300 h-screen">
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
