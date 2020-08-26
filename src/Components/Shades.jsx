import React, { useState, useEffect, useRef } from "react";
import Values from "values.js";
import isColor from "is-color";
import Shade from "./Shade";

// destructing {color} instead of props.color
const Shades = ({ color }) => {
  const audioRef = useRef();
  const [shades, setShades] = useState([]);
  useEffect(() => {
    if (isColor(color)) createShades(color);
  }, [color]);

  const createShades = (color) => {
    const shades = new Values(color).shades(1);
    console.log(shades[0].rgbString());
    setShades(shades);
  };

  const onColorCopy = () => {
    audioRef.current.play();
  };
  return (
    <>
      <div className="shades">
        <audio ref={audioRef} src={require("../assets/click.mp3")} />
        {shades.map((shade) => (
          <Shade shade={shade} onColorCopy={onColorCopy} />
        ))}
      </div>
    </>
  );
};

export default Shades;
