import React from 'react';
import ReactDOM from 'react-dom';


function HelloWorld() {
  return (
    //<div>Hello World!</div>
    <div>
      {// this is great, because it's a comment
      }
      <Hello/> <World/>!
      <div></div>
    </div>
    // React.createElement("div", {}, "Hello World!")}
    // same as jsx above
  );
}

function Hello() {
  return (
    <span>Hello</span>
  );
}

function World() {
  return (
    <span>World</span>
  );
}

// this is how I would usually do it
// document.getElementById("root").innerHTML = "The basic JavaScript way!";

ReactDOM.render(
  <HelloWorld/>,
  document.querySelector('#root'));
  //document.getElementById('root')); //also works as above
