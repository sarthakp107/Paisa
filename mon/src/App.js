import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from "./pages/home/Home.js";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar.js";
import { useAuthContext } from "./hooks/useAuthContext.js";
import { AuthContext } from "./context/AuthContext.js";




function App() {
  const {authIsReady} = useAuthContext();
  return (
    <div className="App">
    {authIsReady && (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
  )}
  </div>
  );
}

export default App;
