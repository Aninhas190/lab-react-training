import React from 'react';
import './creditCard.css';

const CreditCard = props => {
  const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

  let newNumber = number.replace(/\d(?=\d{4})/g, "•")



  return (
    <div className="creditCard" style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
      <p>{type}</p>
      <p>{newNumber}</p>
      <p>expires: {expirationMonth}/{expirationYear.toString().slice(2,4)}       {bank}</p>
      <p>{owner}</p>
    </div>
  )
};


export default CreditCard;