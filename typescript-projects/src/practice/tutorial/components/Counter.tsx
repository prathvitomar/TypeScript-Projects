import React from "react";
import useCounter from "../context/Counter.tsx"

export const Counter: React.FC = () => {
    const context = useCounter();
  return (
    <>
      <div>
        <button onClick={()=> context?.setCount(context.value + 1)}>Increase Counter</button>
        <h1>{context?.value}</h1>
      </div>
    </>
  );
};
