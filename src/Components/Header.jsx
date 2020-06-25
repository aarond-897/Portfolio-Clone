import React, { Component } from 'react';

class Header extends Component{
  constructor(props){
    super(props);
    this.state=({
      toggleDropdown: false
    })
  }


  handleClick = ()=>{
    this.setState({
      toggleDropdown: !this.state.toggleDropdown
    })
  }

  render(){
    return(
      <div className='header'>
      <div className="main-header">
        <h1 className='web-title'>Start Bootstrap</h1>
        <nav className='desktop-nav'>
          <span>About</span>
          <span>Project</span>
          <span>Contact</span>
        </nav>
        <button className='dropdown-button' onClick={this.handleClick}>Menu
        <div className='hamburger-group'>
          <div className='hamburger-icon'></div>
          <div className='hamburger-icon'></div>
          <div className='hamburger-icon'></div>
        </div>
        </button>
      </div>
        {this.state.toggleDropdown ?   
        <nav className='dropdown'>
          <span>About</span>
          <span>Project</span>
          <span>Contact</span>
        </nav>
        :
        null
      }
      </div>
    )
  }
}

export default Header;