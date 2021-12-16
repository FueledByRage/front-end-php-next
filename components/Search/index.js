import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10%;
`

export const Search_Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80vw;
    border-radius: 10px;
    margin-top: 200px;
    min-width: 400px;
    height: 80px;
    background-color: whitesmoke;
    box-shadow: 5px 5px 5px 5px rgba(0,0,0,0,0.2);
    padding: 10px;
`

export const Search_Input = styled.input`
    width: 100%;
    height: 60%;
`
export const Search_Result = styled.div`
    width: 80vw;
    background-color: white;   
`

export const Search_Iten = styled.div`
    padding: 5px;
    :hover{
        background-color: gray;
    }
`