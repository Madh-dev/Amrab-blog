import React, { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Amrab');
   const[load, setLoads] = useState(false);
   const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog ={title, body, author};
        setLoads(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
            
        })
        .then(()=>{
            console.log('new blog added');
            setLoads(false);
            history.push('/');
        })
    }

    return ( 
            <div className="create">
                <h1>New Blog</h1>
                <form onSubmit={handleSubmit}>
                    <label>Blog-title:</label>
                    <input
                    type="text"
                    value={title}
                    onChange= {(e)=> setTitle(e.target.value)}
                    required
                    />
                    <label>Blog-body:</label>
                    <textarea
                    type="text"
                    value={body}
                    onChange= {(e)=> setBody(e.target.value)}
                    required
                    ></textarea>
                    <label>Blog author:</label>
                    <select 
                    value={author}
                    onChange= {(e)=> setAuthor(e.target.value)}>
                        <option value="Amrab">Amrab</option>
                        <option value="Trust Digital">Trust Digital</option>
                        <option value="Abdulmalik">Abdulmalik</option>
                        <option value="Wadudah">Wadudah</option>
                        <option value="Uheezal">Uheezal</option>
                    </select>
                  {!load && <button>Add Blog</button> } 
                  {load && <button disabled>Adding Blog</button> } 

                </form>
            </div>
     );
}
 
export default Create;