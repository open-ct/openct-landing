import React from 'react';
import { Layout, Menu, Affix } from 'antd';
import { AlignLeftOutlined, UserOutlined, SyncOutlined, CheckOutlined } from '@ant-design/icons';

import LearningProject from './LearningProject';

import './static/sider.less';
import PublicProject from './PublicProject';
import FinishedProject from './FinishedProject';
import Bread from './Bread';

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class MenuBar extends React.PureComponent {
  state = {
    menu: 'public',
    top: 10,
  }

  handleClick = (e) => {
    let key = e.key;
    this.setState({ menu: key });
  }

  render() {
    const { menu, top } = this.state;

    return (
      <div>
        <Bread />
        <Layout>
          <Affix offsetTop={top}>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              style={{ height: '100%', backgroundColor: '#f2f4f5' }}
            >
              <Menu
                onClick={this.handleClick}
                className="menu-bar"
                defaultOpenKeys={['my-project']}
                defaultSelectedKeys={['public']}
                mode="inline"
              >
                <Menu.Item className="menu-item" key="public" icon={<AlignLeftOutlined />}>
                  公共项目
                </Menu.Item>
                <SubMenu className="menu-item" key="my-project" title="我的项目" icon={<UserOutlined />}>
                  <Menu.Item key="learning" icon={<SyncOutlined />}>
                    进行中
                  </Menu.Item>
                  <Menu.Item key="finished" icon={<CheckOutlined />}>
                    已完成
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          </Affix>

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
