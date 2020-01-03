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

    border: 2px solid #333; 
    border-color: white;
    width:100%; 
    max-width: 90vw; 
    background: #111;
    box-sizing: border-box;
    padding: 10px;
    margin: 30px;
    border-radius: 20px;
    color: white;
    background: #333;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    );
`;

export const StyledScoreTable = styled.div`
    text-align: center;
    width: 80vw;
    padding: 10px 10px 10px 10px;
    margin-left: auto;
    margin-right: auto;

    th {
        padding: 15px;
        text-align: center;
        color: yellow;
    }

    tr {
        padding: 15px;
        text-align: center;
        line-height: 1.5;
    }

    .rank {
        color: orange;
    }
`;
