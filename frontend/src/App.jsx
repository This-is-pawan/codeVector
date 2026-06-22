import React from 'react'
import { GlobalContext } from './ContextApi'
import {  Routes, Route } from "react-router-dom";
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import Home from './components/Home';
import Navbar from './components/Navbar';




const App = () => {
  const{user}=GlobalContext()

  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product-list" element={<ProductList />} />
        <Route path="/Product-card/:id" element={<ProductCard />} />
      </Routes>
    </div>
  )
}

export default App
