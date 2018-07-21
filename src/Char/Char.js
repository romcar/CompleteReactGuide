import React from 'react';

const Char = (props) => {
  const style = {
    "display" : "inline-block",
    "padding" : "16px",
    "textAlign" : "center",
    "margin" : "16px",
    "border": "1px solid black"
  }
  return(<span onClick={() => props.click(props.ind)} style={style}>{props.char}</span>);
}

export default Char;