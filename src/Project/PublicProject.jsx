import React from 'react';
import ProjectList from './ProjectList';
import CarouselPBL from './CarouselPBL';

class PublicProject extends React.PureComponent {
  render() {
    return (
      <div>
        <CarouselPBL />
        <ProjectList url="project-list/all" />
      </div>
    );
  }
}

export default PublicProject;
