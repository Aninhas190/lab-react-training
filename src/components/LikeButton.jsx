import React, { Component } from  'react';

class LikeButton extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      bg: ['purple','blue','green','yellow','orange','red']
    }
  }

  like = () => {
    for (let i = 0; i< this.state.bg.length; i++) {
      this.setState({
        count: this.state.count + 1,
        bg: this.state.bg[i]
      })
    }

   
  }



  render() {
    return (
      <>
        <button onClick={this.like} style={{backgroundColor: `${this.state.bg}`}}>{this.state.count} {(this.state.count === 1 && 'like') || 'likes'}</button>
      </>
    )
  }
}


export default LikeButton;