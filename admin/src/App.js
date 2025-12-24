import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

// Components
import Sidebar from './components/SideBar';

// Pages
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import ListProducts from './pages/ListProducts';
import Orders from './pages/Orders';
import Users from './pages/Users';

function App() {
  return (
    <div className="d-flex">
      <ToastContainer />
      
      {/* Sidebar stays fixed on the left */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-grow-1 bg-light" style={{minHeight: "100vh"}}>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/add-product" element={<AddProduct/>} />
          <Route path="/list-products" element={<ListProducts />} /> {/* NEW */}
          <Route path="/orders" element={<Orders />} />             {/* NEW */}
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;