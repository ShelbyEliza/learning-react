import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Hello World:
// ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));

// Introducing JSX:
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

// const element = <a href="https://www.reactjs.org"> link </a>;

ReactDOM.render(getGreeting(user), document.getElementById("root"));
