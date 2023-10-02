import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
const App = () => {
     return (
          <Container maxWidth="lg">
               <Navbar/>
               <Routes>
               <Route exact path="/" element={<Home/>}/>
               <Route exact path="/auth" element={<Auth/>}/>
               </Routes>
          </Container>
     );
};

export default App;
