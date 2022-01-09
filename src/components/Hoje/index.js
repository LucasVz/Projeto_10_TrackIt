import Topo from "../Topo";
import Menu from "../Menu"
import axios from 'axios';
import { useEffect, useState } from 'react';
import CompleteHabits from "../CompleteHabits";
import dayjs from "dayjs";
import 'dayjs/locale/pt'
import styled from 'styled-components';

export default function Hoje({token, user}){
    const [habit, setHabit] = useState(null);
    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        promise.then(response => setHabit(response.data));
        promise.catch(error => console.log(error.response));
    }, [token]);

    if (habit === null) {
        return <h1>Carregando...</h1>
    }
    console.log(dayjs().year());
    console.log(dayjs().locale('pt').format('dddd, MM/YYYY'));
    console.log(habit)
    return(
        <>
        <Topo user = {user}/>
        <Container>
                <Data>{dayjs().locale('pt').format('dddd, MM/DD')}</Data>
                <p className="habit-states">Nenhum hábito concluído ainda</p>
                {habit.map( habits => (
                    <CompleteHabits {...habits} token = {token} />
                ))}
        </Container>
        <Menu />
        </>
    );
}


const Data = styled.div`
    font-size: 23px;
    color: #126BA5;
    margin-top: 28px;
    margin-bottom: 5px;
`

const Container = styled.div`
    margin: 0 18px;

    .habit-states{
        font-size: 18px;
        color: #BABABA;

        margin-bottom: 28px;
    }
`