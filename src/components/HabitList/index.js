import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import deleteButton from "../../assets/delete.png"
import { useContext } from "react";
import UserContext from '../../context/UserContext'

export default function HabitList({days,id,name}){
    const { token } = useContext(UserContext);
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
        <div>
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
        </div>
        <button className='delete' onClick={DeleteFunction}><img src={deleteButton} alt='delete'/></button>
    </RegisterHabits>
    )
}

const RegisterHabits = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 19px;
    display: ${props => props.createHabits};
    margin-bottom: 10px;

    display: flex;
    justify-content: space-between;
    .delete{
        background-color: transparent;
        border:none;
        display: flex;
        align-items: start;

        width: 13px;
        height: 15px;
    }
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