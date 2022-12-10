import React from "react";
import { connect } from "react-redux";
import { increase, decrease, reset } from "../redux/counter/counterAction";
const Counter = ({ counter, decrease, increase , reset }) => {
  return (
    <div className="flex flex-col">
      <h1>Counter - {counter} </h1>
      <button onClick={increase} className="bg-blue-300 mt-5">
        Increase
      </button>
      <button onClick={reset} className="bg-blue-300 mt-5">Reset</button>
      <button onClick={decrease} className="bg-blue-300 mt-5">
        Decrease
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
    reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
