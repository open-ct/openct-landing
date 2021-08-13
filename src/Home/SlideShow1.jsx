import React from 'react';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined} from '@ant-design/icons';
const contentStyle = {
  with:'1200px',
  height: '700px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
class Slideshow1 extends React.Component{
  constructor(props){
    super(props);
    this.card=React.createRef();
  }
  render(){
    return (
      <div style={{marginTop:-80}}>
        <LeftOutlined 
          className="arrows" 
          style={{ left: 26 }}
          onClick={() => {
            this.card.current.next();
          }}
        />
        <RightOutlined
          className="arrows" 
          style={{ right: 26 }}
          onClick={() => {
            this.card.current.next();
          }}
        />
        <Carousel
         autoplay 
         ref={this.card}
         className="slideshow1"
         >
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>

    )
  }
}

export default Slideshow1;