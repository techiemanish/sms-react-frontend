import React from 'react'
import Staff from '../staffs/Staff'
import Student from '../students/Student'

function Dashboard(props) {
  return (
    <>
  <div className="row">
  <div className="col-sm-5 mx-5 my-5 bg-success text-success rounded-3 p-5">
    <div className="card p-3">
      <div className="card-body">
        <Student description="Student Management"/>
      </div>
    </div>
  </div>
  <div className="col-sm-5 mx-5 my-5 bg-success text-success rounded-3 p-5">
    <div className="card p-3">
      <div className="card-body">
        <Staff description="Staff Management"/>
      </div>
    </div>
  </div>
</div>
    </>
    
    
  )
}

export default Dashboard