import logo from "../../assets/TrackIt.png"
import styled from 'styled-components';


export default function Topo({user}){
    console.log("aqui:" + user.image);
    return(
        <Top>
            <img className="logo" src={logo} alt="logo" />
            <img className="perfil" src={user.image} alt="perfil" />
        </Top>
    );
}


const Top = styled.div`
    display: fixed;
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