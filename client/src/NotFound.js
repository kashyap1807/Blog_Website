import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This Page is not found</p>
            <Link to="/">Go Back to Home Page...</Link>
        </div>
     );
}
 
export default NotFound;
