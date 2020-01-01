import styled from 'styled-components';
import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;
`;

export const StyledScoreBoard = styled.div`

    display: grid;
    grid-template-rows: repeat(11, 1fr);
    grid-template-columns: 3fr 3fr 4fr ; 
    grid-gap: 1px; 
    border: 2px solid #333; 
    border-color: white;
    width:100%; 
    max-width: 80vw; 
    background: #111;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 20px;
    color: white;
    background: #333;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    fontsize: 1rem;
    );
`;
