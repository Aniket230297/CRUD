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

  const handleUpdate = (index) => {
    const updatedTodo = prompt("Update todo:", newtodo[index]);
    if (updatedTodo !== null) {
      const updatedTodos = [...newtodo];
      updatedTodos[index] = updatedTodo;
      setNewtodo(updatedTodos);
    }
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this todo?");
    if (confirmDelete) {
      const updatedTodos = [...newtodo];
      updatedTodos.splice(index, 1);
      setNewtodo(updatedTodos);
    }
  };

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
            <button className="updatebtn" onClick={() => handleUpdate(i)}>Update</button>
            <button className="deletebtn" onClick={() => handleDelete(i)}>Delete</button>
            </div>
          ))
        }

    </div>
  )
}

export default InputSection