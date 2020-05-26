import React, { Component } from 'react';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      bg: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    };
  }

  like = () => {
    const bgColor = [...this.state.bg];
    //bgColor[1]
    //console.log(bgColor)
    this.setState({
      count: this.state.count + 1,
      bg: bgColor[0]
    });
  };

  render() {
    return (
      <>
        <button
          onClick={this.like}
          style={{ backgroundColor: `${this.state.bg}` }}
        >
          {this.state.count} {(this.state.count === 1 && 'like') || 'likes'}
        </button>
      </>
    );
  }
}

export default LikeButton;
