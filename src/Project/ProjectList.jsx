import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Image, Divider } from 'antd';
import { EyeOutlined, TeamOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { LearningProjectList } from './data';

const { Meta } = Card;


function ProjectList(obj) {
  const [learningProjectList, setLearningProjectList] = useState(LearningProjectList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(obj.url);
    // TODO axios get obj.url
    setLearningProjectList(LearningProjectList);
    setLoading(false);
  });

  return (
    <div>
      <Row gutter={[10, 10]}>
        {
          learningProjectList.map((item, index) => (
            <Col span={6} key={index.toString()}>
              <Link to={`/project-info/${item.id}`}>
              <Card
                hoverable
                loading={loading}
                bordered={false}
                className="item-card"
                cover={
                  <Image
                    alt="example"
                    src={item.image}
                    placeholder
                    preview={false}
                  />
                }
              >
                <Meta
                  title={item.title}
                  description={item.subjects}
                /><br />
                <span style={{ color: 'gray', fontSize: 'small' }}>
                  <EyeOutlined />&nbsp;
                  {item.readNum}
                </span>
                <Divider type="vertical" />
                <span style={{ color: 'gray', fontSize: 'small' }}>
                  <TeamOutlined />&nbsp;
                  {item.joinNum}
                </span>
                <span style={{ color: 'gray', fontSize: 'small', float: 'right' }}>
                  {item.createTime}
                </span>
              </Card>
              </Link>
            </Col>
          ))
        }
      </Row>

    </div>
  );
}

export default ProjectList;
