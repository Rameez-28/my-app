// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  Link
  } from "react-router-dom";


function App() {
   const [mode, setMode] = useState(`light`);
   const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
   setTimeout(() => {
     setAlert(null);
   }, 2000);
  }

   const toggleMode = ()=>{
if(mode === 'light'){
  setMode ('dark');
  document.body.style.backgroundColor = '#0c3b81';
  showAlert("Dark mode has been enabled", "success ");
  document.title=`TextUtils - Dark Mode`;
  // for Intervel shows on title
  //  setInterval(() => {
  //   document.title = `TextUtils is Amazing Mode`;
  // }, 2000);
  // setInterval(() => {
  //   document.title = `Install TextUtils Now`;
  // }, 1500);
}
else{
  setMode ('light');
  document.body.style.backgroundColor = 'white';
  showAlert("Light mode has been enabled", "success");
  document.title=`TextUtils - Light Mode`;
}
}
  return (
    <>

{/* <Navbar title="TextUtils" aboutText="TextUtils"/> */}
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/> 
<div className="container my-3" >
<Routes>
          <Route path='/About' element={<About/>}/>
          <Route path='/' element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
  
</Routes>
</div>
</Router>
{/* <About/> 
 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/> 
<div className="container my-3" >
<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
</div> */}

</>
  );
}

export default App;
