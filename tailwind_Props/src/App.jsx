import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
 
  
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl mb-2">Test Tailwind</h1>
      <Card name = "Biswarup" btnText = "Click Me"/>
      <Card name = "Akaay"/>

    </>
  );
}

export default App;
