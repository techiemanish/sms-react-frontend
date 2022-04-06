import React from 'react'

function Footer(props) {
  return (
    
    <div className="container-fluid fixed-bottom bg-success text-light p-2">
      <h5><center>{props.heading}</center></h5>
    </div>
    
  )
}

export default Footer