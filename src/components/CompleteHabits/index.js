import styled from 'styled-components';
// import axios from 'axios';
// import { useState, useEffect } from 'react';


export default function CompleteHabits({id, name, done, currentSequence, highestSequence}){

    return(
    <HabitCard>
        <div>
            <p className='title-card'>{name}</p>
            <p className='sequence'>Sequência atual: {currentSequence} dias</p>
            <p className='sequence'>Seu recorde: {highestSequence} dias</p>
        </div>
        <button>teste</button>
    </HabitCard>
    )
}

const HabitCard = styled.div`
    width: 340px;
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