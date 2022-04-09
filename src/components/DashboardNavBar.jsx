import React from 'react'
import {Link} from "react-router-dom";

function DashboardNavBar(props) {
    return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-success " style={{marginTop: '-105px',position:"fixed",width:"100%"}}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/students">Student Management System</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/staffs">Staff Management System</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
    )
}

export default DashboardNavBar