import logo from "../../assets/TrackIt.png"
import styled from 'styled-components';
import { useContext } from "react";
import UserContext from '../../context/UserContext'


export default function Top(){
    const { user } = useContext(UserContext);
    return(
        <Container>
            <img className="logo" src={logo} alt="logo" />
            <img className="perfil" src={user.image} alt="perfil" />
        </Container>
    );
}


const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;

    .logo{
        width: 97px;
        height: auto;
    }
    .perfil{
        width: 51px;
        height: 51px;
        border-radius: 50%;
        object-fit: cover;
    }
`;