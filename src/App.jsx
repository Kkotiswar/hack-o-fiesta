import './App.css';
import React, { useState } from 'react';

import  NavbarTop  from './components/NavbarTop';
import NavbarSec from './components/NavbarSec';
import Caraousel from './components/Caraousel';
import Auth from './components/Auth';

function App() {

  const [form,setForm] = useState(false);

  function handleBtnClick(){
      setForm(prev =>{
        return !prev;
      })
  }
  
  return (
    
    <div className="App">
      
     
     {/* <NavbarTop 
       handleBtnClick={handleBtnClick}
     /> */}
     <NavbarSec 
       handleBtnClick={handleBtnClick}
     />
    { form === true ? <Auth /> : <Caraousel />}
     

      
    </div>
  );
}

export default App;
