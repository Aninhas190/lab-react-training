import React from 'react';

const BoxColor = props => {
  const { r, g, b} = props;

 

  return (
    <div class="generalTextBox" style={{backgroundColor: `rgb(${r},${g},${b})`}}>
      <p>rgb({r},{g},{b})</p>
    </div>
  )  
}

export default BoxColor;