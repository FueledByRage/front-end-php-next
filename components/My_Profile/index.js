import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    h3{
        color: gray;
    }
`

export const Styled_Input = styled.input`
    margin-top: 40px;
    border: none;
    background-color: transparent;
    width: 95%;
    
    height: 100px;
    margin-left: 10px;
`

export const Form_Box = styled.div`
    padding: 5px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 350px;
    form{
        width: 100%;
    }
`
export const Styled_Button = styled.button`
    font-weight: bold;
    border-radius: 20px;
    color: white;
    border: none;
    background-color: #86127f;
    padding: 10px;
    margin-top: 50px;
    width: 100px;
    :hover{
        background-color: violet;
    }
`
