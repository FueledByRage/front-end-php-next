import styled from "styled-components";


export const DashboardContainer = styled.div`
    width: 80vw;
    padding: 20px;
    border-radius: 10px;
    min-height: 60vh;
    height: 80%;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const VideoItem = styled.div`
    width: 100%
    border-bottom: 2px solid silver;
    padding: 10px;
    height: 2rm;
    display: flex;
    font-weight: bold;

    flex-direction: row;
    justify-content: space-between;
`;

export const DeleteButton = styled.button`
    width: 25px;
    height: 25px;
    border: 0;
    color: white;
    background: #F33850;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
`;