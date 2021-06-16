import React from 'react';

import echarts from 'echarts/lib/echarts'

import 'echarts/lib/chart/pie';  //折线图是line,饼图改为pie,柱形图改为bar

import 'echarts/lib/component/tooltip';

import 'echarts/lib/component/title';

import 'echarts/lib/component/legend';
import config from './config.js';

class PieEcharts extends React.Component {

  /**

   * 初始化id id是随机生成的一串唯一的字符串

   */

  constructor(props) {

    super(props)

    let id = ('_' + Math.random()).replace('.', '_');

    this.state = {

      pieId: 'pie' + id

    }

  }

  /**

   * 生成图表，主要做了一个判断，因为如果不去判断dom有没有生成，

   * 在后面如果定期去更新图表，每次生成一个dom节点会导致浏览器

   * 占用的cpu和内存非常高，踩过坑。

   * 这里的config就是引入的配置文件中的config,文件头部会有说明

   */

  initPie(id) {

    let myChart = echarts.getInstanceByDom(document.getElementById(id));

    if (myChart === undefined) {

      myChart = echarts.init(document.getElementById(id));

    }

    myChart.setOption(config)

  }

//在其他地方引用的时候，把值传入list中，就可以使用改组件，

//因为接口中查询到的不一定会直接渲染页面，所有采用componentWillReceiveProps生命

//周期函数，在值发生变化的时候，重新传入值。

  componentWillReceiveProps=(nextProps)=> {

    const {list:oldlist} = this.props

    const {list:newlist} = nextProps

    if(oldlist!=newlist){

      config.series[0].data = newlist

      this.initPie(this.state.pieId);

    }

  }

  //使用组件的时候还需要传入一个height，因为echarts图表显示必须要有高度，没有高度无法显示图表

  render() {

    const {height} = this.props

    return (

      <div id={this.state.pieId} style={{ height }}></div>

    )

  }

}

export default PieEcharts;
