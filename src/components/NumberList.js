import React ,{useDeferredValue} from "react";

function NumberList({ numbers }) {
  //useDeferredValue
  const DeferredValue = useDeferredValue(numbers);
  return (
    <div>
      {DeferredValue.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default NumberList;
