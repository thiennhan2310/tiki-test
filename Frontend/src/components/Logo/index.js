import React from 'react';
import logo from './logo.png';
const Logo = ({ width = '200px' }) => {
  return (
    <div className="row" >
      <img src={logo} className="App-logo" alt="logo" style={{ margin: "auto" }} width={width} />
    </div>
  )
}
export default Logo;