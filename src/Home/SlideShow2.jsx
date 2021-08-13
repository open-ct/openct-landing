import React from 'react';
import { Carousel } from 'antd';

class Slideshow2 extends React.Component{
  constructor(props){
    super(props);
    this.card=React.createRef();
  }
  render(){
    return (
      <div style={{marginTop:-120}}>
        <Carousel
         autoplay 
         ref={this.card}
         className="info-swiper"
         >
          <div className="info-swiper-box">
            <div className="information-box"></div>
            <div className="information-box"></div>
            <div className="information-box"></div>
            <div className="information-box"></div>
          </div>
          <div className="info-swiper-box">
            <div className="information-box"></div>
            <div className="information-box"></div>
            <div className="information-box"></div>
            <div className="information-box"></div>
          </div>
        </Carousel>
      </div>

    )
  }
}

export default Slideshow2;