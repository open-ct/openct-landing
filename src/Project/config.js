let colors = ['#E60012', '#EB6100', '#F39800', '#FFF100', '#8FC31F', '#22AC38', '#009944', '#009E96', '#0068B7', '#601986']

module.exports = {

  color: colors,

  title: {

    text: '设备类型统计',

    left: 'left',

    top: '2%',

    textStyle: {

      color: '#fff'

    }

  },

  tooltip: {

    trigger: 'item',

    formatter: '{a} <br/>{b} : {c} ({d}%)'

  },

  series: [

    {

      name: '类型统计',

      type: 'pie',//饼图

      radius: [30, 110],

      roseType: 'area',

      data: [],//数据后面再导入

      //设置显示标签的样式

      label: {

        position: 'outside',

        color: '#0DD5ED',

        // formatter: '{b} \n\n {d}%',

        formatter: function (data) {

          return data.name + ' \n\n ' + data.percent.toFixed(1) + '%'

        },

        padding: [0, -30, 0, -30],

      },

      //设置线条样式

      labelLine: {

        length: 10,

        length2: 30,

        lineStyle: {

          width: 1

        }

      },

    }

  ]

};
