import React, { useState } from 'react'
import axios from 'axios';
import StudentNavBar from './StudentNavBar';
import { useNavigate } from "react-router-dom";

function Registration(props) {
    const navigate = useNavigate();
    const [data, setData] = useState({
        "registrationId": "",
        "name" : "",
        "fatherName": "",
        "motherName":"",
        "contact" : "",
        "email": "",
        "gender": "",
        "address": "",
        "city" : "",
        "pincode" : "",
        "state" : "",
        "country": "",
        "student_class": "",
        "section": "",
        "emergency": ""
    })

    const handle = (e) =>{
        const newData = {...data};
        // console.log(newData);
        newData[e.target.id] = e.target.value;
        setData(newData);
        
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("https://api-sms-backend.herokuapp.com/api/students/",{
            "registrationId": parseInt(data.registrationId),
            "name" : data.name,
            "fatherName": data.fatherName,
            "motherName":data.motherName,
            "contact" : data.contact,
            "email": data.email,
            "gender": data.gender,
            "address": data.address,
            "city" : data.city,
            "pincode" : data.pincode,
            "state" : data.state,
            "country": data.country,
            "student_class": data.student_class,
            "section": data.section,
            "emergency": data.emergency
        }).then((res)=>{
            //console.log(res.data);
            navigate("/students/success", {state: res.data});
        })
        props.showAlert("Registration Successful!","success");
    }

  return (
    <>
    <StudentNavBar/>
    <div className="container w-50 text-success" style={{marginBottom: '100px'}}>
    <form method="POST" onSubmit={(e) => submitHandler(e)}>
    <h1 className ="my-3 text-success">{props.heading}</h1>
    <div className="mb-3">
        <label htmlFor="studentId" className="form-label">Registration Id</label>
        <input onChange={(e) => handle(e)} value={data.registrationId} type="number"  className="form-control" id="registrationId" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="studentName" className="form-label">Full Name</label>
        <input onChange={(e) => handle(e)} value={data.name} type="text" className="form-control" id="name" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="fatherName" className="form-label">Father Name</label>
        <input onChange={(e) => handle(e)} value={data.fatherName} type="text" className="form-control" id="fatherName" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="motherName" className="form-label">Mother Name</label>
        <input onChange={(e) => handle(e)} value={data.motherName} type="text" className="form-control" id="motherName" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="contact" className="form-label">Contact Number</label>
        <input onChange={(e) => handle(e)} value={data.contact} type="text" className="form-control" id="contact" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input onChange={(e) => handle(e)} value={data.email} type="text" className="form-control" id="email" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="gender" className="form-label">Gender</label>
        <input onChange={(e) => handle(e)} value={data.gender} type="text" className="form-control" id="gender" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input onChange={(e) => handle(e)} value={data.address} type="text" className="form-control" id="address" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="city" className="form-label">City</label>
        <input onChange={(e) => handle(e)} value={data.city} type="text" className="form-control" id="city" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="pincode" className="form-label">Pincode</label>
        <input onChange={(e) => handle(e)} value={data.pincode} type="text" className="form-control" id="pincode" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="state" className="form-label">State</label>
        <input onChange={(e) => handle(e)} value={data.state} type="text" className="form-control" id="state" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="country" className="form-label">Country</label>
        <input onChange={(e) => handle(e)} value={data.country} type="text" className="form-control" id="country" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="student_class" className="form-label">Class</label>
        <input onChange={(e) => handle(e)} value={data.student_class} type="text" className="form-control" id="student_class" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="section" className="form-label">Section</label>
        <input onChange={(e) => handle(e)} value={data.section} type="text" className="form-control" id="section" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="emergency" className="form-label">Emergency Contact Number</label>
        <input onChange={(e) => handle(e)} value={data.emergency} type="text" className="form-control" id="emergency" required/>
    </div>

    <button type="submit" className="btn btn-success">Submit</button>
    </form>
    </div>
    
    </>
  )
}

export default Registration