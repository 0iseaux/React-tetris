import React, {useState, useEffect} from 'react';

const PORT = 8080;

const ScoreTable = () => {
    const [topScoreBoard, setTopScoreBoard] = useState([]);

    const fetchTopScores = async () => {
        let topPlayers = [];
        try {
            let response = await fetch(`http://localhost:${PORT}/topscores`);
            let topScores = await response.json();
            console.log('topScores', topScores);
            setTopScoreBoard(topScores);
            console.log(topScores);
            for (const topScore of topScores) {
                // not iterable
                const topPlayer = [
                    topScore['player_name'],
                    topScore['score'],
                    topScore['date_time'],
                ];
                topPlayers.push(topPlayer);
            }

            return () => {
                console.log(topPlayers);
                {
                    /*topPlayers.map((topPlayer, index) => {
                    const {name, score, dateTime} = topPlayer;
                    return (
                        <tr key={dateTime}>
                            <td>{name}</td>
                            <td>{score}</td>
                            <td>{dateTime}</td>
                        </tr>
                    );
                });*/
                }
            };
        } catch (err) {
            console.error(err);
        }
    };
    /*
    const renderTableData = () => {
        return players.map((player, index) => {
            const {id, name, score, date} = player;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{score}</td>
                    <td>{date}</td>
                </tr>
            );
        });
    };

    const renderTableHeader = () => {
        let header = Object.keys(players[0]);
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>;
        });
    };
*/
    useEffect(() => {
        console.log('useEffect fired!');
        console.log(topScoreBoard);

        fetchTopScores();
    }, [topScoreBoard]);

    return (
        <div>
            <h1 id="title">Top Scores (under construction)</h1>
            <table id="students">
                <tbody>
                    {/*<tr>{renderTableHeader()}</tr>
                    {renderTableData()}*/}
                </tbody>
            </table>
        </div>
    );
};

export default ScoreTable;

///

/*
        try {
            let response = await fetch(`http://localhost:${PORT}/topscores`);
            let topScores = await response.json();
            console.log(topScores);
            setTable({topScores}.data);

            return () => {
                topScores.map((topPlayer, index) => {
                    const {name, score, dateTime} = topPlayer;
                    return (
                        <tr key={dateTime}>
                            <td>{name}</td>
                            <td>{score}</td>
                            <td>{dateTime}</td>
                        </tr>
                    );
                });
            };
        } catch (err) {
            console.error(err);
        }*/
