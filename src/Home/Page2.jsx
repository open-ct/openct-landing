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
        <h2><span>Mushi的项目式系统入口</span></h2>
              <OverPack>
                  <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
                      <p key="p" className="page-content"> 优质资源 多样化工具 个性化评测 </p>

                      <div className="nbb666">
                          <div className="nb666">
                              <div className="loginpage-system_partItem">

                                  <img src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ" style={{ marginLeft: 30 }}></img>
                                  <img src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ" style={{ marginLeft: 30 }}></img>
                                  <img src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ" style={{ marginLeft: 30 }}></img>
                              </div>
                          </div>
                          
                          <p style={{ marginTop: 20 }}>
                              开始项目式学习~
                          </p>

                      </div>
                      <div key="button" style={{ marginTop: 44 }}>
                          <a href="/ticket-login-card" target="_blank" rel="noopener noreferrer">
                              <Button type="primary">System Start</Button>
                          </a>
                      </div>
                  </QueueAnim>
              </OverPack>

      </div>
    </div>
  );
}


export default Page2;

