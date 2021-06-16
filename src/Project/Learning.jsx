import React from 'react';
import { Affix, Collapse, Divider, Layout, Progress, Upload, message, Button } from 'antd';
import { Document, Page } from 'react-pdf';
import { FilePptOutlined, PlayCircleOutlined, UploadOutlined } from '@ant-design/icons';
import Header from '../Home/Header';
import Bread from './Bread';


const outlineList = [
  {
    title: '第一章',
    sub: [
      {
        title: '第一小节', percent: 100, pdf: true, video: false,
      },
      {
        title: '第二小节', percent: 100, pdf: true, video: false,
      },
      {
        title: '第三小节', percent: 100, pdf: true, video: false,
      },
    ],
  },
  {
    title: '第二章',
    sub: [
      {
        title: '第一小节', percent: 90, pdf: true, video: false,
      },
      {
        title: '第二小节', percent: 40, pdf: true, video: true,
      },
    ],
  },
  {
    title: '第三章',
    sub: [
      {
        title: '第一小节', percent: 80, pdf: true, video: false,
      },
      {
        title: '第二小节', percent: 40, pdf: true, video: false,
      },
    ],
  },
];


const { Panel } = Collapse;
const { Sider, Content } = Layout;

class Learning extends React.PureComponent {
  state = {
    outline: outlineList,
    title: '',
    uploadUrl: 'http://localhost:9000',
    pdfUrl: '',
    numPages: null,
    pageNumber: '1',
    defaultKey: ['0'],
  }
  onDocumentLoadSuccess = (numPages) => {
    this.setState({
      numPages,
    });
  };
  onUploadFile = (info) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 文件上传成功`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 文件上传失败`);
    }
  }
  chooseItem = (item, subItem) => {
    console.log(item, subItem);
    this.setState({
      title: `${item.title}  ${subItem.title}`,
    });
  }
  render() {
    const {
      outline, defaultKey, title, pageNumber, numPages, uploadUrl, pdfUrl
    } = this.state;
    return (
      <div>
        <Header />
        <Bread />

        <Layout>
          <Affix offsetTop={0}>
            <div>
              <Sider
                width="30%"
                collapsible
                collapsedWidth="25"
                style={{
                  overflow: 'auto',
                  height: '100vh',
                  position: 'fixed',
                  left: 0,
                  backgroundColor: 'white',
                }}
              >
                <Collapse
                  ghost
                  defaultActiveKey={defaultKey}
                >
                  {
                    outline.map((item, index) => (
                      <Panel
                        key={index.toString()}
                        header={<span style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.title}</span>}
                      >
                        {
                          item.sub.map((subItem, subIndex) => (
                            <div
                              key={subIndex.toString()}
                              onClick={e => this.chooseItem(item, subItem)}
                              style={{
                                cursor: 'pointer',
                              }}
                            >
                              <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#108ee9',
                                    '100%': '#87d068',
                                  }}
                                strokeWidth={10}
                                width={25}
                                percent={subItem.percent}
                              />
                              <span style={{ marginLeft: '10px' }}>{subItem.title}</span>
                              <div style={{ float: 'right' }}>
                                {subItem.pdf ?
                                  <FilePptOutlined
                                    style={{
                                      fontSize: '20px',
                                    }}
                                  />
                                  : null
                                }
                                {subItem.video ?
                                  <PlayCircleOutlined
                                    style={{
                                      fontSize: '20px',
                                      marginLeft: '10px',
                                    }}
                                  />
                                  : null
                                }
                              </div>
                              <Divider />
                            </div>
                          ))
                        }
                      </Panel>
                    ))
                  }
                </Collapse>
                <br /><br /><br /><br /><br /><br /><br /><br />
              </Sider>
            </div>
          </Affix>

          <Layout>
            <Content
              style={{
                backgroundColor: '#f2f4f5',
                overflow: 'auto',
                height: '100vh',
                marginLeft: '32%',
              }}
            >
              <h2 style={{ textAlign: 'center' }}>{title}</h2>
              <Upload
                name="file"
                action={uploadUrl}
                headers={{
                  authorization: 'authorization-text',
                }}
                onChange={this.onUploadFile}
              >
                <Button icon={<UploadOutlined />} >上传文件</Button>
              </Upload>
              <Document
                file={pdfUrl}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
                <p>第{pageNumber}页 共{numPages}页</p>
              </Document>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Learning;
