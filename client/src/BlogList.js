import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {

    return ( 
        <div className="blog-list">

            <h2>All Blogs !</h2>
            
        {blogs.map((blog)=>(
            
            <div className="blogpreview" key={blog.id}>
              <Link to={`blogs/${blog.id}`}>
                
                    <h2>{blog.title}</h2>
                    
                    <p>Written by : {blog.author}</p>
              
              </Link>  
                <br></br>
                
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;