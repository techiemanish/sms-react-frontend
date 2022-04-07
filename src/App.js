import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import Login from './components/Login';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import StudentHome from './students/StudentHome';
import StaffHome from './staffs/StaffHome';
import Registration from './students/Registration';
import RegisteredStudent from './students/RegisteredStudent';

function App() {
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

  return (
    <>
    <BrowserRouter>
    <Alert alert={alert}/>
    <Navbar heading="School Management System"/>
    <Routes>
      <Route exact path="/" element={<Login heading="Admin Login" showAlert={showAlert}/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route path= "*" element={<Login heading="Admin Login" showAlert={showAlert}/>}/>
      <Route exact path="/students" element={<StudentHome 
      arg1="New Student Record"
      arg2="View Student Records"
      arg3="Update Student"
      arg4="Delete Student Details"
      />}/>
      <Route exact path="/staffs" element={<StaffHome
      arg1="New Staff Registration"
      arg2="Views Staff records"
      arg3="Update Staff records"
      arg4="Delete Staff records"
      />}/>
    {/* Dashboard component will be replaced once contemporay component will be created */}
    <Route exact path="/students/add" element={<Registration heading="New Student Registration" showAlert={showAlert}/>}/>
    <Route exact path="/students/success" element={<RegisteredStudent/>}/>
    <Route exact path="/students/view" element={<Dashboard/>}/>
    <Route exact path="/students/findbyId" element={<Dashboard/>}/>
    <Route exact path="/students/update" element={<Dashboard/>}/>
    <Route exact path="/students/delete" element={<Dashboard/>}/>

    <Route exact path="/staffs/add" element={<Dashboard/>}/>
    <Route exact path="/staffs/view" element={<Dashboard/>}/>
    <Route exact path="/staffs/findbyId" element={<Dashboard/>}/>
    <Route exact path="/staffs/update" element={<Dashboard/>}/>
    <Route exact path="/staffs/delete" element={<Dashboard/>}/>
    </Routes>
    <Footer heading="All rights reserved, 2022"/>
    </BrowserRouter>
    </>
  );
}

export default App;
