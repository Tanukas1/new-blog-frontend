
import { Switch } from "@material-ui/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../blogContext";

const Header = (props) => {

    const currentUser = sessionStorage.getItem('user');
    const [blogList, setblogList, loading, setLoading] = useContext(BlogContext);


    const  logout  =  ( )  =>  {
        sessionStorage.removeItem('user');
        window.location.replace('/login');
    }

    const showLoggedIn = () => {

        if (currentUser) {
            return <>
                <li className="nav-item">
                    <Link className="nav-link" to="/product">Product</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/addvideo">Add Video</Link>
                </li>
                <li className="nav-item">
                    <button onClick={logout} className="btn btn-danger">Logout</button>
                </li>

            </>
        } else {
            return <>
             
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Signup</Link>
                </li>
               
            </>
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Blogging</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                            <Link className="nav-link" to="/listblog">Blogs</Link>
                    </li>
                    <li className="nav-item">
                            <Link className="nav-link" to="/listblog">Add Blog</Link>
                    </li>


                        {showLoggedIn()}

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}


export default Header;