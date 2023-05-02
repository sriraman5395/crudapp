import React from 'react';
import './App.css';
// import Test from './Test';
// import Testing from './Testing';
// import Form from './form';
// import Fetch from './fetch';
// import FetchProj from './FetchProj';

import Create from './components/create/create';
import Read from './components/read/read';
import {Routes, Route} from 'react-router-dom'
import Update from './components/update/update';
import Delete from './components/delete/delete';
import New from './New';
function App() {
  
  return (

   <div>

      <Routes>
      <Route  path="/"  element={<div>
         CRUD APP
       
        </div>} />
      
        <Route  exact path="/read"  element={<Read />} />
        <Route  exact path="/create"  element={<Create />} />
        <Route  exact path="/update"  element={<Update />} />
        <Route  exact path="/delete"  element={<Delete />} />
        <Route  exact path="/new"  element={<New />} />
       </Routes> 
   
    </div> 
   
   

  );
}

export default App;
