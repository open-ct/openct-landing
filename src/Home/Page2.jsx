import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';

function Page2() {
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2><span>测试案例</span></h2>
        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <p key="p" className="page-content">
              集成选择、填空、拖拽、可视化编程等多种题型
            </p>
            <div key="code1" className="home-code">
              <div>
                $ <span>可视化编程</span> 集成块状编程系统
              </div>
              <div>$ <span>嵌入拖拽组件</span> 多模式拖拽</div>
              <div>$ <span>设置选择模块</span> 多种选择题型</div>
              <div>$ <span>整合填空模块</span> 多类型填空题</div>
            </div>
           <div key="button" style={{ marginTop: 88 }}>
              <a href="https://exam.xsj21.com/ticket-login" target="_blank" rel="noopener noreferrer">
                <Button type="primary">开始测试</Button>
              </a>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
