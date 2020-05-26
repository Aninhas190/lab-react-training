import React, { Component } from 'react';

class Dice extends Component {
  constructor() {
    super();
    this.state = {
      img: ['/img/dice-empty.png']
    };
  }

  randomDice = () => {
    const arrayDice = [
      '/img/dice1.png',
      '/img/dice2.png',
      '/img/dice3.png',
      '/img/dice4.png',
      '/img/dice5.png',
      '/img/dice5.png',
    ];
    let newDice = Math.floor(Math.random() * (arrayDice.length + 1))
    console.log(this.state.img)
    this.setState = {
      img: this.state.img.splice(0, 1, arrayDice[newDice])
    }
  };

  render() {
    return (
      <div>
        <img src={this.state.img} alt="dice" onClick={this.randomDice} />
      </div>
    );
  }
}

export default Dice;
