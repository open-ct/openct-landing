import React from 'react';
import ProjectList from './ProjectList';

class PublicProject extends React.PureComponent {
  render() {
    return (
      <ProjectList url="project-list/all" />
    );
  }
}

export default PublicProject;
