import React from 'react';

const Validation = (prop) => {
  let min = 5;
  let isValid = null;

  if(prop.length >= min) {
    isValid = <p>Text long enough</p>;
  } else {
  isValid = <p>Text too short</p>;
  }

  return isValid;
}

export default Validation;