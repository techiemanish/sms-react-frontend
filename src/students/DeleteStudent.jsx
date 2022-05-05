import React, { useState } from 'react'
import axios from 'axios'
import FindById from './FindById'

function DeleteStudent(props) {
    const [data , setData] = useState({
        "registrationId": ""
    });

    const handle = (e) =>{
        const newData = {...data};
        // console.log(newData);
        newData[e.target.id] = e.target.value;
        setData(newData);
        
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(data.registrationId)
        const endpoint ="https://api-sms-backend.herokuapp.com/api/students/" + data.registrationId;
        console.log(endpoint)
        axios.delete(endpoint);
        props.showAlert("Student record has been deleted from the database!","success");
    }
  return (
    <>
    <FindById heading="Search Student by Id" showAlert={props.showAlert}/>
    <div className="container w-50" style={{marginBottom:"100px"}}>
    <form onSubmit={(e) => submitHandler(e)}>
            <h2 className ="my-3 text-danger">{props.heading}</h2>
            <div className="mb-3">
            <label htmlFor="registrationId" className="form-label text-success">Student Registration Id</label>
            <input onChange={(e) => handle(e)} value={data.registrationId} type="number"  className="form-control" id="registrationId" required/>
            </div>
        <button type="submit" className="btn btn-success">Submit</button>
    </form>
    </div>
    
    </>
  )
}

export default DeleteStudent