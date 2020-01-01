import React, {useState, useContext} from 'react';
import {ScoreContext} from './Tetris';
import {StyledEnterName} from './styles/StyledEnterName';
import {Redirect} from 'react-router-dom';

const PORT = 8080;

const EnterName = () => {
    console.log('EnterName');
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
        console.log('savePlayersName');
        console.log({input}, score, getDateTime);
        try {
            const nameScoreTimeToSave = {
                playersName: input,
                playersScore: score,
                dateTime: getDateTime(),
            };
            let response = await fetch(`http://localhost:${PORT}/scores`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nameScoreTimeToSave),
            });
            return await response.json();
            // console.log(result);
        } catch (err) {
            console.error(err);
        }
    };
    const handleChange = e => {
        setInput(e.target.value);
        console.log(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        savePlayersName();
        return <Redirect to="/scoreboard/" />;
    };
    return (
        <StyledEnterName>
            <form onSubmit={handleSubmit}>
                <label>Enter Player's Name:</label>
                <input name="Players Name" value={input} type="text" onChange={handleChange} />
                <input type="submit" value="OK!" />
            </form>
        </StyledEnterName>
    );
};

export default EnterName;
