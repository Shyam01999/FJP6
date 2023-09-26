import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar_container'>
        <Link to="/" style={{textDecoration:'none'}}>
          <h1 className='list-item'>Movies App</h1>
        </Link>
        <Link to="/favourites" style={{textDecoration:'none'}}>
          <h3 className='list-item fav'>Favourite</h3>
        </Link>
        
      </div>
    )
  }
}
