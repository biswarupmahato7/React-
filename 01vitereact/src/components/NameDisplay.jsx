import React, { useState } from "react";

function NameDisplay() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayName(name);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={handleInputChange} 
      />
      <button onClick={handleButtonClick}>Show Name</button>
      <h1>{displayName}</h1>
    </div>
  );
}

export default NameDisplay;
