import React from 'react'

function Footer(props) {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-success text-light">
    <div className="container-fluid">
      <center><h5>{props.heading}</h5></center>
    </div>
    </nav>
  )
}

export default Footer