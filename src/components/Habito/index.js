import Topo from "../Topo";
import Menu from "../Menu";
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import HabitList from "../HabitList";

export default function Habito({token, user}){
    const [createHabits, setCreatHabits] = useState("none");
    const [selectedDay, setSelectedDay] = useState ([]);
    const [habitName, setHabitName] = useState('');
    const [savedHabits, setSavedHabits] = useState(null);

    const [opacityValue, setOpacityValue] = useState('1');
    const [pointerEvent, setPointerEvent] = useState('fill');

    const [botao, setBotao] = useState('salvar')
    function selectDay(day){
        let days = Number(day.target.id);
        if (selectedDay.includes(days)) {
            const filteredDays = selectedDay.filter(batata => batata !== days);
            setSelectedDay(filteredDays);
            return;
        }
        setSelectedDay([...selectedDay, days]);
        console.log(selectedDay);
    }
    
    function saveHabit(){
        console.log(habitName);
        console.log(selectedDay);
        console.log(token);
        
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{
            name: habitName,
            days: selectedDay},
            { 
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            );
            
            promise.then (response => {
                console.log(response);
                setOpacityValue("1");
                setPointerEvent("fill");
                setBotao("salvar");
            });
            
            promise.catch (error => {
                console.log(error);
                setOpacityValue("1");
                setPointerEvent("fill");
                setBotao("salvar");
                alert("preencha todos os campos solicitados")
            });
            
            setOpacityValue("0.7")
            setPointerEvent("none")
            setBotao(<Loader type="ThreeDots" color="#FFFFFF" height={15} width={45}/>)
            setSelectedDay([])
            setHabitName("")
            setCreatHabits("none")
        }
        
        useEffect(() => {
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            promise.then(response => setSavedHabits(response.data));
            promise.catch(error => console.log(error.response));
        }, [savedHabits]);
        
        
        if (savedHabits === null) {
            return <h1>Carregando...</h1>
        }
        
        return(
            <>
            <Topo user = {user}/>
            <Container>
                <div className="adicionar-habitos">
                    <p>Meus hábitos</p>
                    <button onClick={() => (createHabits === "none") ? setCreatHabits("list-itens"): setCreatHabits("none")}>+</button>
                </div>
                <RegisterHabits createHabits = {createHabits}>
                    <Input pointer = {pointerEvent} opacity = {opacityValue} placeholder='nome do hábito' type="text" onChange={(e) => setHabitName(e.target.value)} value={habitName} />
                    <Days pointer = {pointerEvent}>
                        <Button type="button" className={(selectedDay.includes(0)) && "selected"} id="0" onClick={selectDay}>D</Button>
                        <Button type="button" className={(selectedDay.includes(1)) && "selected"} id="1" onClick={selectDay}>S</Button>
                        <Button type="button" className={(selectedDay.includes(2)) && "selected"} id="2" onClick={selectDay}>T</Button>
                        <Button type="button" className={(selectedDay.includes(3)) && "selected"} id="3" onClick={selectDay}>Q</Button>
                        <Button type="button" className={(selectedDay.includes(4)) && "selected"} id="4" onClick={selectDay}>Q</Button>
                        <Button type="button" className={(selectedDay.includes(5)) && "selected"} id="5" onClick={selectDay}>S</Button>
                        <Button type="button" className={(selectedDay.includes(6)) && "selected"} id="6" onClick={selectDay}>S</Button>
                    </Days>
                    <Buttons>
                        <button type="button" onClick={() => setCreatHabits("none")} className="cancel">Cancelar</button>
                        <ButtonToSave pointer = {pointerEvent} opacity = {opacityValue} onClick={saveHabit} type="submit">{botao}</ButtonToSave>
                    </Buttons>
                </RegisterHabits>
                {savedHabits.map( habits => (
                    <HabitList {...habits} token = {token} />
                    ))}
                <h1>{(savedHabits.length === 0) && "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"}</h1>
            </Container>
            <Menu></Menu>
        </>
    );
}


const Container = styled.div`
    padding:17px;
    .adicionar-habitos{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        margin-bottom: 20px;
        p{
            font-size: 23px;
            line-height: 29px;
            
            color: #126BA5;
        }
        button{
            border: none;
            width: 40px;
            height: 35px;
            background-color: #52B6FF;
            border-radius: 5px;
            
            font-size: 27px;
            color: #FFFFFF;
        }
    }
    `;

const RegisterHabits = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 19px;
    display: ${props => props.createHabits};
    `;

const Input = styled.input`
    opacity: ${props => props.opacity};
    pointer-events: ${props => props.pointer};
    
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    width: 100%;
    height: 45px;
    
    border-radius: 5px;
    
    font-size: 20px;
    line-height: 25px;
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

const Buttons = styled.div`
    display: flex;
    justify-content: end;
    .cancel{
        font-size: 16px;
        color: #52B6FF;
        
        border: none;
        background-color: transparent;
        
        margin-right: 15px;
    }
    `;

const ButtonToSave = styled.button`
    opacity: ${props => props.opacity};
    pointer-events: ${props => props.pointer};
    
    width: 84px;
    height: 35px;

    background: #52B6FF;
    border-radius: 5px;

    font-size: 16px;
    color: #FFFFFF;

    border: none;
`;