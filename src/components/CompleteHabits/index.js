import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import button from "../../assets/Vector.png"
import { useContext } from "react";
import UserContext from '../../context/UserContext'
import { useNavigate } from "react-router-dom";

export default function CompleteHabits({id, name, done, currentSequence, highestSequence}){
    const { token } = useContext(UserContext);
    const [checkHabit, setCheckHabit] = useState('')
    const [ifDone, setIfDone] = useState(done)
    const [checkColor, setCheckColor] = useState("#EBEBEB")
    const [attCurrentSequence, setAttCurrentSequence] = useState(currentSequence)
    const [attHighestSequence, setAttHighestSequence] = useState(highestSequence)
    const navigate = useNavigate();
        
    if(checkHabit !== '' && ifDone === false){
    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${checkHabit}/check`,{},
        { 
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
    );
    promise.then (response => {
        console.log(response);
    });
    
    promise.catch (error => {
        console.log(error);
    });
    setCheckHabit('')
    setIfDone(true)
    setCheckColor("#8FC549")
    setAttCurrentSequence(attCurrentSequence + 1)
    setAttHighestSequence(attHighestSequence + 1)
    }
    if(checkHabit !== '' && ifDone === true){
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${checkHabit}/uncheck`,{},
        { 
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
    );
    promise.then (response => {
        console.log(response);
    });
    
    promise.catch (error => {
        console.log(error);
    });
    setCheckHabit('')
    setIfDone(false)
    setCheckColor("#EBEBEB")
    setAttCurrentSequence(attCurrentSequence - 1)
    setAttHighestSequence(attHighestSequence - 1)
    }
    
    function CheckHAbit(){
        setCheckHabit(id);
        console.log(ifDone);
        console.log(checkHabit);
        navigate('/hoje');
    }
    return(
    <HabitCard>
        <div>
            <p className='title-card'>{name}</p>
            <p className='sequence'>Sequência atual: <Spam style={(ifDone === true) ? {color:"#8FC549"}:{color:"#666666"}}>{attCurrentSequence} dias</Spam></p>
            <p className='sequence'>Seu recorde: <Spam style={(currentSequence === highestSequence) ? {color:"#8FC549"}:{color:"#666666"}}>{attHighestSequence} dias</Spam></p>
        </div>
        <Button onClick={CheckHAbit} onLoad={()=>(done === true)? setCheckColor("#8FC549"):setCheckColor("#EBEBEB")} check = {checkColor}><img src={button} alt='button'/></Button>
    </HabitCard>
    )
}

const HabitCard = styled.div`
    width: 100%;
    height: 94px;

    background: #FFFFFF;
    border-radius: 5px; 
    margin-bottom: 10px;
    padding: 13px;
    
    display: flex;
    justify-content: space-between;
    .title-card{
        font-size: 20px;
        line-height: 25px;

        color: #666666;
        margin-bottom: 7px;
    }
    .sequence{
        font-size: 13px;
        line-height: 16px;

        color: #666666;
    }
`
const Button = styled.button`
    border: none;
    border-radius: 5px;

    width: 69px;
    height: 69px;

    background-color: ${props => props.check};
`

const Spam = styled.button`
border: none;
background: none;
`