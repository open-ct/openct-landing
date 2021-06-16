import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import './static/sider.less';

function Bread() {
  const [locationList, setLocationList] = useState(['项目学习', '公共项目']);

  return (
    <Breadcrumb className="bread-crumb" separator=">">
      {
        locationList.map((item, index) => (
          <Breadcrumb.Item key={index.toString()}>{item}</Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  );
}

export default Bread;
