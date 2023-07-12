import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();

    const {data:blog, isPending ,error} = useFetch(' http://localhost:8000/blogs/'+id);

    const history = useHistory();
    const handleClick= () => {

        fetch('http://localhost:8000/blogs/'+ blog.id,{
            method:'DELETE'
        }).then(() => {

            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {/* <h2>Blog Details - {id}</h2> */}
            {isPending && <h2>Loading...</h2>}
            {error && <div>{error}</div>}
            {blog &&
                <artical>
                    <h2>{blog.title}</h2>
                    {/* <br></br> */}
                    <div>{blog.body}</div>
                    {/* <br></br> */}
                    <h3>Written By : {blog.author}</h3>
                    <br></br>
                    <button onClick={handleClick}>Delete</button>
                </artical>
            }
        </div>
     );
}
 
export default BlogDetails;