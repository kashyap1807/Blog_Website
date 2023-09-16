import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>
          <a href="/">K Blog</a>
        </h1>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>
          <Link to="/contact">Contact us</Link>
        </div>
      </nav>
    );
}

export default Navbar;