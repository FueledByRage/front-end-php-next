import styled from "styled-components";



export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const DragZone = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;
    padding: 5px;
    border: 1px solid rgb(0,0,0,.3);
    background-color: white;
    border-radius: 8px;
    div{
        display: flex;
        justify-content: center;
        align-itens: center;
        width: 300px;
        height: 50px;
        background-color: rgb(10,12,200,1);
    }
`;

export const FeedbackMessage = styled.span`
    color: ${props => props.color}
`;
export const StyledForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70vw;
    min-width: 400px;
    height: 420px;
    padding: 5px;
    background-color: whitesmoke; 
    button{
        align-self: end;
        max-width:250px;
    }

    input{
        margin-left: 23px;
        align-self: start;
        margin-top: 10px;
    }

    textarea{
        padding: 5px;
        width: 95%;
        margin-top: 20px;
    }

`;