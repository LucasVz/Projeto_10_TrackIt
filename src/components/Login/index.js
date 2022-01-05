import styled from 'styled-components';
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import Container from '../Container';

export default function Login(){
    return(
        <Container>
            <img src= {logo} alt="logo" />
            <input placeholder='email' type="text" />
            <input placeholder='senha' type="text" />
            <button>Entrar</button>
            <Link to={'/cadastro'}> Não tem uma conta? Cadastre-se!</Link>
        </Container>
    );
}


