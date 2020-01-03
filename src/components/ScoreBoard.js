import React from 'react';
import {StyledScoreBoard} from './styles/StyledScoreBoard';
import {StyledScoreTable} from './styles/StyledScoreBoard';
import {StyledTetrisWrapper} from './styles/StyledTetris';
import ScoreTable from './ScoreTable';

const ScoreBoard = ({scoreBoard}) => (
    <StyledTetrisWrapper>
        <StyledScoreBoard>
            <StyledScoreTable>
                <ScoreTable />
            </StyledScoreTable>
        </StyledScoreBoard>
    </StyledTetrisWrapper>
);

export default ScoreBoard;
