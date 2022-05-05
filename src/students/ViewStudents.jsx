import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import StudentNavBar from './StudentNavBar';
import Alert from '../components/Alert';

function ViewStudents(props) {
  
  const [student, setStudent] = useState([]);

    const ApiCall = () =>{
      axios.get("https://api-sms-backend.herokuapp.com/api/students/").then((response)=>{
        setStudent(response.data);
        props.showAlert("Records have been fetched Successfully!", "success");
      });
    }

    const print = () =>{
      window.print();
    }
  return (
    <>
    <StudentNavBar/>
    <div className="container-fluid mt-50 w-100 my-3">
      <center>
      <h2 className="text-success">{props.heading}</h2>
      </center>
    <button type="button" className="btn btn-success my-3" onClick={ApiCall}>Get all students</button>
    <div onLoad={ApiCall}>
    <table className="table ">
  <thead className = "table-success">
    <tr>
      <th scope="col">Registration Id</th>
      <th scope="col">Full Name</th>
      <th scope="col">Father Name</th>
      <th scope="col">Mother Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">Pincode</th>
      <th scope="col">State</th>
      <th scope="col">Country</th>
      <th scope="col">Class</th>
      <th scope="col">Section</th>
      <th scope="col">Emergency Contact Number</th>
    </tr>
  </thead>
  {
      student.map((value)=>{
          return(
            <tbody>
                <tr>
                <th scope="row">{value.registrationId}</th>
                <td>{value.name}</td>
                <td>{value.fatherName}</td>
                <td>{value.motherName}</td>
                <td>{value.contact}</td>
                <td>{value.email}</td>
                <td>{value.gender}</td>
                <td>{value.address}</td>
                <td>{value.city}</td>
                <td>{value.pincode}</td>
                <td>{value.state}</td>
                <td>{value.country}</td>
                <td>{value.student_class}</td>
                <td>{value.section}</td>
                <td>{value.emergency}</td>
                </tr>
            </tbody>
          )
      })
  }
</table>
    </div>
    </div>
    
    <center style={{marginBottom: '100px'}} >
      <button className='nav-link w-25 text-light bg-success mt-5' onClick={print} style={{border:"2px solid green",padding:"15px"}}>Print</button>
    </center>

    </>
  )
}

export default ViewStudents