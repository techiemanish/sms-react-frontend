import React from 'react'

function Footer(props) {
  return (
    
    <footer className="container-fluid fixed-bottom bg-success text-light p-2" style={{marginTop: '200px'}}>
      <h5><center>{props.heading}</center></h5>
    </footer>
    
  )
}

export default Footer