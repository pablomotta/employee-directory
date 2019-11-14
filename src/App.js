import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import EmployeesTable from './components/employeesTable/EmployeesTable';

import './App.css';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <EmployeesTable />
        </div>
    );
}

export default App;
