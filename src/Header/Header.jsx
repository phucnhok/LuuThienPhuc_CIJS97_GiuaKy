import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='Header'>

    <div className='HeaderLeft'>
      <h2 style={{ color: "white" }}>Anonime</h2>
      <p style={{ color: "white" }}>Home</p>
      <p style={{ color: "white" }}>List anime</p>
    </div>

    <div className='HeaderRight'>
      <input className="inputName" type="text" placeholder='  Search anime or movie' style={{fontSize:"18px"}}/>
    </div>
  </div>
  )
}

export default Header