import React, { useEffect, useState } from 'react';
import QueueAnim from 'rc-queue-anim';
import { Card, Col, Divider, Image, Pagination, Row, Input } from 'antd';
import { EyeOutlined, TeamOutlined, ZoomInOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { LearningProjectList } from './data';
import './static/project.less';

const { Meta } = Card;
const { Search } = Input;

function ProjectList(obj) {
  const [learningProjectList, setLearningProjectList] = useState(LearningProjectList);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const updateProjectList = (p, size) => {
    console.log(obj.url, p, size);
    // TODO axios.get(obj.url) page project list
    setLearningProjectList(LearningProjectList);
    setTotal(100);
    setPage(p);
  };
  useEffect(() => {
    updateProjectList(1, 10);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  const onSearch = (value) => {

  };
  return (
    <QueueAnim className="queue-simple">
      <Card style={{ backgroundColor: '#f2f4f5' }}>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Search
              size="large"
              placeholder="搜索"
              onSearch={onSearch}
              style={{
                marginLeft: '20px',
                marginRight: '20px',
              }}
            />
          </Col>
          <Col span={2}></Col>
        </Row>
      </Card>

      <div className="project-list" key="1">
        <Row gutter={[10, 10]}>
          {
            learningProjectList.map((item, index) => (
              <Col key={index.toString()} flex="auto" style={{ maxWidth: '300px' }}>
                <Link to={`/project-info/${item.id}`}>
                  <Card
                    hoverable
                    bordered={false}
                    className="item-card"
                    cover={
                      <Image
                        alt="example"
                        src={item.image}
                        preview={false}
                      />
                    }
                  >
                    <Meta
                      title={item.title}
                      description={item.subjects}
                    /><br />
                    <span
                      style={{
                        color: 'gray',
                        fontSize: 'small',
                      }}
                    >
                      <EyeOutlined />&nbsp;
                      {item.readNum}
                    </span>
                    <Divider type="vertical" />
                    <span
                      style={{
                        color: 'gray',
                        fontSize: 'small',
                      }}
                    >
                      <TeamOutlined />&nbsp;
                      {item.joinNum}
                    </span>
                    <span
                      style={{
                        color: 'gray',
                        fontSize: 'small',
                        float: 'right',
                      }}
                    >
                      {item.createTime}
                    </span>
                  </Card>
                </Link>
              </Col>
            ))
          }
        </Row>
        <div
          style={{
            margin: 'auto',
            marginTop: '20px',
          }}
        >
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
    </QueueAnim>
  );
}

export default ProjectList;
