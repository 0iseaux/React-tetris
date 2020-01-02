import React from 'react';

import Tetris from './components/Tetris';
import ScoreBoard from './components/ScoreBoard';

const Routes = {
    '/': () => (
        <div className="App">
            <Tetris />
        </div>
    ),
    '/scoreboard': () => <ScoreBoard />,
};

export default Routes;
