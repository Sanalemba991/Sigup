import React from "react";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./LogIn";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<SignUp/>}></Route>
          <Route path='/' element={<LogIn/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path="/success" element={<Success/>}/>
       
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
