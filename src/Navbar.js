import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to='/'>Home</Link> |
            <Link to='/about'>About</Link> |
            <Link to='/contact'>Contact</Link> |
            <Link to='/register'> Register </Link> |
            <Link to='/login'> Login </Link> 
        </div>
    );
};