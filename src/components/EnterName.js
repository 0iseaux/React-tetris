import React, {useState, useContext, useEffect, useRef} from 'react';
import {ScoreContext} from './Tetris';
import ScoreBoard from './ScoreBoard';
import ScoreTable from './ScoreTable';

import {navigate} from 'hookrouter';

import {StyledEnterName} from './styles/StyledEnterName';
// import {Redirect, Link} from 'react-router-dom';

const PORT = 8080;
const DOMAIN = 'tetris.fyr.fyi';

const EnterName = () => {
    const score = useContext(ScoreContext);
    const [input, setInput] = useState('Player');
    const [save, setSave] = useState(false);

    const refPreventFirstFire = useRef(true);

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
        try {
            const nameScoreTimeToSave = {
                playersName: input,
                playersScore: score,
                dateTime: getDateTime(),
            };
            let response = await fetch(`https://${DOMAIN}/scores`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nameScoreTimeToSave),
            });
            return await response.json();
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        savePlayersName();
        setSave(true);
        return () => {
            return ScoreTable();
        };
    };

    useEffect(() => {
        if (refPreventFirstFire.current) {
            refPreventFirstFire.current = false;
            return;
        }
        if (save) navigate('/scoreboard');
    }, [save]);

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
