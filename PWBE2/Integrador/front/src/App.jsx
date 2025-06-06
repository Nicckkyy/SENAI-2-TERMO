import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login'; // Caminho relativo para o seu arquivo de LoginPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginPage />} /> {/* Exibe a página de login na rota principal */}
        {/* Você pode adicionar outras rotas conforme o seu projeto cresce */}
      </Routes>
    </Router>
  );
};

export default App;
