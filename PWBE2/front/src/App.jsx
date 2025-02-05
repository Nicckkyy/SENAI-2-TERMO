import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from "./componentes/login";
import Home from "./componentes/home"

export default function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="login" element={<Home/>}/>

            </Routes>
        </Router>
    )
}