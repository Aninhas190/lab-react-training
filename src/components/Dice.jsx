import React, { Component } from 'react';

import './dice.css';

class Dice extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      img: ['/img/dice6.png']
    };
  }

  randomDice = () => {
    const emptyDice = '/img/dice-empty.png';
    const arrayDice = [
      '/img/dice1.png',
      '/img/dice2.png',
      '/img/dice3.png',
      '/img/dice4.png',
      '/img/dice5.png',
      '/img/dice6.png',
    ];
    this.setState({
      img: emptyDice
    })

    setTimeout(() => {
      arrayDice.sort(() => 0.5 - Math.random());
      this.setState({
        img: arrayDice[0]
      });
    }, 1000)
    
  };

  render() {
    return (
      <div className="dice">
        <img src={this.state.img} alt="dice" onClick={this.randomDice} />
      </div>
    );
  }
}

export default Dice;
