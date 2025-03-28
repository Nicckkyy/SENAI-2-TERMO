import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./pages/login";
import Disciplina from "./pages/disciplinas";
import Professor from "./pages/professor";
import Home from "./pages/home";
import Turma from "./pages/turmas";
import Curso from "./pages/curso";
import Ambiente from "./pages/ambientes";
import Register from "./pages/cadastro";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/disciplinas" element={<Disciplina />} />
        <Route path="/turmas" element={<Turma />} />
        <Route path="/cursos" element={<Curso />} />
        <Route path="/ambientes" element={<Ambiente/>} />
        <Route path="/resgister" element={<Register/>} />
      </Routes>
    </Router>
  )
}