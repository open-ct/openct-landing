import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import LearningProject from './LearningProject';

import './static/sider.less';
import PublicProject from './PublicProject';
import FinishedProject from './FinishedProject';

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class MenuBar extends React.PureComponent {
  state = {
    menu: 'public',
    locationList: ['项目学习', '公共项目'],
  }

  handleClick = (e) => {
    let key = e.key;
    this.setState({ menu: key });

  }

  render() {
    const { menu, locationList } = this.state;

    return (
      <div>
        <Breadcrumb className="bread-crumb" separator=">">
          {
            locationList.map((item, index) => {
              return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
            })
          }
        </Breadcrumb>

        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
          >
            <Menu
              onClick={this.handleClick}
              className="menu-bar"
              defaultOpenKeys={['my-project']}
              defaultSelectedKeys={['public']}
              mode="inline"
            >
              <Menu.Item className="menu-item" key="public">
                公共项目
              </Menu.Item>
              <SubMenu className="menu-item" key="my-project" title="我的项目">
                <Menu.Item key="learning">
                  进行中
                </Menu.Item>
                <Menu.Item key="finished">
                  已完成
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout >
            <Content className="project-content">
              { menu === 'public' ? <PublicProject /> : null }
              { menu === 'learning' ? <LearningProject /> : null }
              { menu === 'finished' ? <FinishedProject /> : null }
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default MenuBar;
