import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import Login from './components/Login';

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
    <Alert alert={alert}/>
    <Navbar heading="School Management System"/>
    <Login heading="Admin Login" showAlert={showAlert}/>
    </>
  );
}

export default App;
