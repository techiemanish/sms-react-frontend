import React, { useState } from 'react'
import axios from 'axios'
import StaffNavBar from './StaffNavBar';

function StaffFindById(props) {
    const print = () =>{
        window.print();
      }
    const [data , setData] = useState("");

    const [display, setDisplay] = useState("none");

    const handle = (e) =>{
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        setDisplay("block");
        
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        if(data.registrationId === undefined){
            props.showAlert("No record found!", "danger");
        }
        else{
            const endpoint ="http://localhost:5000/api/staffs/" + data.registrationId;
            axios.get(endpoint).then((res)=>{
            // console.log(res.data)
                if(res.data === null){
                    props.showAlert("No record found!", "danger");
                    setData("");
                }
                else{
                    props.showAlert("Record has been fetched Successfully!", "success");
                    setData(res.data);
                }
            });
        }
        
        
    }
  return (
    <>
    <StaffNavBar/>
    <div className="container w-50 my-3">
    <form onSubmit={(e) => submitHandler(e)}>
            <h2 className ="my-3 text-success">{props.heading}</h2>
            <div className="mb-3">
            <label htmlFor="registrationId" className="form-label text-success">Staff Registration Id</label>
        <   input onChange={(e) => handle(e)} value={data.registrationId} type="number"  className="form-control" id="registrationId" required/>
            </div>
        <button type="submit" className="btn btn-success">Submit</button>
    </form>
    </div>
    <div className="container-fluid w-100" style={{display:display}}>
    <div>
    <table className="table  my-3">
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
      <th scope="col">Qualification</th>
      <th scope="col">Experience</th>
      <th scope="col">Emergency Contact Number</th>
    </tr>
  </thead>
        <tbody>
            <tr>
            <th scope="row">{data.registrationId}</th>
                <td>{data.name}</td>
                <td>{data.fatherName}</td>
                <td>{data.motherName}</td>
                <td>{data.contact}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
                <td>{data.address}</td>
                <td>{data.city}</td>
                <td>{data.qualification}</td>
                <td>{data.experience}</td>
                <td>{data.emergency}</td>
            </tr>
        </tbody>
</table>
    </div>

    </div>

    {/* <center style={{marginBottom: '100px'}} >
      <button className='nav-link w-25 text-light bg-success mt-3' onClick={print} style={{border:"2px solid green",padding:"15px"}}>Print</button>
    </center> */}
    
    </>
  )
}

export default StaffFindById