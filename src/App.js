import './App.css';
import React from 'react';
import { getProblems } from './components/api/problemdata';
import  NavbarTop  from './components/NavbarTop';
import NavbarSec from './components/NavbarSec';
import Caraousel from './components/Caraousel';

import Problems from './components/problem/Problems';
function App() {
  
    var data=getProblems('greedy',800);
    console.log(data);
    
  return (
    
    <div className="App">
      
     
     {/* <NavbarTop /> */}
     <NavbarSec />
    
     {/* <Caraousel /> */}
     {/* <ProblemCard title="Solve me" description="binary search, greedy, dp" url="https://www.google.com"/> */}

      <Problems tag="greedy" />
     

      
    </div>
  );
}

export default App;
