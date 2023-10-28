import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home';
import Context from './pages/context';
import Interview from './pages/interview';
import Report from './pages/report';

const Pages = () => {
    return (
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/context" component={context} />
        <Route path="/interview" component={interview} />
        <Route path="/report" component={report} />
      </Switch>
    );
  };
  
  export default Pages;