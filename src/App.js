import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Tetris from './components/Tetris';
import ScoreBoard from './components/ScoreBoard';
import EnterName from './components/EnterName';

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <Tetris />
                    </div>
                </Route>
                <Redirect exact from="/" to="/scoreboard/" />
                <Route exact path="/scoreboard" component={ScoreBoard} />
            </Switch>
        </div>
    </Router>
);

export default App;
