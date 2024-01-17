import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to="/" className='logo'><h1>ToDoList</h1></Link>
            
            <div className="buttons">
                <Link to="/add"><button>Create New Task</button></Link>
                <Link to="/remove"><button>Delete Task</button></Link>
            </div>
            
        </div>
     );
}
 
export default Navbar;