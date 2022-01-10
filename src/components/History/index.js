import Top from "../Top";
import Menu from "../Menu"
import { useContext } from "react";
import UserContext from '../../context/UserContext'
import styled from 'styled-components';

export default function History(){
    const { user } = useContext(UserContext);
    return(
        <>
            <Top user = {user}/>
                <Container>
                    <h1>Historico</h1>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </Container>
            <Menu />
        </>
    );
}

const Container = styled.div`
    padding:100px 17px;

    h1{
        font-size: 23px;
        line-height: 29px;

        color: #126BA5;
    }

    p{
        font-size: 18px;
        line-height: 22px;

        padding-top: 17px;
        color: #666666;
    }
`