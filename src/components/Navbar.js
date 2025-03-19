import React from 'react';
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/bike-brands">Marcas de Bicis</Link></li>
        <li><Link to="/brand-models">Modelos</Link></li>
        <li><Link to="/bike-components">Componentes</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;