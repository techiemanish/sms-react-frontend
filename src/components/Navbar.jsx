import React from 'react'

function Navbar(props) {
  return (
    <>
    <nav className="navbar fixed-top navbar-light bg-success">
    <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">{props.heading}</a>
    </div>
    </nav>
    </>
  )
}

export default Navbar