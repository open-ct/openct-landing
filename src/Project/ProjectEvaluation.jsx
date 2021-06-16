import React, { useEffect, useState } from 'react';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';

function ProjectEvaluation() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // TODO get project evaluation
    setData([
      { value: 10, name: '自我介绍' },
      { value: 10, name: '学习时长' },
      { value: 20, name: '能力过关' },
      { value: 10, name: '达标测试' },
      { value: 20, name: '提交成果' },
      { value: 20, name: '教师评分' },
    ]);
  }, []);

  const getOptions = () => ({
    title: {
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      top: 20,
      left: 5,
    },
    series: [
      {
        name: '评价方案',
        type: 'pie',
        data,
      },
    ],
  });
  return (
    <div>
      <ReactEcharts option={getOptions()} />
    </div>
  );
}

export default ProjectEvaluation;
