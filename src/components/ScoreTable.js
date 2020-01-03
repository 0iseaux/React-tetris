import React, {useState, useEffect} from 'react';
import {useRoutes, A} from 'hookrouter';
import Routes from '../Routes';

import BackButton from './BackButton';

const PORT = 8080;

const ScoreTable = () => {
    const [topScoreBoard, setTopScoreBoard] = useState([]);

    const fetchTopScoresData = async () => {
        try {
            let response = await fetch(`http://localhost:${PORT}/topscores`);
            let topScores = await response.json();
            setTopScoreBoard(topScores['topScores']);
        } catch (err) {
            console.error(err);
        }
    };

    const makeTwoDigits = n => {
        if (n < 10) {
            n = n.toString();
            n = '0' + n;
        }
        return n;
    };

    const convertDate = fullDateTime => {
        let date = new Date(fullDateTime);
        let yr = date.getFullYear();
        let mth = date.getMonth() + 1;
        let day = date.getDate();
        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        mth = makeTwoDigits(mth);
        hr = makeTwoDigits(hr);
        min = makeTwoDigits(min);
        sec = makeTwoDigits(sec);
        return yr + '-' + mth + '-' + day + ' / ' + hr + '-' + min + '-' + sec;
    };

    const renderTableData = () => {
        return topScoreBoard.map((topPlayer, index) => {
            const {player_name, score, date_time} = topPlayer;
            return (
                <tr key={index}>
                    <td class="rank">{index + 1}</td>
                    <td>{player_name}</td>
                    <td>{score}</td>
                    <td>{convertDate(date_time)}</td>
                </tr>
            );
        });
    };

    const renderTableHeader = () => {
        let header = ['Rank', `Player's Name`, 'Score', `Date/Time`];
        return header.map((item, index) => {
            return <th key={index}>{item}</th>;
        });
    };

    useRoutes(Routes);

    useEffect(() => {
        fetchTopScoresData();
    }, []);

    return (
        <div>
            <div>
                <h2 id="title">Top Scores</h2>
                <table id="topScoreBoard">
                    <tbody>
                        <tr>{renderTableHeader()}</tr>
                        {renderTableData()}
                    </tbody>
                </table>
            </div>
            <div>
                <br />
                <A href="/">
                    <BackButton text="Take me back!" />
                </A>
            </div>
        </div>
    );
};

export default ScoreTable;
