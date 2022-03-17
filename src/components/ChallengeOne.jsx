import React, { Component } from 'react';
//import images
import left from '../assets/look-left.jpeg';
import right from '../assets/look-right.jpeg';

class ChallengeOne extends Component {
  //declare the state here
    constructor() {
      super();
      this.state = { url:left };
  }

  //click left/right button handler goes here
    lookLeft =(event) =>{
      event.preventDefault()
      this.setState({ url:left })
    }

    lookRight = (event) => {
      event.preventDefault();
      this.setState({ url:right });
    };



  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.url}
            alt="face"
          />
        </div>
        <button className="btn" onClick={this.lookLeft}>⭠</button>
        <button className="btn" onClick={this.lookRight}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;