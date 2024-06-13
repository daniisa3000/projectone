import React, {Fragment, useState} from "react";

const Counter = () =>{

  const [number, setNumber] = useState(0)

  const Increase = () =>{
    setNumber(number + 1)
  }

  const Reduce = () =>{
    setNumber(number - 1)
  }
  return (
    <Fragment>
      <h2>Counter quantity: {number}</h2>
      <button onClick={Increase}>Increase</button>
      <button onClick={Reduce}>Reduce</button>
    </Fragment>
  );
}

export default Counter;