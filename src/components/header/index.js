import React from "react";
import { Nav } from "./styled";
import{Link} from "react-router-dom";
import { FaHome, FaSignInAlt } from 'react-icons/fa'; // Import from Font Awesome
//import{MdAdd,MdPerson}from 'react-icons/md'


export default function Header(){
    return(
        <Nav>
            
            <Link to="/">
                <FaHome size={24}/> 
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

            <Link to="/">
                <FaSignInAlt size={24}/>
                </Link>
        </Nav>
    )

}