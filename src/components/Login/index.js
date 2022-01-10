import logo from "../../assets/logo.png"
import { Link, useNavigate } from "react-router-dom";
import Container from '../Container';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useContext } from "react";
import UserContext from '../../context/UserContext';

export default function Login(){
    const { setToken, setUser} = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [buttonEnter, setButtonEnter] = useState('Entrar')
    const [opacityValue, setOpacityValue] = useState('1');
    const [pointerEvent, setPointerEvent] = useState('fill');

    function signIn(e){
        e.preventDefault();

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
            email,
            password
        });

        setButtonEnter(<Loader type="ThreeDots" color="#FFFFFF" height={15} width={45}/>);
        setOpacityValue('0.7');
        setPointerEvent('none');

        promise.then (response => {
            setButtonEnter('entrar');
            setOpacityValue('1');
            setPointerEvent('fill')
            setToken(response.data.token);
            setUser(response.data)
            navigate('/hoje');
        });
        promise.catch (error => {
            setButtonEnter('Entrar');
            setOpacityValue('1');
            setPointerEvent('fill')
            setEmail('');
            setPassword('');
            alert('Credenciais incorretas')
        });
    }

    return(
        <Container onSubmit={signIn}>
            <img src= {logo} alt="logo" />
            <input placeholder='email' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input placeholder='senha' type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <Button pointer = {pointerEvent} opacity = {opacityValue}>{buttonEnter}</Button>
            <Link to={'/cadastro'}> Não tem uma conta? Cadastre-se!</Link>
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

    font-size: 21px;
    line-height: 26px;
    opacity: ${props => props.opacity};

    display: flex;
    align-items: center;
    justify-content: center;

    pointer-events: ${props => props.pointer};

    color: #FFFFFF;
`;