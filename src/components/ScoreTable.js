import React, {useState, useEffect} from 'react';
import {useRoutes, A} from 'hookrouter';
import Routes from '../Routes';

import BackButton from './BackButton';

const DOMAIN = 'tetris-api.fyr.fyi';

const ScoreTable = () => {
    const [topScoreBoard, setTopScoreBoard] = useState([]);
    const [rank, setRank] = useState();

    const fetchTopScoresData = async () => {
        try {
            let response = await fetch(`https://${DOMAIN}/topscores`);
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
                    <td className="rank">{index + 1}</td>
                    <td>{player_name}</td>
                    <td>{score}</td>
                    <td>{convertDate(date_time)}</td>
                </tr>
            );
        });
    };

    const renderTableHeader = () => {
        let header = ['Rank', `Player's Name`, 'Score', `Date / Time`];
        return header.map((item, index) => {
            return <th key={index}>{item}</th>;
        });
    };

    const fetchRank = async () => {
        try {
            let response = await fetch(`https://${DOMAIN}/rankscores`);
            let rank = await response.json();
            rank = rank['rank'][0]['COUNT(*)'] + 1;
            setRank(rank);
            showRank(rank);
        } catch (err) {
            console.error(err);
        }
    };

    const showRank = ranking => {
        if (rank > 10) {
            return `Oops! You need to beat ${rank - 1} more records to get on the Chart...`;
        } else {
            return `Congratulations! Your ranking is ${rank}!`;
        }
    };

    useRoutes(Routes);

    useEffect(() => {
        fetchTopScoresData();
        fetchRank();
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
                <h3 id="ranking">{showRank()}</h3>
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
