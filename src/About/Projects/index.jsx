import React, { Component } from 'react'
import 'antd/dist/antd.min.css'
import './static/projects.less'

import Banner from './Banner'
import Pinned from './Pinned'
import Repo from './Repo'

export default class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <Banner/>
        <div className="projects-main-wrapper">
            <Pinned/>
            <Repo/>
        </div>
      </div>
    )
  }
}
