import React from 'react'
import { useLocation } from 'react-router-dom'
import Staff from '../staffs/Staff'
import Student from '../students/Student'
import Login from './Login';
import { useState } from 'react';


function Dashboard(props) {
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }

  const location = useLocation();
  // console.log(location.state)
  if(location.state != null){
    return (
      <>
      <center><h1 className='text-success'>Welcome, {location.state.name}</h1></center>
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
  else{
    return(
      <>
      <Login heading="Admin Login" showAlert={showAlert}/>
      </>
    )
    
  }
  
}

export default Dashboard