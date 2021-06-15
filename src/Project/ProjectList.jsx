import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Image, Divider, Pagination } from 'antd';
import { EyeOutlined, TeamOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { LearningProjectList } from './data';
import './static/project.less';

const { Meta } = Card;


function ProjectList(obj) {
  const [learningProjectList, setLearningProjectList] = useState(LearningProjectList);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const updateProjectList = (p, size) => {
    console.log(obj.url);
    console.log(p, size);
    // TODO axios.get(obj.url) page project list
    setLearningProjectList(LearningProjectList);
    setTotal(100);
    setPage(p);
  };
  useEffect(() => {
    updateProjectList(1, 10);
    setLoading(false);
  }, []);

  return (
    <div className="project-list" >
      <Row gutter={[10, 10]}>
        {
          learningProjectList.map((item, index) => (
            <Col key={index.toString()} flex="auto">
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
      <div style={{ margin: 'auto', marginTop: '20px' }}>
        <Pagination
          hideOnSinglePage
          total={total}
          showTotal={t => `共${total}项内容`}
          current={page}
          onChange={updateProjectList}
          onShowSizeChange={updateProjectList}
        />
      </div>
      <br />
    </div>
  );
}

export default ProjectList;
