import React from 'react'
import {Link} from "react-router-dom";

function Staff(props) {
  return (
    <>
    <Link className='nav-link text-success' to="/"><h2>{props.description}</h2></Link>
    </>
  )
}

export default Staff