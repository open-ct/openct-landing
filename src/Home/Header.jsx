import React from 'react';
import { Row, Col, Icon, Menu, Button, Popover,Popconfirm } from 'antd';

import { enquireScreen } from 'enquire-js';

const LOGO_URL = 'https://cdn.open-ct.com/logo/openct.png';


class Header extends React.Component {
  state = {
    menuVisible: false,
    menuMode: 'horizontal',
  };
  menuList = [{
    id:'landing',
    name:'首页',
    href:'/landing',
    isExpand:false
  },{
    id:'products',
    name:'产品与服务',
    isExpand:true
  },{
    id:'case',
    name:'案例',
    href:'/landing',
    isExpand:false
  },{
    id:'price',
    name:'价格',
    isExpand:true
  },{
    id:'cooperation',
    name:'渠道合作',
    href:'/landing',
    isExpand:false
  },{
    id:'bbs',
    name:'在线论坛',
    href:'/landing',
    isExpand:false
  },{
    id:'about',
    name:'关于我们',
    isExpand:true
  }]
  coreBusinessList = [{
    id:'openCT001',
    imgSrc:'https://www.xiaoe-tech.com/images/common/product_item_01.png',
    title:'核心业务一',
    subTitle:'这是核心业务一的小标题',
    href:'/landing'
  },{
    id:'openCT002',
    imgSrc:'https://www.xiaoe-tech.com/images/common/product_item_02.png',
    title:'核心业务二',
    subTitle:'这是核心业务二的小标题',
    href:'/landing'
  },{
    id:'openCT003',
    imgSrc:'https://www.xiaoe-tech.com/images/common/product_item_03.png',
    title:'核心业务三',
    subTitle:'这是核心业务三的小标题',
    href:'/landing'
  },{
    id:'openCT004',
    imgSrc:'https://www.xiaoe-tech.com/images/common/product_item_04.png',
    title:'核心业务四',
    subTitle:'这是核心业务四的小标题',
    href:'/landing'
  }]
  peripheralServices = [[{
    id:'openCT001',
    title:'周边服务一',
    subTitle:'这是周边服务一的小标题',
    href:'/landing'
  },{
    id:'openCT002',
    title:'周边服务二',
    subTitle:'这是周边服务二的小标题',
    href:'/landing'
  },{
    id:'openCT003',
    title:'周边服务三',
    subTitle:'这是周边服务三的小标题',
    href:'/landing'
  },{
    id:'openCT004',
    title:'周边服务四',
    subTitle:'这是周边服务四的小标题',
    href:'/landing'
  }],[{
    id:'openCT005',
    title:'周边服务五',
    subTitle:'这是周边服务五的小标题',
    href:'/landing'
  },{
    id:'openCT006',
    title:'周边服务六',
    subTitle:'这是周边服务六的小标题',
    href:'/landing'
  },{
    id:'openCT007',
    title:'周边服务七',
    subTitle:'这是周边服务七的小标题',
    href:'/landing'
  },{
    id:'openCT008',
    title:'周边服务八',
    subTitle:'这是周边服务八的小标题',
    href:'/landing'
  }]]
  priceServerList = [{
    id:'openCT001',
    href:'/landing',
    title:'知识店铺'
  },{
    id:'openCT002',
    href:'/landing',
    title:'企业培训'
  },{
    id:'openCT003',
    href:'/landing',
    title:'企微助手'
  }]
  aboutServerList = [{
    id:'openCT001',
    href:'./src/Introduce/introdduce.html',
    title:'社区介绍'
  },{
    id:'openCT002',
    href:'./src/Introduce/code.html',
    title:'项目介绍'
  },{
    id:'openCT003',
    href:'/landing',
    title:'媒体报道'
  },{
    id:'openCT004',
    href:'/landing',
    title:'更多资讯'
  },{
    id:'openCT005',
    href:'/landing',
    title:'帮助中心'
  },]
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ menuMode: b ? 'inline' : 'horizontal' });
    });
  }
  menuItemContentLoad = (menuItem)=>{
    if(menuItem.isExpand){
      switch(menuItem.id){
        case 'products':
          return (
            <div className="menuExpandItem">
              <span>{menuItem.name}</span>{}
              <Icon type="down" style={{marginLeft:'3px',fontSize:'12px'}}/>
              <div className="product-list">
                <div className="product-content">
                  <div className="product-multi">
                    <div className="product-item__title">核心业务</div>
                    {
                      this.coreBusinessList.map(item=>(
                        <a href={item.href} className="product-item__func" key={item.id}>
                          <img src={item.imgSrc} alt="业务logo" />
                          <div>
                              <div className="product-item__name">{item.title}</div>
                              <div className="product-item__tip">{item.subTitle}</div>
                          </div>
                        </a>
                      ))
                    }
                  </div>
                  <div className="product-item">
                    <div className="product-item__title">周边服务</div>
                    <div className="product-solution">
                      <div className="product-item__box">
                        {
                          this.peripheralServices[0].map(item=>(
                            <a href={item.href} className="product-item__func" key={item.id}>
                              <div className="product-item__name">{item.title}</div>
                              <div className="product-item__tip">{item.subTitle}</div>
                            </a>
                          ))
                        }
                      </div>
                      <div className="product-item__box">
                        {
                          this.peripheralServices[1].map(item=>(
                            <a href={item.href} className="product-item__func" key={item.id}>
                              <div className="product-item__name">{item.title}</div>
                              <div className="product-item__tip">{item.subTitle}</div>
                            </a>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
          break;
        case 'price':
          return (
            <div className="menuExpandItem">
              <span>{menuItem.name}</span>{}
              <Icon type="down" style={{marginLeft:'3px',fontSize:'12px'}}/>
              <div className="more-list price-list">
                {
                  this.priceServerList.map(item=>(
                    <a href={item.href} className="more-item" key={item.id}>{item.title}</a>
                  ))
                }
              </div>
            </div>
          )
          break;
        case 'about':
          return (
            <div className="menuExpandItem">
              <span>{menuItem.name}</span>{}
              <Icon type="down" style={{marginLeft:'3px',fontSize:'12px'}}/>
              <div className="more-list about-list">
                {
                  this.aboutServerList.map(item=>(
                    <a href={item.href} className="more-item" key={item.id}>{item.title}</a>
                  ))
                }
              </div>
            </div>
          )
          break;
      }
    }
    return (
      <a href={menuItem.href} key={menuItem.id} className="menuCommonItem">
        <span>{menuItem.name}</span>{}
      </a>
    )
  }
  render() {
    const { menuMode, menuVisible } = this.state;

    const menu = (
      <Menu mode={menuMode} id="nav" key="nav">
        {this.menuList.map(item=>(
          <Menu.Item key={item.id}>
            {this.menuItemContentLoad(item)}
          </Menu.Item>
        ))}
      </Menu>
    );

    return (
      <div id="header" className="header">
        <div className="header-container">
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
            <Col xxl={4} xl={3} lg={3} md={3} sm={24} xs={24}>
              <div id="logo" to="/">
                <img src={LOGO_URL} alt="logo" />
              </div>
            </Col>
            <Col xxl={17} xl={18} lg={18} md={18} sm={0} xs={0}>
              <div className="header-meta">
                {menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
              </div>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={3} sm={0} xs={0}>
                <div className="header-btn">
                  <Popconfirm
                    placement="bottom"
                    title="请选择您的登陆身份"
                    onConfirm={confirm}
                    okText="学生登陆"
                    cancelText="教师登陆"
                  >
                    <span>登陆</span>
                  </Popconfirm>
                  <Button type="primary" size="large">免费注册</Button>
                </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Header;
