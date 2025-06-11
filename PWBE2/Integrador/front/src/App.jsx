import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Sensores from './pages/Sensores/Sensores';
import Ambientes from './pages/Ambientes/Ambientes';
import Historico from './pages/Historico/Historico';
// import './App.module.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sensores" element={<Sensores />} />
            <Route path="/ambientes" element={<Ambientes />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
