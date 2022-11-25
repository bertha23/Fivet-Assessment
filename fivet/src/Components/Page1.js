import React from 'react';
import '../Styles/main.css';
import { useState, useEffect } from "react";

function Item1() {
    const [itemname, setItemname] = useState("Item 1");
    useEffect(()=>{
        localStorage.setItem("Item1", itemname);
    } ,[Item1]);
    return (
      <>
          <p id='item1pg1' onClick={(event)=>setItemname("Pinned",event)}> {itemname}</p>  
      </>
    );
  } 
  
function Item2() {
    const [itemname, setItemname] = useState("Item 2"); 
    useEffect(()=>{
        localStorage.setItem("Item2", itemname);
    } ,[Item2]);
   
    return (
      <>
          <p id='item2pg1' onClick={(event)=> setItemname("Pinned",event)}>{itemname} </p>
      </>
    );
  }

  
function Item3() {
    const [itemname, setItemname] = useState("Item 3");
    useEffect(()=>{
        localStorage.setItem("Item3", itemname);
    } ,[Item3]);
    
    return (
      <>
          <p id='item3pg1' onClick={(event)=> setItemname("Pinned",event)}>{itemname} </p>
      </>
    );
  }
  
function Page1 ()
{
    return (
        <div>
            <h2>Page1</h2><br/>
            <div>
            <Item1 /><br/>
            <Item2/><br/>
            <Item3/>
            </div>
        </div>
    );
}

export default Page1;