import React from 'react'
import axios from 'axios';
import { useState } from 'react'

function Login(props) {
  const [data, setData] = useState({
    "email": "",
    "password": ""
})

const handle = (e) =>{
    const newData = {...data};
    // console.log(newData);
    newData[e.target.id] = e.target.value;
    setData(newData);
    
}

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login",{
      "email":data.email,
      "password" : data.password
    })
    .then((res)=>{
      if(res.data === "Incorrect Credentials"){
        props.showAlert("Incorrect Password. Please try again!", "danger");
      }
      else{
        props.showAlert("Login Successful!","success");
      }
    }).catch(error=>console.error())
  }
  return (
    <>
    <div className="container p-4 card" style={{width: "30rem",marginTop:"40px",border:"2px solid #f1f1f1"}}>
    <div className="card-body">
        <center><h2 className="card-title text-success">{props.heading}</h2></center>
        <form method='POST' onSubmit={(e)=>{login(e)}} >
    <div className="mb-3">
        <label htmlFor="email" className="form-label text-success">Email</label>
        <input type="email" onChange={(e) => handle(e)} value={data.email} className="form-control" id="email" aria-describedby="emailHelp" name="email"/>
    </div>
    <div className="mb-3">
        <label htmlFor="password" className="form-label text-success">Password</label>
        <input type="password" onChange={(e) => handle(e)} value={data.password} className="form-control" id="password" name="password"/>
    </div>
    <center><button type="submit" className="btn btn-success">Login</button></center>
    </form>
    </div>
    </div>
    </>
  )
}

export default Login