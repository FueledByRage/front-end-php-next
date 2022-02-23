import styled from "styled-components";


export const Clips_Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 50px;
    width: 100vw;
    `;
    
    
export const Clip = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: whitesmoke;
    min-height: 250px;
    max-width: 200px;
    margin-left: 10px;
    margin-top: 10px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 3px 3px 15px black; 
    transition: .9s;
    :hover{
        margin-left:40px;
        transform: scale(1.2,1.2);
    }
    .video-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70%;
        video{
            min-width: 250px;
            height:100px;
        }
    }

    .body-div{
        font-size: 13px;
        color: rgb(149,149,149);
        width: 100%;
        height: 25%;
        margin-top: 10px;
        padding: 5px;
    }
    .footer{
        height: 5%;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
`;