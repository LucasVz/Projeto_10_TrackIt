import styled from 'styled-components';
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import Container from '../Container';

export default function Cadastro(){
    return(
        <Container>
            <img src= {logo} alt="logo" />
            <input placeholder='email' type="text" />
            <input placeholder='senha' type="text" />
            <input placeholder='nome' type="text" />
            <input placeholder='foto' type="text" />
            <button>Entrar</button>
            <Link to={'/'}> Já tem uma conta? Faça login!</Link>
        </Container>
    );
}


