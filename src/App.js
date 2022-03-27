import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import Login from './components/Login';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/Dashboard';

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
    </Routes>
    <Footer heading="All rights reserved, 2022"/>
    </BrowserRouter>
    </>
  );
}

export default App;
