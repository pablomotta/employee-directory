import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import EmployeesTable from './components/employeesTable/EmployeesTable';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <EmployeesTable />
            <Footer />
        </div>
    );
}

export default App;
