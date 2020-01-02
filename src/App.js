import React from 'react';

// import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {useRoutes} from 'hookrouter';
import Routes from './Routes';

const App = () => useRoutes(Routes);

export default App;
