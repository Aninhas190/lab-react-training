import React from 'react';

import './generalText.css';

const Random = (props) => {
  const { min, max } = props;

  return (
    <div class="generalTextBox">
      <p>
        Random Value Between {min} and {max} => {Math.round(min + (Math.random()*(max-min)))}
      </p>
    </div>
  );
};

export default Random;
