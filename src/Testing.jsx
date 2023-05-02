import React,{useState} from 'react'

const Testing = () => {
    const [color,setColor]=useState('#CCCCFF')
    const [text,setText]=useState('Project Started')
    const [bgcolor,setBgcolor]=useState('blue')

    const changeColor=()=>{
        setColor('#FF7F50')
        setText('Project ended')
        setBgcolor('green')
    }
    const doubleClick=()=>{
        setColor('#CCCCFF')
        setText('Project Started')
        setBgcolor('blue')
    }
  return (
    <>
    <div style={{backgroundColor:color,color:bgcolor}}>
        <h1>{text}</h1>
    </div>
    <button className="btn btn-dark" onClick={changeColor} onDoubleClick={doubleClick}>Click me</button>
    </>
  )
}

export default Testing