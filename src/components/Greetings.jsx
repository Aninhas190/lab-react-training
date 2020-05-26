import React from 'react';

import './generalText.css'

const Greetings = props => {
  const { lang, children } = props;

  let welcomeMessage;
  
  switch(lang) {
    case 'de':
      welcomeMessage = 'Hallo';
      break;
    case 'en':
      welcomeMessage = 'Hello';
      break;
    case 'es':
      welcomeMessage = 'Hola';
      break;
    case 'fr': 
      welcomeMessage = 'Bonjour';
      break;
    default:  
      welcomeMessage = 'Hello'; 
  }

  return (
    <div className="generalTextBox">
      <p>{welcomeMessage} {children}</p>
    </div>
  )

}

export default Greetings;