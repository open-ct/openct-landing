import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';

import Header from '../Home/Header';
import MenuBar from './MenuBar';

let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

class Project extends React.PureComponent {
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
      <DocumentTitle title="Project">
        <div style={{ height: '100vh' }}>
          <Header isMobile={this.state.isMobile} />
          <MenuBar />
        </div>
      </DocumentTitle>
    );
  }
}


export default Project;
