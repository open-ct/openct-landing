import React from 'react';
import { Row, Col, Button } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>OpenCT</h2>
              <div>
                <a target="_blank " href="https://gitee.com/openct">
                  OpenCT GitHub
                </a>
              </div>
              <div>
                <a target="_blank " href="https://github.com/open-ct">
                  OpenCT
                </a>
              </div>
              <div>
                <a href="https://gitee.com/openct/js-tasks">
                OpenCT Tasks Gitee</a>
              </div>
              <div>
                <a href="https://github.com/open-ct/openct-tasks">
                OpenCT Tasks Github</a>
               </div>
              <div>
                <a target="_blank " href="https://github.com/open-ct/OpenItem">
                  OpenItem
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>OpenCT Subitems</h2>
              <div>
                <a href="https://github.com/open-ct/reportBNU">ReportBNU</a>
                <span> - </span>
                <span>报告系统</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://github.com/open-ct/DrawGraph">DrawGraph</a>
                <span> - </span>
                <span>数据可视化</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://github.com/open-ct/OpenPBL">OpenPBL</a>
                <span> - </span>
                <span>项目式学习平台</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://github.com/open-ct/openscore">OpenScore</a>
                <span> - </span>
                <span>阅卷系统</span>
              </div>
              </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>相关网址</h2>
              <div>
                <a href="https://cicabeq.bnu.edu.cn/rcpy/kcgx/BB/7e575332e8eb44dab94e09fa650699d6.htm">
                  中国基础教育质量监测协同创新中心
                </a>
              </div>
              <div>
                <a href="https://www.ioe.tsinghua.edu.cn/">
                  清华大学教育研究院
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://oelab.net">
                  开放教育联盟
                </a>
              </div>
              </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                更多
              </h2>
              <div>
                <a target="_blank" rel="noopener" href="https://open-ct.com/landing">OpenCT-QQ群</a>
                <span> - </span>
                <span>389801885</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://antv.alipay.com/">公众号</a>
                <span> - </span>
                <span>微信公众号搜索：OpenCT</span>
              </div>
             </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={6} sm={24}>
          <div className="translate-button">
            <Button ghost size="small" >
              English
            </Button>
          </div>
        </Col>
        <Col lg={18} sm={24}>
          <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              隐私权政策 ICP
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              权益保障承诺书
            </a>
          </span>
          <span style={{ marginRight: 12 }}>ICP 证京 B2-2-100257</span>
          <span style={{ marginRight: 12 }}>Copyright © OpenCT国际联盟</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
