import React from 'react';

function ProjectEvaluation(obj) {
  const project = obj.project;
  return (
    <div>
      <p>{project.id}</p>
    </div>
  );
}

export default ProjectEvaluation;
