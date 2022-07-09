import React, { Component } from 'react'
import logoUrl from './static/logo.png'
import SupperIcon from './component/Icon'
import { Button, Menu} from 'antd'

export default class Banner extends Component {
    state = {
        banner: {
          title: 'OpenCT',
          descript: 'An open source community for education.',
          location: 'beijing',
          url: 'https://open-ct.com/'
        }
      }
    render() {
        return (
            <div className="projects-banner-wrapper">
                <div className="projects-banner-top">
                    <div className="banner-img-wrapper">
                        <img src={logoUrl} alt="logo" width={100} height={100} />
                    </div>
                    <div className="banner-right-wrapper">
                        <div className="title">
                            <div className="text">{this.state.banner.title}</div>
                            <Button type="default" shape='round' size='large' style={{ backgroundColor: '#EBEDF0', color: 'black' }}>Unfollow</Button>
                        </div>
                        <div className="descript">{this.state.banner.descript}</div>
                        <div className="otherInfo">
                            <div className='item'>
                                <SupperIcon type="icon-location" style={{ fontSize: 20, marginRight: '8px' }}></SupperIcon>
                                <span>{this.state.banner.location}</span>
                            </div>
                            <div className='item'>
                                <SupperIcon type='icon-link' style={{ fontSize: 20, marginRight: '8px' }}></SupperIcon>
                                <a style={{ color: 'black' }}>{this.state.banner.url}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-banner-bottom">
                    <div className="projects-banner-nav">
                        <Menu mode="horizontal" defaultSelectedKeys={['mail1']} style={{ background: '#ebedf0' }}>
                            <Menu.Item key="mail1" icon={<SupperIcon type='icon-link'></SupperIcon>}>
                                Overview
                            </Menu.Item>
                            <Menu.Item key="mail2" icon={<SupperIcon type='icon-link'></SupperIcon>}>
                                Repositories
                            </Menu.Item>
                            <Menu.Item key="mail3" icon={<SupperIcon type='icon-link'></SupperIcon>}>
                                Projects
                            </Menu.Item>
                            <Menu.Item key="mail4" icon={<SupperIcon type='icon-link'></SupperIcon>}>
                                Packages
                            </Menu.Item>
                            <Menu.Item key="mail5" icon={<SupperIcon type='icon-link'></SupperIcon>}>
                                People
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }
}
