import React, { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default ToggleButton;

