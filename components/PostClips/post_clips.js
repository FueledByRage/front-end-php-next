import styled from "styled-components";



export const Container = styled.div`
    flex-direction: column;
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
    width: 35vw;
    min-width: 400px;
    height: 60vh;
    padding: 5px;
    background-color: whitesmoke; 
    button{
        align-self: end;
        max-width:250px;
    }

    .title, textarea{
        width: 95%;
        padding: 10px;
        border-radius: 5px;
        border: none;
        border-bottom: 3px solid purple;
    }

    .file::-webkit-file-upload-button {
        visibility: hidden;
    }

    .file::before {
        content: 'Select some files';
        display: inline-block;
        background: linear-gradient(top, #f9f9f9, #e3e3e3);
        border: 1px solid #999;
        border-radius: 3px;
        padding: 5px 8px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        text-shadow: 1px 1px #fff;
        font-weight: 700;
        font-size: 10pt;
      }
      .file:hover::before {
        border-color: black;
      }
      .file:active::before {
        background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
      }

    input{
        margin-left: 2.5%;
        align-self: start;
        margin-top: 10px;
    }

    textarea{
        margin-top: 20px;
    }

`;