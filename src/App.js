import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Tetris from './components/Tetris';
import ScoreBoard from './components/ScoreBoard';

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <Tetris />
                    </div>
                </Route>
                <Redirect from="/" to="/scoreboard" />
                <Route exact path="/scoreboard">
                    <div className="App">
                        <ScoreBoard />
                    </div>
                </Route>
            </Switch>
        </div>
    </Router>
);

export default App;
