import React from 'react'
import {Link} from "react-router-dom";

function Student(props) {
  return (
    <>
    <Link className='nav-link text-success' to="/students"><h2>{props.description}</h2></Link>
    </>
  )
}

export default Student