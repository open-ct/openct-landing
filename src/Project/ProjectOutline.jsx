import React, { useEffect, useState } from 'react';
import { Collapse, Divider, Progress } from 'antd';

import { Link } from 'react-router-dom';

const { Panel } = Collapse;

const outlineList = [
  {
    title: '第一章',
    sub: [
      {title: '第一小节', percent: 100},
      {title: '第二小节', percent: 100},
      {title: '第三小节', percent: 100},
    ],
  },
  {
    title: '第二章',
    sub: [
      {title: '第一小节', percent: 90},
      {title: '第二小节', percent: 40},
    ],
  },
  {
    title: '第三章',
    sub: [
      {title: '第一小节', percent: 80},
      {title: '第二小节', percent: 40},
    ],
  },
];

function ProjectOutline(obj) {
  const [outline, setOutline] = useState([]);
  useEffect(() => {
    const project = obj.project;
    // TODO axios get outline
    setOutline(outlineList);
  });
  return (
    <div>
      <Collapse ghost>
        {
          outline.map((item, index) => (
            <Panel key={index.toString()} header={<span style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.title}</span>} >
              {
                item.sub.map((subItem, subIndex) => (
                  <div key={subIndex.toString()}>
                    <Link to="/project/">
                      <p>
                        <Progress
                          type="circle"
                          strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                          }}
                          strokeWidth={10}
                          width={25}
                          percent={subItem.percent}
                        />
                        <span style={{ marginLeft: '10px' }}>{subItem.title}</span>
                      </p>
                    </Link>
                    <Divider />
                  </div>
                ))
              }
            </Panel>
          ))
        }
      </Collapse>
    </div>
  );
}

export default ProjectOutline;
