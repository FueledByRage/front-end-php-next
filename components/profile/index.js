import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    color: gray;
`

export const Feed = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 40%;
    padding: 10px;
    min-width: 400px;
`
export const Header = styled.div`
    box-shadow: 5px 5px 5px 5px rgba(0,0,0,0,0.5);
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    background-color: white;
    height: 25vh;
    padding: 10px;
    
    .avatar{
        display: flex;
        flex-direction: row;
        padding: 10px;
        h2{
            margin-left: 10px;
            color: gray;
        }
    }
`

export const Post_Box = styled.div`
    width: 100%;
    border-top: 0.2rem solid gray;
    height: 10vh;
    background-color: white;
    padding: 10px;

    .footer{
        font-weight: bold;
        display: flex;
        flex-direction: row-reverse;
    }
`