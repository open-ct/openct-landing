import React from 'react';

import { Row, Col, Icon, Menu, Button, Popover } from 'antd';

import { enquireScreen } from 'enquire-js';

const LOGO_URL = 'https://cdn.open-ct.com/logo/openct.png';

class Header extends React.Component {
  state = {
    menuVisible: false,
    menuMode: 'horizontal',
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ menuMode: b ? 'inline' : 'horizontal' });
    });
  }

  render() {
    const { menuMode, menuVisible } = this.state;

    const menu = (
      <Menu mode={menuMode} id="nav" key="nav">
        <Menu.Item key="landing">
          <a href="#/landing">
            首页
          </a>
        </Menu.Item>
        <Menu.Item key="project">
          <a href="#/project">
            项目学习
          </a>
        </Menu.Item>
        <Menu.Item key="ticket">
          <a href="#/ticket-login-card">
            学生登录
          </a>
        </Menu.Item>
        <Menu.Item key="login">
          <a href="#/login">
            教师登录
          </a>
        </Menu.Item>
        <Menu.Item key="register">
          <a href="#/register">
            用户注册
          </a>
        </Menu.Item>
        <Menu.Item key="bbs">
          <a href="https://bbs.open-ct.com">
            在线论坛
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div id="header" className="header">
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
            <div id="logo" to="/">
              <img src={LOGO_URL} alt="logo" />
            </div>
          </Col>
          <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
            <div className="header-meta">
              {/*<div id="preview">*/}
              {/*  <a*/}
              {/*    id="preview-button"*/}
              {/*    target="_blank"*/}
              {/*    href="/register"*/}
              {/*    rel="noopener noreferrer"*/}
              {/*  >*/}
              {/*    <Button icon="eye-o">*/}
              {/*      注册*/}
              {/*    </Button>*/}
              {/*  </a>*/}
              {/*</div>*/}
              {menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
