import React from 'react'
import BlogList from './BlogList';
import useHook from './useHook';



function Home() {
   const {data:blogs, load, error} = useHook('http://localhost:8000/blogs');
    // <BlogList blogs={blogs.filter((blog) => blog.author === 'Saolat' )} title= "Saolat's blogs" /> 
    return (
        <div className='home'>
            <div>{error}</div>
            {load && <div>loading....</div>}
          {blogs &&  <BlogList blogs={blogs} title="All blogs!" />}

        </div>
    )
}

export default Home