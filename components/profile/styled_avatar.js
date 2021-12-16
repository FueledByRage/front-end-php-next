import styled from "styled-components";

export const Styled_Avatar = styled.div`
    width: 60px;
    height: 60px;
    min-height: 60px;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    border-radius: 100px;
    background-size: cover; 
    background-position: 50% 50%;
`