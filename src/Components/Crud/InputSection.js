import "./style.css";      
import { useState } from "react";                                                                                                                                                                                                                          import React from 'react'

function InputSection() {
  const [value, setValue]=useState("");
  const [newtodo, setNewtodo]=useState([])

  const handleChange=(e)=>{
    e.preventDefault();
    setNewtodo([...newtodo, value]);
    setValue("");
  }
  console.log(value);

  return (
    <div className='inputContainer'>
          <h1>CRUD Web App</h1>
        <div className="inputdiv">
        <input type="text" value={value} className="inputfield"  onChange={(e)=>setValue(e.target.value)}/>
        <button className="addBtn" onClick={handleChange}>Add</button>
        </div>

        {
          newtodo && newtodo.map((item, i)=>(
            <div className="todoItem">
            <p className="itemtag" key={i}>{item}</p>
            <button>Update</button>
            <button>Delete</button>
            </div>
          ))
        }

    </div>
  )
}

export default InputSection