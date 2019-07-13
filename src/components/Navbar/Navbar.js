import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <ul>
          <li className='itemLeft'>Click Game</li>
          <li className='itemLeft'>Click an Image to begin</li>
          <li className='itemRight'>Score: {this.props.score}</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
