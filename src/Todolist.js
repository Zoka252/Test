import "./Todolist.css"
import { useState, useEffect } from 'react';
import Taskovi from "./Taskovi";
import useFetch from "./useFetch";
import Navbar from "./Navbar";

const Todolist = () => {
    const{ data: list, isPending, error} = useFetch('http://localhost:8000/list');
    

    return( 
        
        <div className='list'>
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            {list && <Taskovi list={list} />}
        </div>
    );
}
 
export default Todolist;