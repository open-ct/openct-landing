import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import { Card, Divider, Image, Row, Col, Button, Menu } from 'antd';
import QueueAnim from 'rc-queue-anim';
import localStorage from 'localStorage';


import Header from '../Home/Header';
import ProjectIntroduce from './ProjectIntroduce';
import ProjectOutline from './ProjectOutline';
import ProjectEvaluation from './ProjectEvaluation';
import ProjectComment from './ProjectComment';
import Bread from './Bread';


let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

class ProjectInfo extends React.PureComponent {
  constructor(props) {
    super(props);
    const pid = this.props.match.params.id;
    // TODO axios get project info
    const projectInfo = {
      id: pid,
      image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      introduce: '课程以揭秘《神奇动物在哪里》电影中的各种动物形象原型为探究线索展开学习，引导学生了解大自然中的动物及动物有关的一些文化。课程学习目标：探究学习各类动物的共同特征、动物的护身术、濒危动物 （灵感来源：https://baijiahao.baidu.com/s?id=1617460656617124308&wfr=spider&for=pc图片、视频等资源素材均来自网络，如有侵权，可联系平台进行删除）',
      title: '“神奇动物在哪里” 项目式学习,',
      teacher: 'xx老师',
      subjects: '科学 其它',
      skills: '学习与创新，生活与职业技能',
      createTime: '2021-06-06',
      readNum: 10,
      joinNum: 5,
      learning: true,
    };
    this.state = {
      project: projectInfo,
      menu: 'project-introduce',
      type: localStorage.getItem('type'),
      isMobile,
    };
  }
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  handleClick = (e) => {
    this.setState({
      menu: e.key,
    });
  }
  render() {
    const { project, menu, type } = this.state;
    return (
      <DocumentTitle title="Project">
        <div style={{ backgroundColor: '#f2f4f5' }}>
          <Header isMobile={this.state.isMobile} />
          <Bread />
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              paddingRight: '20px',
              paddingLeft: '20px',
              paddingBottom: '20px',
            }}
          >
            <div
              style={{
                margin: 'auto',
                width: '100%',
                maxWidth: '1200px',
                minHeight: '100vh',
              }}
            >
              <QueueAnim >
                <div key="1">
                  <Card hoverable>
                    <Row>
                      <Col span={6}>
                        <Image
                          alt="example"
                          src={project.image}
                          placeholder
                          preview={false}
                        />
                      </Col>
                      <Col span={1}>&nbsp;</Col>
                      <Col flex="auto">
                        <p style={{ fontSize: '20px' }}>{project.title}</p>
                        <p style={{
                            fontSize: '13px',
                            color: 'gray',
                          }}
                        >发布时间：{project.createTime}
                        </p>
                        <div>
                          <span>{project.readNum}&nbsp;人看过</span>
                          <Divider type="vertical" />
                          <span>{project.readNum}&nbsp;人加入学习</span>
                          <Divider type="vertical" />
                          <span>授课教师：{project.teacher}</span>
                        </div>
                        <br />
                        {
                          type === 'student' ?
                            <Button
                              type="primary"
                              shape="round"
                              size="large"
                              style={{ float: 'right' }}
                            >
                              {project.learning === true ? '继续学习' : '加入学习'}
                            </Button> :
                            <div>
                              <Button>
                                学生管理
                              </Button>
                              <Button type="warning">
                                结束项目
                              </Button>
                            </div>
                        }
                      </Col>
                    </Row>
                  </Card>
                </div>
                <div key="2">
                  <Menu
                    onClick={this.handleClick}
                    selectedKeys={menu}
                    mode="horizontal"
                    style={{ marginTop: '20px' }}
                  >
                    <Menu.Item key="project-introduce">项目信息</Menu.Item>
                    <Menu.Item key="project-outline">项目大纲</Menu.Item>
                    <Menu.Item key="project-comment">评论区</Menu.Item>
                    <Menu.Item key="project-evaluation">评价方案</Menu.Item>
                  </Menu>
                  <div style={{
                      backgroundColor: 'white',
                      padding: '20px',
                    }}
                  >
                    {menu === 'project-introduce' ? <ProjectIntroduce project={project} /> : null}
                    {menu === 'project-outline' ? <ProjectOutline project={project} /> : null}
                    {menu === 'project-comment' ? <ProjectComment project={project} /> : null}
                    {menu === 'project-evaluation' ? <ProjectEvaluation project={project} /> : null}
                  </div>
                </div>
              </QueueAnim>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default ProjectInfo;
