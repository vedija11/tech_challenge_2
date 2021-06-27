import './App.css';
import React from 'react';
import { Router, Route, HashRouter, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import WelcomePage from "./components/WelcomePage";
import SongsList from "./components/SongsList";

const history = createBrowserHistory();

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
            <HashRouter>
                <Switch>
                    <Route exact path="/" render={(props) => <WelcomePage  {...props} />} />
                    <Route exact path="/song" render={(props) => <SongsList  {...props} />} />
                </Switch>
            </HashRouter>
        </Router>
    </div>

  );
};

export default App;
