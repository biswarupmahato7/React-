import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  // let counter = 9;

  const addValue = () => {
    if(counter < 20){

      setCounter(counter + 1);
    }
  };

  const decValue = () => {
    if(counter>1){
      
      setCounter(counter - 1);
    }

  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Increase</button>

      <button onClick={ decValue}>Decrease</button>
    </>
  );
}

export default App;
