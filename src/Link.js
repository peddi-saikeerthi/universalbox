import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const Link = () => {
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    </Router>
    </div>
  )
}

export default Link
