import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectInfo from './src/Project/ProjectInfo';
import Home from './src/Home';
import Project from './src/Project';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/landing" component={Home} />
        <Route path="/project" component={Project} />
        <Route path="/project-info/:id" component={ProjectInfo} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
