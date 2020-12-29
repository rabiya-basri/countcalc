import React, { useState } from "react";
import "./styles.css";
var sum, mul, divi, mod;
export default function App() {
  var [takesum, setsum] = useState();
  function gettotal(event) {
    setsum(event.target.value);
    sum = Number(takenum) + Number(takenum2);
    mul = Number(takenum) * Number(takenum2);
    divi = Number(takenum) / Number(takenum2);
    mod = Number(takenum) % Number(takenum2);
    console.log("sum", sum);
    console.log("multiplication", mul);
    console.log("division", divi);
    console.log("Modules", mod);
  }
  var [takenum, setFirstnum] = useState("");
  var [takenum2, setsecnum] = useState("");
  function getFirstNumbers(event) {
    setFirstnum(event.target.value);
  }
  function getSecNumbers(event) {
    setsecnum(event.target.value);
  }
  return (
    <div className="App">
      <h1>CountCalc</h1>
      <input
        type="text"
        placeholder="Enter first number"
        onChange={getFirstNumbers}
      />
      <input
        type="text"
        placeholder="Enter second number"
        onChange={getSecNumbers}
      />
      <button onClick={gettotal} style={{ width: "5rem", height: "2rem" }}>
        submit
      </button>
      <div className="block">
        Sum : {sum}
        {takesum}
        <br />
        Multiplication : {mul}
        <br />
        Division : {divi}
        <br />
        Modules : {mod}
        <br />
      </div>
      <footer>
        connect Me
        <ul>
          <li>
            <a href="https://github.com/rabiya-basri">GITHUB</a>
          </li>
          <li>
            <a href="https://twitter.com/rabiyabasri2016">TWITTER</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rabiya-basri-55b368186/">
              LINKEDIN
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
