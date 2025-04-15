import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home'
import PostDetails from './Pages/PostDetails';
import Profile from './Pages/Profile';
import MyBooks from './Pages/MyBooks';
import AddPost from './Pages/AddPost';
import Wishlist from './Pages/Wishlist';
import MyPurchases from './Pages/MyPurchases';
import Seller from './Pages/Seller';


function App() {
  const samplepost = {
    id: 1,
    title: 'The Mind of a Leader',
    author: 'Kevin Nash',
    description: 'This is a sample post description.',
    price: 899,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s',
    seller: 'Jason Broady',
    condition: 'New',
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:post_id" element={<PostDetails/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mybooks" element={<MyBooks />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mypurchases" element={<MyPurchases />} />
        <Route path="/seller/:seller" element={<Seller />} />        
      </Routes>
    </Router>
  );
}

export default App;