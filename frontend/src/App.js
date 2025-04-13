import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home'
import Details from './Pages/Details';
import Profile from './Pages/Profile';
import MyBooks from './Pages/MyBooks';
import AddBooks from './Pages/AddBooks';
import Wishlist from './Pages/Wishlist';
import MyPurchases from './Pages/MyPurchases';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mybooks" element={<MyBooks />} />
        <Route path="/addbooks" element={<AddBooks />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mypurchases" element={<MyPurchases />} />

        
      </Routes>
    </Router>
  );
}

export default App;