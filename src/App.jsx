import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeListing from './components/EmployeeListing';
import EmpCreate from './components/EmpCreate';
import EmpDetails from './components/EmpDetails';
import EmpEdit from './components/EmpEdit';



const App = () => {


  return (
    <div className='App'>
      <h1>React JS Crud Operation</h1>
      {/* routing */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeListing />}></Route>
          <Route path="/employee/create" element={<EmpCreate />}></Route>
          <Route path="/employee/details/:empid" element={<EmpDetails />}></Route>
          <Route path="/emlement/edit/:empid" element={<EmpEdit />}>
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );

}

export default App