import React, { Component } from 'react';

import './clickablePicture.css';

class ClickablePicture extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clicked: false,
    }
  }

  coolSunglasses = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const { img, imgClicked} = this.props;
    console.log(img)
    return (
      <div className="clickablePicture">
        {(!this.state.clicked && <img src={img} alt="not cool" onClick={this.coolSunglasses}/> ) || <img src={imgClicked} alt="cool" onClick={this.coolSunglasses}/> }
      </div>
    ) 
  }
};


export default ClickablePicture;