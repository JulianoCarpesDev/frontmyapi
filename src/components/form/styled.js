import { styled } from "styled-components";
import { primaryColor } from "../../config/color";
export const Form = styled.form`
    background: ${primaryColor};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:4px;
  
`
export const Input= styled.input`
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px; /* Ajuste o tamanho máximo conforme necessário */
  margin: 30px auto;
  text-align: center;
`
