import React from 'react'
import { useState } from 'react'
import './index.css'

const Form = () => {
    
    const [newEntry,setNewentry]=useState({
      name:"",
      date:""
    });
    const inputData=(e)=>{
      e.preventDefault()
      const name=e.target.name;
      const value=e.target.value;
      setNewentry((previousData)=>{
        return{
            ...previousData,
            [name]:value,
        }
      })
      console.log(inputData);
    }
  
  return (
    <>
    <form >
    <div className='container'>
        <input type="text" placeholder='what is your name' value={newEntry.name} name="name" onChange={inputData}/>
    </div>
    <div>
        <input type="text" placeholder='what is your name' value={newEntry.date} name="date" onChange={inputData}/>
    </div>
    <div>
        <button type='submit' >Submit</button>
    </div>

    </form>
    {/* <h1>{name}</h1>
    <h1>{date}</h1> */}
    {/* <div>
      {newEntry.map((value)=>{
        return(
          <>
          <h2>{value.name}</h2>
          <p>{value.date}</p>
          </>
        )
      })}
    </div> */}
    </>
  )
}

export default Form