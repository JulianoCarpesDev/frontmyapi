import styled, { createGlobalStyle } from "styled-components";
import { primaryColor, primarydarkColor } from "../config/color";

// Estilos globais
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }
    body {
        font-family: sans-serif;
        background: ${primarydarkColor};
        color: ${primarydarkColor};
    }
    html, body, #root {
        height: 100%;
    }
    button {
        cursor: pointer;
        background: ${primaryColor};
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius:4px;
        font-weight: 600;
    }
    a {
        text-decoration: none;  
        color: ${primaryColor};
    }
    ul {
        list-style: none;
    }
`;

// Estilos do componente Container
export const Container = styled.section`
    max-width: 700px;
    background: #fff;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    
    @media (max-width: 768px) {
        max-width: 90%; /* Reduz a largura máxima para dispositivos móveis */
    }
`;

// Estilos do componente Tables
export const Tables = styled.table`
    
    @media (max-width: 768px) {
        max-width: 90%; /* Reduz a largura máxima para dispositivos móveis */
    }
`;
