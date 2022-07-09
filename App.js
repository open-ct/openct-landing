import React from 'react';
import Header from './src/Header'
import Footer from './src/Footer'
import Home from './src/Home';
import Projects from './src/About/Projects'
import {HashRouter,Switch,Route, Redirect } from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';


let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

export default class App extends React.Component {
  state = {
    isMobile,
  }
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  render() {
    return (
      <HashRouter>
        <DocumentTitle title="OpenCT">
          <div>
            <Header isMobile={this.state.isMobile} />
              <Switch>
                <Route exact={true} path='/landing' component={Home}></Route>
                <Route exact={true} path='/projects' component={Projects}></Route>
                <Redirect to='/landing'></Redirect>
              </Switch>
            <Footer />
          </div>
        </DocumentTitle>
      </HashRouter>
    )
  }
}

