import { useEffect, useState } from "react";
import "./Box.css";

export default function Box() {
  const [myColor, setMyColor] = useState("green");
  const [counter, setCounter] = useState(1);
  const [classN, setClassN] = useState("circle");

  useEffect(() => {
    const color =
      "#" +
      Math.floor(Math.random() * 10 + 1) +
      "" +
      Math.floor(Math.random() * 10 + 1) +
      "" +
      Math.floor(Math.random() * 10 + 1);
    setTimeout(() => {
      if (counter <= 5) {
        setMyColor(color);
        setCounter(counter + 1);
        console.log(counter);
        counter % 5 === 0 ? setClassN("circle") : setClassN("");
      }
    }, 500);
  }, [counter]);

  const myStyle = {
    width: "20rem",
    height: "20rem",
    background: myColor,
    border: "1px solid green",
  };

  return <div className={classN} style={myStyle}></div>;
}
