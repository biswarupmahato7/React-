import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const [text, setText] = useState("Click To Change");

  return (
    <div
      className="w-full h-screen duration-200 text-black"
      style={{ backgroundColor: color,  }}
    >
      <div
        className="fixed flex flex-wrap justify-center
    bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center gap-3
         shadow-lg bg-white px-3 py-2 rounded-xl"
        >
          
          <button
            onClick={()=> {setColor("red"); setText("Red"); }}
            className="outline-none px-4 rounded-sm text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={()=>{setColor("green")}}
            className="outline-none px-4 rounded-sm text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={()=>{setColor("blue"), setText("Red")}}
            className="outline-none px-4 rounded-sm text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
          onClick={()=>setColor("yellow")}
            className="outline-none px-4 rounded-sm text-white"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
          onClick={()=>{setColor("orange")}}
            className="outline-none px-4 rounded-sm text-white"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={()=>setColor("pink")}
            className="outline-none px-4 rounded-sm text-white"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
