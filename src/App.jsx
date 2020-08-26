import React, { useState, useEffect } from "react";
import Shades from "./Components/Shades";
import ShadesInput from "./Components/ShadesInput";
import randomColor from "randomcolor";

const App = () => {
  const [color, setColor] = useState("Black");

  useEffect(() => {
    setColor(randomColor);
  }, []);
  /* for changing the color */
  const onInputChange = (value) => {
    setColor(value);
  };

  return (
    <>
      <div className="App">
        <ShadesInput color={color} onInputChange={onInputChange} />
        <Shades color={color} />
      </div>
    </>
  );
};

export default App;
