import React, { Children } from 'react';

import './greetings.css'

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
    <div class="greetings">
      <p>{welcomeMessage} {children}</p>
    </div>
  )

}

export default Greetings;