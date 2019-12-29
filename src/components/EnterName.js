import React, {useState, useContext} from 'react';
import {ScoreContext} from './Tetris';
import {StyledEnterName} from './styles/StyledEnterName';

const PORT = 3000;

const EnterName = () => {
    const score = useContext(ScoreContext);
    const [input, setInput] = useState('Player');
    const makeTwoDigits = n => {
        if (n < 10) {
            n = n.toString();
            n = '0' + n;
        }
        return n;
    };
    const getDateTime = () => {
        let tsNow = Date.now();
        let today = new Date(tsNow);
        let yr = today.getFullYear();
        let mth = today.getMonth() + 1;
        let day = today.getDate();
        let hr = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();
        hr = makeTwoDigits(hr);
        min = makeTwoDigits(min);
        sec = makeTwoDigits(sec);
        let dateTime = `${yr}-${mth}-${day} ${hr}:${min}:${sec}`;
        console.log(dateTime);
        return dateTime;
    };
    const savePlayersName = async () => {
        console.log({input}, score, getDateTime);
        try {
            const nameScoreTime = {
                playersName: {input},
                playersScore: score,
                dateTime: getDateTime(),
            };
            let response = await fetch(`http://localhost:${PORT}/scores`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(nameScoreTime),
            });
            let result = await response.json();
            console.log(result);
            // console.log(result);
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <StyledEnterName>
            <form onSubmit={savePlayersName}>
                <label>Enter Player's Name:</label>
                <input
                    value={input}
                    type="text"
                    onChange={e => setInput(e.target.value)}
                    name="Players Name"
                />
                <input type="submit" value="OK!" />
            </form>
        </StyledEnterName>
    );
};

export default EnterName;
