import React,{useState,useEffect} from 'react'

const Fetch = () => {
    const[data,setData]=useState([])
    // console.log(data);
    useEffect(()=>{
        getData();
    },[])

    const getData=async()=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/todos')
        // console.log(response);
        const jsonData=await response.json();
        // console.log(jsonData);
        setData(jsonData);

    }
    // getData();


  return (
    <div>
      <h2>React fetch api</h2>
      <div className="text">
        {/* {data.map((value)=>{
        return(
            <>
            
            <h5>{value.title}</h5>
            </>
        )
        
        })} */}
        
      </div>

    </div>
  )
}

export default Fetch