import './App.css';
import Todolist from './Todolist';
import Navbar from './Navbar';
import React from 'react';
import {BrowserRouter} from 'react-router-dom'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>

      </Route>
    )
  )

  return (
    <Router>
      <div className="app">
        <Navbar></Navbar>
        <div className="content">
            <Route exact path="/">
              <Todolist></Todolist>
            </Route>
          
        </div>
      </div>
    </Router>
  );
}

const Root = () -> {
  return <></>
}

export default App;
