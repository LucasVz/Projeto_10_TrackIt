import styled from 'styled-components';

const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 68px 36px 0 36px;

    img{
        margin-bottom: 20px;
    }

    a{
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
`;

export default Container;
