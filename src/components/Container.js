import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 68px 36px 0 36px;

    img{
        margin-bottom: 20px;
    }

    a{
        font-family: Lexend Deca;
        font-size: 14px;
        line-height: 17px;
        text-decoration: underline;

        margin-top: 25px;

        color: #52B6FF;
    }

    input{
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;

        width: 303px;
        height: 45px;
        margin-bottom: 6px;
    }

    button{
        border: none;
        background: #52B6FF;
        border-radius: 4.63636px;
        width: 303px;
        height: 45px;

        margin-top: 6px;

        font-family: Lexend Deca;
        font-size: 21px;
        line-height: 26px;

        color: #FFFFFF;
    }
`;

export default Container;