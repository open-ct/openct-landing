import React from 'react';

import ProjectList from './ProjectList';

class FinishedProject extends React.PureComponent {
  render() {
    return (
      <ProjectList url="project-list/finished" />
    );
  }
}

export default FinishedProject;
