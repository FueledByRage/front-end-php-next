import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
export const Login_Page = styled.div`
    background-color: whitesmoke;
    margin-top: 50px;
    width: 20vw;
    height: 64vh;
    max-height: 480px;
    min-width: 300px;
    padding: 10px;
    .header{
        display: flex;
        justify-content: center;
        color: gray;
    }
    .footer{
        margin-top: 5%;
        display: flex;
        justify-content: center;
        color: #86127f;
    }
    button{
        cursor: pointer;
    }
`