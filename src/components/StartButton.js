import React from 'react';
import {StyledStartButton} from './styles/StyledStartButton';

const StartButton = ({callback, text}) => (
    <StyledStartButton onClick={callback}>{text}</StyledStartButton>
);

/* const StartButton = {
    callbackOnClick: `<StyledStartButton onClick={callback}></StyledStartButton>`,
    text: 'Start Game';
*/

export default StartButton;
