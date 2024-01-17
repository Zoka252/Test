import React from "react";
import useFetch from "./useFetch";
import Taskovi from "./Taskovi";
import RemoveTasks from "./RemoveTasks";


const Remove = () => {
    const{ data: list, isPending, error} = useFetch('http://localhost:8000/list');
    return ( 
        <div className='listRemoving'>
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            {list && <RemoveTasks list={list} />}
        </div>
     );
}
 
export default Remove;