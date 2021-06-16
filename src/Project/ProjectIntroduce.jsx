import React, { useEffect, useState } from 'react';
import { UnorderedListOutlined, RiseOutlined } from '@ant-design/icons';

function ProjectIntroduce(obj) {
  const [project, setProject] = useState({});
  useEffect(() => {
    setProject(obj.project);
  }, []);
  return (
    <div>
      <p>学科：{project.subjects}</p>
      <p>技能：{project.skills}</p><br />
      <h2><UnorderedListOutlined />&nbsp;&nbsp;项目简介</h2>
      <p>{project.introduce}</p><br />
      <h2><RiseOutlined />&nbsp;&nbsp;项目目标</h2>
      <p>{project.introduce}</p><br />
    </div>
  );
}

export default ProjectIntroduce;
