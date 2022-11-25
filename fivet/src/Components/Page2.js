import React from 'react';
import '../Styles/main.css';
import { useState, useEffect } from "react";


function Item_1() {
    const [itemname, setItemname] = useState("Item_1");
    useEffect(()=>{
        localStorage.setItem("Item_1", itemname);
    } ,[Item_1]);
    /*useState(()=>
    {localStorage.setItem("Item_1","Pinned");},[Item_1])
    const status = localStorage.getItem("Item_1");*/

    return (
      <>
          <p id='item1pg2'onClick={()=>setItemname("Pinned")}> {itemname}</p> 
      </>
    );
  }
  
  function Item_2() {
    const [itemname, setItemname] = useState("Item_2");
    useEffect(()=>{
        localStorage.setItem("Item_2", itemname);
    } ,[Item_2]);
    /*useState(()=>
    {localStorage.setItem("Item_2","Pinned");},[Item_2])
    const status = localStorage.getItem("Item_2");

    if (itemname=="Item_2")
    {
      setItemname("Pinned");
    }
    
    //console.log("888");*/
    
    return (
      <>
          <p id='item2pg2'onClick={(event)=>setItemname("Pinned",event)}> {itemname}</p> 
      </>
    );
  }

  function Item_3() {
    const [itemname, setItemname] = useState("Item_3");
    useEffect(()=>{
        localStorage.setItem("Item_3", itemname);
    } ,[Item_3]);
    
    return (
      <>
          <p id='item3pg2'onClick={(event)=>setItemname("Pinned",event)}> {itemname}</p> 
      </>
    );
  }

function Page2 ()
{
    return (
        <div>
            <h2>Page2</h2><br/>
            <div>
            <Item_1 /><br/>
            <Item_2/><br/>
            <Item_3/>
            </div>
        </div>
    );
}

export default Page2;