import React, { useEffect, useState } from 'react';
import { Collapse, Divider, Progress } from 'antd';
import { FilePptOutlined, PlayCircleOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

const { Panel } = Collapse;

const outlineList = [
  {
    title: '第一章',
    sub: [
      { title: '第一小节: 第一小节', percent: 100, pdf: true, video: false },
      { title: '第二小节', percent: 100, pdf: true, video: false },
      { title: '第三小节', percent: 100, pdf: true, video: false },
    ],
  },
  {
    title: '第二章',
    sub: [
      { title: '第一小节', percent: 90, pdf: true, video: false },
      { title: '第二小节', percent: 40, pdf: true, video: true },
    ],
  },
  {
    title: '第三章',
    sub: [
      { title: '第一小节', percent: 80, pdf: true, video: false },
      { title: '第二小节', percent: 40, pdf: true, video: false },
    ],
  },
];

function ProjectOutline(obj) {
  const [outline, setOutline] = useState([]);
  const [defaultKey, setDefaultKey] = useState([]);
  const [project, setProject] = useState(obj.project);
  useEffect(() => {
    // TODO axios get outline
    setOutline(outlineList);
    setDefaultKey(['0']);
  }, []);
  return (
    <div>
      <Collapse ghost defaultActiveKey={defaultKey}>
        {
          outline.map((item, index) => (
            <Panel
              key={index.toString()}
              header={<span style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.title}</span>}
            >
              {
                item.sub.map((subItem, subIndex) => (
                  <div key={subIndex.toString()}>
                    <Link to={`/project-learning/${project.id}`}>
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
                    </Link>
                    <div style={{ float: 'right', marginRight: '20px' }}>
                      {subItem.pdf ?
                        <FilePptOutlined
                          style={{
                            fontSize: '20px',
                          }}
                        />
                        : null
                      }
                      {subItem.video ?
                        <PlayCircleOutlined
                          style={{
                            fontSize: '20px',
                            marginLeft: '20px',
                          }}
                        />
                        : null
                      }
                    </div>
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
