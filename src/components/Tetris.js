import React, {useState} from 'react';
import {createStage, checkCollision} from '../gameHelpers';

// Styled Components
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';

//Custom Hooks
import {useInterval} from '../hooks/useInterval';
import {usePlayer} from '../hooks/usePlayer';
import {useStage} from '../hooks/useStage';
import {useGameStatus} from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
// import ClickContext from './ClickContext';

/* const Context = () => {
    return <ClickContext.Provide></ClickContext.Provide>;
}; */

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [startPauseResume, setStartPauseResume] = useState('Start Game');

    // const [startPause, setStartPause] = useState('Start Game');

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    const movePlayer = dir => {
        if (!checkCollision(player, stage, {x: dir, y: 0})) {
            updatePlayerPos({x: dir, y: 0});
        }
    };

    const changeButton = () => {
        if ({startPauseResume}.startPauseResume === 'Start Game') {
            setStartPauseResume('Pause');
            console.log({startPauseResume});
            startGame();
        } else if ({startPauseResume}.startPauseResume === 'Pause') {
            setStartPauseResume('Resume');
            console.log({startPauseResume});
            pauseGame();
            //for testing
        }
        /*
        if ({click} % 2 !== 0) {
            //WHY DIFFERENT FROM LINE ABOVE???
            /* 
            setClick(prev => prev + 1);
            setStartPauseResume('Pause');
            console.log('STARTED');
            console.log({startPauseResume});
            */
        // startGame();
        // } else {
        /*
            setClick(prev => prev + 1);
            setStartPauseResume('Resume');
            console.log('PAUSED');
            console.log({startPauseResume});
            */
        // pauseGame();
        //*/
    };

    const startGame = () => {
        //  if ({click} % 2 !== 0) {
        // setClick(prev => prev + 1);
        console.log('STARTED');
        console.log('TO PAUSE');
        if ({startPauseResume} !== 'Pause') {
            setStartPauseResume('Pause');
        }
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    };

    const pauseGame = () => {
        // setClick(prev => prev + 1);
        console.log('PAUSED');
        if ({startPauseResume} === 'Pause') {
            setStartPauseResume('Resume');
            console.log('TO PAUSE');
            drop();
        } else if ({startPauseResume} === 'Resume') {
            setStartPauseResume('Pause');
            console.log('TO RESUME');
            setDropTime(null);
        }
    };

    const drop = () => {
        // increase level when player has cleared e.g. 10 rows
        if (rows > level + 1 * 10) {
            setLevel(prev => prev + 1);
            // increase speed when level increases (random formula)
            setDropTime(1000 / (level + 1) + 200);
        }
        if (!checkCollision(player, stage, {x: 0, y: 1})) {
            updatePlayerPos({x: 0, y: 1, collided: false});
        } else {
            //Game Over
            if (player.pos.y < 1) {
                console.log('GAME OVER!!!!!');
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({x: 0, y: 0, collided: true});
        }
    };

    const keyUp = ({keyCode}) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    };

    const dropPlayer = () => {
        setDropTime(null);
        drop();
    };

    const move = ({keyCode}) => {
        if (!gameOver) {
            // LEFT
            if (keyCode === 37) {
                movePlayer(-1);
                // RIGHT
            } else if (keyCode === 39) {
                movePlayer(1);
                // DOWN
            } else if (keyCode === 40) {
                dropPlayer();
                // UP
            } else if (keyCode === 38) {
                playerRotate(stage, 1);
            }
        }
    };

    useInterval(() => {
        drop();
    }, dropTime);

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
            <StyledTetris>
                <Stage stage={stage} />
                console.log(createStage())
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over!!! :D" />
                    ) : (
                        <div>
                            <Display text={`Score: ${score}`} />
                            <Display text={`Rows: ${rows}`} />
                            <Display text={`Level: ${level}`} />
                        </div>
                    )}
                    <StartButton callback={changeButton} text={startPauseResume} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;
