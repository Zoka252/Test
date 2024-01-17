const Taskovi = ({list}) => {

    return ( 
        <div className="taskovi">
        {list.map((list) => (
            <div className="list-preview" key={list.id}>
                <h2>{list.title}</h2>
                <p>Uraditi do: {list.date}</p>
            </div>
        ))}
        </div>
    );
}
 
export default Taskovi;