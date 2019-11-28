import React from 'react';
import {StyledCell} from './styles/StyledCell';
import {TETROMINOS} from '../tetrominos';

const Cell = ({type}) => <StyledCell type={type} color={TETROMINOS[type].color} />;

// react will memorise this component and only rerenders when it changes
export default React.memo(Cell);
