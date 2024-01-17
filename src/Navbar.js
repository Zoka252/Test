import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>ToDoList</h1>
            <div className="buttons">
                <Link to="/"><button>Create New Task</button></Link>
                <Link to="/add"><button>Delete Task</button></Link>
            </div>
            
        </div>
     );
}
 
export default Navbar;