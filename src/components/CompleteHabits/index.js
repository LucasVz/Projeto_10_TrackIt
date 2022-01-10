import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import button from "../../assets/Vector.png"
import { useContext } from "react";
import UserContext from '../../context/UserContext'


export default function CompleteHabits({setAtivar, id, name, done, currentSequence, highestSequence}){
    const { token, setPercent } = useContext(UserContext);
    const [checkHabit, setCheckHabit] = useState('')
    const [ifDone, setIfDone] = useState(done)
    const [checkColor, setCheckColor] = useState("#EBEBEB")
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
    setAtivar("ativar");
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
    setAtivar("atualiza");
    }
    
    function CheckHAbit(){
        setCheckHabit(id);
        console.log(ifDone);
        console.log(checkHabit);
        setAtivar("ativa");
    }
    return(
    <HabitCard>
        <div>
            <p className='title-card'>{name}</p>
            <p className='sequence'>Sequência atual: <Spam style={(ifDone === true) ? {color:"#8FC549"}:{color:"#666666"}}>{currentSequence} dias</Spam></p>
            <p className='sequence'>Seu recorde: <Spam style={(currentSequence === highestSequence) ? {color:"#8FC549"}:{color:"#666666"}}>{highestSequence} dias</Spam></p>
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