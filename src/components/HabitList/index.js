import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function HabitList({days,id,name,token}){
    const [deleteHabit, setDeleteHabit] = useState('0')
    function DeleteFunction(){
        if (window.confirm("Quer realmente deletar o hábito?")) {
            setDeleteHabit(id);
        }
    }

    useEffect(() => {
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${deleteHabit}`,
        { 
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        );
    }, [deleteHabit]);

    return(
    <RegisterHabits>
        <h1>{name}</h1>
        <Days>
            <Button type="button" className={(days.includes(0)) && "selected"} id="0">D</Button>
            <Button type="button" className={(days.includes(1)) && "selected"} id="1">S</Button>
            <Button type="button" className={(days.includes(2)) && "selected"} id="2">T</Button>
            <Button type="button" className={(days.includes(3)) && "selected"} id="3">Q</Button>
            <Button type="button" className={(days.includes(4)) && "selected"} id="4">Q</Button>
            <Button type="button" className={(days.includes(5)) && "selected"} id="5">S</Button>
            <Button type="button" className={(days.includes(6)) && "selected"} id="6">S</Button>
        </Days>
        <button onClick={DeleteFunction}>delete</button>
    </RegisterHabits>
    )
}

const RegisterHabits = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 19px;
    display: ${props => props.createHabits};
`;

const Days = styled.div`
    margin-bottom: 30px;
    pointer-events: ${props => props.pointer};
    .selected{
        background-color: #CFCFCF;
        color: #FFFFFF;
    }
`;

const Button = styled.button`
    width: 30px;
    height: 30px;

    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-size: 20px;
    color: #DBDBDB;
    
    margin:8px 4px 0 0;
`