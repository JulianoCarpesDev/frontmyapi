import React from "react";
import { Nav } from "./styled";
import { Link } from "react-router-dom";
import { FaHome, FaSignInAlt } from 'react-icons/fa'; // Import from Font Awesome

export default function Header({ showNavLinks }) {
  return (
    <Nav>
      {showNavLinks && (
        <>
          <Link to="/home">
            <FaHome size={24} />
          </Link>

          <Link to="/clients">
            Clientes
          </Link>

          <Link to="/products">
            Produtos
          </Link>

          <Link to="/budget">
            Orçamento
          </Link>
        </>
      )}
      <Link to="/logout">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
