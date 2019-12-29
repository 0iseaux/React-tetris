import React from 'react';
import {StyledScoreBoard} from './styles/StyledScoreBoard';
import {stage} from './Stage';

import Cell from './Cell';

const ScoreBoard = ({scoreBoard}) => (
    <StyledScoreBoard width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledScoreBoard>
);

export default ScoreBoard;
