import React, { Component } from 'react'
import SupperIcon from './component/Icon'
import { Input, Select } from 'antd'

export default class Repo extends Component {
    state = {
        repoDatas: [
            {
                iconType: 'icon-repo-clone',
                repoName: 'openscore',
                attr: 'Public',
                info: '阅卷系统',
                updatedTime: 'Updated 11 days ago',
                bottom: [
                    {
                        keyName: 'icon-yuan',
                        valueName: 'JavaScript'
                    },
                    {
                        keyName: 'icon-star',
                        valueName: '0'
                    },
                    {
                        keyName: 'icon-law',
                        valueName: 'Apache-2.0'
                    },
                    {
                        keyName: 'icon-repo-forked',
                        valueName: '3'
                    },
                    {
                        keyName: 'icon-issue-opened',
                        valueName: '1'
                    },
                    {
                        keyName: 'icon-git-merge',
                        valueName: '3'
                    }
                ]
            },
            {
                iconType: 'icon-repo-clone',
                repoName: 'openct-landing',
                attr: 'Public',
                info: '官网首页',
                updatedTime: 'Updated 12 days ago',
                bottom: [
                    {
                        keyName: 'icon-yuan',
                        valueName: 'JavaScript'
                    },
                    {
                        keyName: 'icon-star',
                        valueName: '4'
                    },
                    {
                        keyName: 'icon-repo-forked',
                        valueName: '7'
                    },
                    {
                        keyName: 'icon-issue-opened',
                        valueName: '3'
                    }
                ]
            },
            {
                iconType: 'icon-repo-clone',
                repoName: 'openda1',
                attr: 'Public',
                info: 'Data analysis warehouse.',
                updatedTime: 'Updated on 14 Apr',
                bottom: [
                    {
                        keyName: 'icon-yuan',
                        valueName: 'HTML'
                    },
                    {
                        keyName: 'icon-star',
                        valueName: '0'
                    },
                    {
                        keyName: 'icon-law',
                        valueName: 'Apache-2.0'
                    },
                    {
                        keyName: 'icon-repo-forked',
                        valueName: '2'
                    },
                    {
                        keyName: 'icon-issue-opened',
                        valueName: '2'
                    },
                    {
                        keyName: 'icon-git-merge',
                        valueName: '1'
                    }
                ]
            },
            {
                iconType: 'icon-repo-clone',
                repoName: 'OpenItem',
                attr: 'Public',
                info: '命题与题库系统',
                updatedTime: 'Updated on 7 Oct 2021',
                bottom: [
                    {
                        keyName: 'icon-star',
                        valueName: '23'
                    },
                    {
                        keyName: 'icon-law',
                        valueName: 'Apache-2.0'
                    },
                    {
                        keyName: 'icon-repo-forked',
                        valueName: '2'
                    },
                    {
                        keyName: 'icon-issue-opened',
                        valueName: '0'
                    },
                    {
                        keyName: 'icon-git-merge',
                        valueName: '9'
                    }
                ]
            },
            {
                iconType: 'icon-repo-clone',
                repoName: 'chart-tool',
                attr: 'Public',
                info: '图表系统',
                updatedTime: 'Updated on 30 Sep 2021',
                bottom: [
                    {
                        keyName: 'icon-yuan',
                        valueName: 'JavaScript'
                    },
                    {
                        keyName: 'icon-star',
                        valueName: '0'
                    },
                    {
                        keyName: 'icon-law',
                        valueName: 'MIT'
                    },
                    {
                        keyName: 'icon-repo-forked',
                        valueName: '2'
                    },
                    {
                        keyName: 'icon-issue-opened',
                        valueName: '0'
                    },
                    {
                        keyName: 'icon-git-merge',
                        valueName: '9'
                    }
                ]
            },
            {
                iconType: 'icon-repo-clone',
                repoName: 'openda3',
                attr: 'Public',
                info: 'Data analysis warehouse.',
                updatedTime: 'Updated on 29 Sep 2021',
                bottom: [
                    {
                        keyName: 'icon-star',
                        valueName: '0'
                    },
                    {
                        keyName: 'icon-law',
                        valueName: 'Apache-2.0'
                    },
                    {
                        keyName: 'icon-repo-forked',
                        valueName: '1'
                    },
                    {
                        keyName: 'icon-issue-opened',
                        valueName: '0'
                    },
                    {
                        keyName: 'icon-git-merge',
                        valueName: '7'
                    }
                ]
            },
            {
                iconType: 'icon-repo-clone',
                repoName: 'OpenPBL',
                attr: 'Public',
                info: '项目式学习',
                updatedTime: 'Updated on 26 Sep 2021',
                bottom: [
                    {
                        keyName: 'icon-yuan',
                        valueName: 'JavaScript'
                    },
                    {
                        keyName: 'icon-star',
                        valueName: '2'
                    },
                    {
                        keyName: 'icon-law',
                        valueName: 'Apache-2.0'
                    },
                    {
                        keyName: 'icon-repo-forked',
                        valueName: '1'
                    },
                    {
                        keyName: 'icon-issue-opened',
                        valueName: '1'
                    },
                    {
                        keyName: 'icon-git-merge',
                        valueName: '7'
                    }
                ]
            },
            {
                iconType: 'icon-repo-clone',
                repoName: 'OpenArt2',
                attr: 'Public',
                updatedTime: 'Updated on 22 Sep 2021',
                bottom: [
                    {
                        keyName: 'icon-star',
                        valueName: '0'
                    },
                    {
                        keyName: 'icon-law',
                        valueName: 'Apache-2.0'
                    },
                    {
                        keyName: 'icon-repo-forked',
                        valueName: '1'
                    },
                    {
                        keyName: 'icon-issue-opened',
                        valueName: '0'
                    },
                    {
                        keyName: 'icon-git-merge',
                        valueName: '1'
                    }
                ]
            },
            {
                iconType: 'icon-repo-clone',
                repoName: 'openct-tasks',
                attr: 'Public',
                updatedTime: 'Updated on 25 Jul 2021',
                bottom: [
                    {
                        keyName: 'icon-yuan',
                        valueName: 'JavaScript'
                    },
                    {
                        keyName: 'icon-star',
                        valueName: '2'
                    },
                    {
                        keyName: 'icon-law',
                        valueName: 'MIT'
                    },
                    {
                        keyName: 'icon-repo-forked',
                        valueName: '0'
                    },
                    {
                        keyName: 'icon-issue-opened',
                        valueName: '0'
                    },
                    {
                        keyName: 'icon-git-merge',
                        valueName: '0'
                    }
                ]
            },
        ]
    }
    render() {
        const item = this.state.repoDatas.map(res => {
            return (
                <div className="repo-context-item" style={{borderBottom:'1px solid #D8DEE4'}}>
                    <div className="item-top">
                        <div className="repo" style={{ fontSize: '14px', marginRight: '16px', fontWeight: 500, color: '#0969da' }}>
                            {res.repoName}
                        </div>
                        <span className="attr" style={{ fontSize: '12px', border: '1px solid rgb(208, 215, 222)', borderRadius: '20px', padding: '1px 5px', fontWeight: 600 }}>
                            {res.attr}
                        </span>
                    </div>
                    <div className="item-mid" style={{heigth:'25px'}}>
                        {res.info}
                    </div>
                    <div className="item-bottom">
                        {res.bottom.map(res1=>{
                            return (
                                <div className="icon-item">
                                <SupperIcon type={res1.keyName} style={res1.valueName=='JavaScript'?{color:'yellow'}:res1.valueName=='HTML'?{color:'#e34c26'}:{}}></SupperIcon>
                                <span>{res1.valueName}</span>
                                </div>
                            )
                        }
                        )}
                        <div className="icon-item">
                            <span style={{ fontSize: '12px' }}>Updated 12 days ago</span>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="projects-main-repo">
                <div className="main-repo-title">
                    <SupperIcon type='icon-repo-clone' style={{ fontSize: '16px' }}></SupperIcon>
                    <span>Repositories</span>
                </div>
                <div className="main-repo-wrapper">
                    <div className="main-repo-top" >
                        <div>
                            <Input.Search placeholder="Find a repository..."
                                style={{
                                    width: 650,
                                    height: 32,
                                    marginRight: '16px'
                                }}>
                            </Input.Search>
                        </div>
                        <div>
                            <Select defaultValue="Type" size='large' style={{ width: 60, marginRight: '16px' }}>
                                <Option value="all" >All</Option>
                                <Option value="public">Public</Option>
                                <Option value="sources" >Sources</Option>
                                <Option value="forks">Forks</Option>
                            </Select>
                            <Select defaultValue="Language" size='large' style={{ width: 120, marginRight: '16px' }}>
                                <Option value="all" >All</Option>
                                <Option value="html">HTML</Option>
                                <Option value="javascript" >JavaScript</Option>
                                <Option value="vue">Vue</Option>
                            </Select>
                            <Select defaultValue="Sort" size='large' style={{ width: 120, height: 36 }}>
                                <Option value="all" >Last updated</Option>
                                <Option value="public">Name</Option>
                                <Option value="sources" >Start</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="main-repo-context">
                        <div className="repo-context-wrapper" >
                            {item}
                            <div  style={{height:'5rpx',backgroundColor:'#f6f8fa',padding:'16px',fontSize:'14px',fontWeight:600,textAlign:'center'}}>View all repositories</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
