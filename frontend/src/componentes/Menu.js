import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaHome, FaCentos, FaChartLine, FaSignOutAlt } from 'react-icons/fa';

import Inicio from './pages/Inicio';
import Ganado from './pages/Ganado';
import Graficos from './pages/Graficos';
import Login from './pages/login';  // Agrega la importación del componente Login
import logo from '../logo.png';
import Footer from './Footer';
import Categoria from './pages/Categoria';
import ProduccionDeLeche from './pages/ProduccionDeLeche';
import Raza from './pages/Raza';

const Menu = () => {
  return (
    <Router>
      <header>
        <br />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container d-flex justify-content-end">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" width="100" height="100" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <FaHome /> INICIO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categoria">
                    <FaCentos /> CATEGORIA
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/raza">
                    <FaCentos /> RAZA
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ganaderia">
                    <FaCentos /> GANADERIA
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/litrosDeLeche">
                    <FaChartLine /> PRODUCCIÓN DE LECHE 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/graficos">
                    <FaChartLine /> GRAFICOS
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/salir">
                    <FaSignOutAlt /> SALIR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/raza" element={<Raza />} />
        <Route path="/ganaderia" element={<Ganado />} />
        <Route path="/litrosDeLeche" element={<ProduccionDeLeche/>} />
        <Route path="/graficos" element={<Graficos />} />
        <Route path="/salir" element={<Login onLogin={() => {}} />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default Menu;
