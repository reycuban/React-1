import React from "react";
import ReactDOM from "react-dom";

const name = "Reinier";
const lastName = "Blanco";
const number = 12;
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>
      My name is {`${name} ${lastName}`} and my lucky number is {number} but
      this numbet is
      {Math.random() * 30 + 20}
    </p>
  </div>,
  document.getElementById("root")
);
