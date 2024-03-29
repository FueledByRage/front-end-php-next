import styled from "styled-components";

export const UserInfo = styled.div`
    display: flex;
    max-width: 100vw;
    width: 100%;
    align-items: center;
    padding: 10px 40px 10px;
    height: 20vh;
    border-bottom:2px solid;
`;

export const Username = styled.div`
    color: white;
    margin-left: 20px;
`;

export const UserAbout = styled.div`
    width: 30%;
    height: 90%;
    padding: 5px;
    border-bottom: 5px solid white;
    align-self: end;
    border-radius: 3px;
    margin-left: 55%;
`;

export const Clips_Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 50px;
    width: 100vw;
    `;

export const EmptyContainer = styled.div`
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 80vw;
    margin: auto;
    height: 70vh;
    border: 5px dotted white;
    border-radius: 10px;
`
    
export const Clip = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: whitesmoke;
    min-height: 250px;
    max-width: 250px;
    margin-left: 55px;
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
            min-width: 240px;
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