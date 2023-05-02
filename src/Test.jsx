import React,{useState} from 'react'
import './App.css';
const Test = () => {
    const[title,setTitle] = useState('');
    const[body,setBody] = useState('');
    const[author,setAuthor] = useState('yoshi');
    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title, body, author};
        console.log(blog);
    }
    let increasePara =() => {
        increasePara++;
        console.log(increasePara)
    }
  return (
    <div className='create'>
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>BlogTitle</label>
            <input 
            type="text"
            required
            value={title}
            onChange={(e)=>setTitle(e.target.value)}

            />
              <label>BlogBody</label>
         <textarea
            required
            value={body}
            onChange={(e)=>setBody(e.target.value)}>
         </textarea>
         <label>BlogAuthor</label>
      <select 
      value={author} 
      onChange = {(e) => setAuthor(e.target.value)}
      
      >
        <option value="mario">mario</option>
        <option value="yoshi">yoshi</option>
      </select>
      <button>Add Blog</button>
      <button onClick={increasePara()}>Press me</button>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
        </form>

    </div>
  )
}

export default Test