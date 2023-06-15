import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import Config from "../screens/Config";
import Baner from "../components/Baner";


export default function Rotas() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/Perfil" element={<Perfil/>}/>
        <Route  path="/Config" element={<Config/>}/>
      </Routes>
    </BrowserRouter>
  );
}
