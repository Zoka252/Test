import "./Remove.css"

const RemoveTasks = ({list}) => {
    return ( 
        <div className="taskovi">
        {list.map((list) => (
            <div className="list-preview" key={list.id}>
                <div className="data">
                    <h2>{list.title}</h2>
                    <p>Uraditi do: {list.date}</p>
                </div>
                <div className="removebutton"><button>Remove</button></div>
            </div>
            
        ))}
        </div>
     );
}
 
export default RemoveTasks;