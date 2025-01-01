import React from "react";
import { BrowserRouter, Routes, Route , Navigate} from 'react-router'
import Home from "./pages/home/Home.js";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar.js";
import { useAuthContext } from "./hooks/useAuthContext.js";
import { AuthContext } from "./context/AuthContext.js";




function App() {
  const {authIsReady , user} = useAuthContext();
  return (
    <div className="App">
    {authIsReady && (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
          <Route path="*" element={<Home/>}/>
          <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}/>
          <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/"/>}/>
        </Routes>
    </BrowserRouter>
  )}
  </div>
  );
}

export default App;
