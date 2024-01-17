import './App.css';
import Todolist from './Todolist';
import Navbar from './Navbar';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Add from './Add';
import Remove from './Remove';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar></Navbar>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Todolist />} />
                        <Route path="/add" element={<Add />} />
                        <Route path="/remove" element={<Remove />} />

                    </Routes>
                </div>
            </div>
        </Router>
    );
}

const Root = () => {
    return <></>
}

export default App;