import React, { Component } from 'react'
import SupperIcon from './component/Icon'


export default class Pinned extends Component {
    state={
        pinnedDatas:[
            {
                iconType:'icon-repo-clone',
                repoName:'reportBNU',
                attr:'Public',
                bottom:[
                    {
                        keyName:'icon-yuan',
                        valueName:'JavaScript'
                    },
                    {
                        keyName:'icon-star',
                        valueName:'3'
                    },
                    {
                        keyName:'icon-repo-forked',
                        valueName:'3'
                    },
                ]

            },
            {
                iconType:'icon-repo-clone',
                repoName:'DrawGraph',
                attr:'Public',
                bottom:[
                    {
                        keyName:'icon-star',
                        valueName:'2'
                    }
                ]

            },
            {
                iconType:'icon-repo-clone',
                repoName:'openct-landing',
                attr:'Public',
                info:'官网首页',
                bottom:[
                    {
                        keyName:'icon-yuan',
                        valueName:'JavaScript'
                    },
                    {
                        keyName:'icon-star',
                        valueName:'4'
                    },
                    {
                        keyName:'icon-repo-forked',
                        valueName:'7'
                    },
                ]

            },
            {
                iconType:'icon-repo-clone',
                repoName:'openct-tasks',
                attr:'Public',
                bottom:[
                    {
                        keyName:'icon-yuan',
                        valueName:'JavaScript'
                    },
                    {
                        keyName:'icon-star',
                        valueName:'2'
                    }
                ]

            },
            {
                iconType:'icon-repo-clone',
                repoName:'OpenItem',
                attr:'Public',
                info:'命题与题库系统',
                bottom:[
                    {
                        keyName:'icon-star',
                        valueName:'23'
                    },
                    {
                        keyName:'icon-repo-forked',
                        valueName:'2'
                    },
                ]

            },
        ]
    }
    render() {
        const item=this.state.pinnedDatas.map((res)=>{
            return (
                <div className="item">
                <div className="item-top">
                    <div className="icon">
                        <SupperIcon type={res.iconType} style={{ fontSize: 16, marginRight: '16px', lineHeight: '22px' }}></SupperIcon>
                    </div>
                    <div className="repo" style={{ fontSize: '14px', marginRight: '16px', fontWeight: 500,color:'#0969da'}}>
                        {res.repoName}
                    </div>
                    <div className="attr" style={{ fontSize: '12px', border: '1px solid rgb(208, 215, 222)', borderRadius: '20px', padding: '1px 5px', fontWeight: 600 }}>
                        {res.attr}
                    </div>
                </div>
                <div className="item-mid" style={{height:'8px',marginTop:'4px'}}>
                    <span>{res.info}</span>
                </div>
                <div className="item-bottom">
                    {res.bottom.map(res1=>{
                        return (
                            <div className="icon-item">
                            <div style={{ marginTop: '4px' }}>
                                <SupperIcon type={res1.keyName} style={res1.valueName=='JavaScript'?{color:'yellow'}:{}}></SupperIcon>
                            </div>
                            <span>{res1.valueName}</span>
                        </div>
                        )
                    })}
                </div>
            </div>
            )
        })
        return (
            <div className="projects-main-pinned">
                <div className='main-pinned-title'>Pinned</div>
                <div className="main-pinned-wrapper">
                    {item}
                </div>
            </div>
        )
    }
}
