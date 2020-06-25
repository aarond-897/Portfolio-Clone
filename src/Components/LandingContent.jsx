import React from 'react';
import { Component } from 'react';


class LandingContent extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }


  render(){
    return(
      <div className="main-content">
        <div className="container-text">
        <h1>GRAYSCALE</h1>
        <p>A free, responsive, one page Bootstrap theme created by Start Bootstrap</p>
        <button>Get Started</button>
        </div>
      </div>
    )
  }
}

export default LandingContent;