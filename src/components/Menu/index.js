import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link} from "react-router-dom";
import { useContext } from "react";
import UserContext from '../../context/UserContext'

export default function Menu(){
    const { percent } = useContext(UserContext);
    console.log(percent)
    let percentage = `${percent}`;
    return(
        <Container>
            <Link to={'/habito'}>Hábitos</Link>
            <Link to={'/hoje'} className='progressbar'>
                <CircularProgressbar
                 value={percentage} 
                 text={'Hoje'}
                 background
                 backgroundPadding={6}
                 styles={buildStyles({
                   backgroundColor: "#52B6FF",
                   textColor: "#fff",
                   pathColor: "#fff",
                   trailColor: "transparent"
                 })}
                />
            </Link>
            <Link to={'/historico'}>Historico</Link>
        </Container>
    );
}


const Container = styled.div`
    position: fixed;
    bottom: 0;


    width: 100%;
    height: 70px;
    background: #FFFFFF;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;

    a{
        font-size: 18px;
        line-height: 22px;

        color: #52B6FF;
    }
    .progressbar{
        width: 91px;
        height: 91px;
        margin-bottom: 40px;
    }
`;