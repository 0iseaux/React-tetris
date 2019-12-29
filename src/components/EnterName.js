import React, {useState, useContext} from 'react';
import {ScoreContext} from './Tetris';
import {StyledEnterName} from './styles/StyledEnterName';

const PORT = 3000;

const EnterName = () => {
    const score = useContext(ScoreContext);
    const [input, setInput] = useState('Player');

    return (
        <StyledEnterName>
            <label>Enter Player's Name:</label>
            <input
                value={input}
                onInput={e => setInput(e.target.value)}
                // onChange={e => console.log(`typed ${score} ${e.target.value}`)}
                onChange={e => async () => {
                    try {
                        let pName = e.target.value;
                        let response = await fetch(`http://localhost:${PORT}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json;charset=utf-8',
                            },
                            body: JSON.stringify(pName),
                        });
                        let result = await response.json();
                        console.log(result);
                    } catch (e) {
                        return e;
                    }
                }}
            />
        </StyledEnterName>
    );
};

export default EnterName;
