import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import Container from '../Container';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Register(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [botao, setBotao] = useState('Cadastrar')
    const [opacityValue, setOpacityValue] = useState('1');

    function signUp(e){
        e.preventDefault();

        setBotao(<Loader type="ThreeDots" color="#FFFFFF" height={15} width={45}/>);
        setOpacityValue('0.7');

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
            email,
            name,
            image,
            password
        });
        promise.then (response => {
            setBotao('Cadastrar');
            setOpacityValue('1');
        });
        promise.catch (error => {
            setBotao('Cadastrar');
            setOpacityValue('1');
        });
    }

    return(
        <Container onSubmit={signUp}>
            <img src= {logo} alt="logo" />
            <input placeholder='email' type="email"  onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input placeholder='senha' type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <input placeholder='nome' type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            <input placeholder='foto' type="text" onChange={(e) => setImage(e.target.value)} value={image}/>
            <Button opacity = {opacityValue}>{botao}</Button>
            <Link to={'/'}> Já tem uma conta? Faça login!</Link>
        </Container>
    );
}

const Button = styled.button`
    border: none;
    background: #52B6FF;
    border-radius: 4.63636px;
    width: 303px;
    height: 45px;

    margin-top: 6px;

    font-family: Lexend Deca;
    font-size: 21px;
    line-height: 26px;
    opacity:${props => props.opacity};

    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFFFFF;
`;
