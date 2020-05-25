import React from 'react';
import './IdCard.css';

const IdCard = props => {
  const {lastName, firstName, gender, height, birth, picture} = props;

  return (
    <div className="idCard">
      <img src={picture} alt={firstName}/>
      <div class="cardInfo">
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height}</p>
        <p><strong>Birth Date:</strong> {birth.toString().slice(0,15)}</p>
      </div>
    </div>
  )
};

export default IdCard;