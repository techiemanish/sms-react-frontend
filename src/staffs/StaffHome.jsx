import React from 'react'
import { Link } from 'react-router-dom'

function StaffHome(props) {
  return (
    <>
    <div className="container mt-5 p-5">
    <div className="row row-cols-1 row-cols-md-4 g-4 ">
    <Link to="/staffs/add" className='nav-link'>
      <div className="col">
        <div className="card">
          <div className="card-body p-5 bg-success text-light rounded-3">
            <center><h5 className="card-title">{props.arg1}</h5></center>
      </div>
    </div>
    </div>
  </Link>
  <Link to="/staffs/view" className='nav-link'>
    <div className="col">
    <div className="card ">
      <div className="card-body p-5 bg-success text-light rounded-3">
      <center><h5 className="card-title">{props.arg2}</h5></center>
      </div>
    </div>
  </div>
  </Link>
  <Link to="/staffs/update" className='nav-link'>
  <div className="col">
    <div className="card ">
      <div className="card-body p-5 bg-success text-light rounded-3">
      <center><h5 className="card-title">{props.arg3}</h5></center>
      </div>
    </div>
  </div>
  </Link>
  <Link to="/staffs/delete" className='nav-link'>
  <div className="col">
    <div className="card ">
      <div className="card-body p-5 bg-success text-light rounded-3">
      <center><h5 className="card-title">{props.arg4}</h5></center>
      </div>
    </div>
  </div>
  </Link>
</div>
</div>
    </>
  )
}

export default StaffHome