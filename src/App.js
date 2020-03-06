import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { Alertt } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { GithubState } from './context/github/GithubState';


function App() {
  return (
    <GithubState>
      <AlertState>
        <HashRouter basename='/'>
          <Navbar />
          <Alertt alert={{ text: "Test alert" }} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile/:name" component={Profile} />
          </Switch>
        </HashRouter>
      </AlertState>
    </GithubState>
  )
}

export default App;
