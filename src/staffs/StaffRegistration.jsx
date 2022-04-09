import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import StaffNavBar from './StaffNavBar';

function StaffRegistration(props) {
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
        "qualification" : "",
        "experience" : "",
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
        axios.post("http://localhost:5000/api/staffs/",{
            "registrationId": parseInt(data.registrationId),
            "name" : data.name,
            "fatherName": data.fatherName,
            "motherName":data.motherName,
            "contact" : data.contact,
            "email": data.email,
            "gender": data.gender,
            "address": data.address,
            "city" : data.city,
            "qualification" : data.qualification,
            "experience" : data.experience,
            "emergency": data.emergency
        }).then((res)=>{
            //console.log(res.data);
            navigate("/staffs/success", {state: res.data});
        })
        props.showAlert("Registration Successful!","success");
    }
  return (
    <>
    <StaffNavBar/>
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
        <label htmlFor="qualification" className="form-label">Qualification</label>
        <input onChange={(e) => handle(e)} value={data.qualification} type="text" className="form-control" id="qualification" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="experience" className="form-label">Experience</label>
        <input onChange={(e) => handle(e)} value={data.experience} type="text" className="form-control" id="experience" required/>
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

export default StaffRegistration