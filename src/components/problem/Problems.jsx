import React ,{useEffect, useState} from 'react';
import ProblemCard from './ProblemCard';
import axios from 'axios';
import { getProblems } from '../api/problemdata';
var rating;
const getProblem=(data)=>{
  return <ProblemCard title="hii" description="hello" url="https://www.google.com" />
}
const Problems =(props) => {
  var arr=getProblems(props.tag,props.rating);
 
  return (
    arr.map(getProblem)
  )
   
  
}

export default Problems;