import React from 'react';
import BannerAnim from 'rc-banner-anim';
import { Image } from 'antd';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './static/caroudel-pbl.less';

const { Element, Arrow, Thumb } = BannerAnim;
const BgElement = Element.BgElement;

class CarouselPBL extends React.Component {
  constructor(props) {
    super(props);
    this.imgArray = [
      require('./static/image/pbl1.jpg'),
      require('./static/image/pbl2.jpg'),
      require('./static/image/pbl3.jpg'),

    ];
    this.state = {
      intShow: 0,
      prevEnter: false,
      nextEnter: false,
      thumbEnter: false,
    };
    [
      'onChange',
      'prevEnter',
      'prevLeave',
      'nextEnter',
      'nextLeave',
      'onMouseEnter',
      'onMouseLeave',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onChange(type, int) {
    if (type === 'before') {
      this.setState({
        intShow: int,
      });
    }
  }

  getNextPrevNumber() {
    let nextInt = this.state.intShow + 1;
    let prevInt = this.state.intShow - 1;
    if (nextInt >= this.imgArray.length) {
      nextInt = 0;
    }
    if (prevInt < 0) {
      prevInt = this.imgArray.length - 1;
    }

    return [prevInt, nextInt];
  }

  prevEnter() {
    this.setState({
      prevEnter: true,
    });
  }

  prevLeave() {
    this.setState({
      prevEnter: false,
    });
  }

  nextEnter() {
    this.setState({
      nextEnter: true,
    });
  }

  nextLeave() {
    this.setState({
      nextEnter: false,
    });
  }

  onMouseEnter() {
    this.setState({
      thumbEnter: true,
    });
  }

  onMouseLeave() {
    this.setState({
      thumbEnter: false,
    });
  }

  render() {
    const intArray = this.getNextPrevNumber();
    const thumbChildren = this.imgArray.map((img, i) =>
      (
        <span key={i.toString()}>
          <Image src={img} />
        </span>
      ));
    return (
      <BannerAnim onChange={this.onChange} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} prefixCls="custom-arrow-thumb" autoPlay>
        {this.imgArray.map((item, index) => (
          <Element key={index.toString()} prefixCls="banner-user-elem">
            <BgElement
              key="bg"
              className="bg"
              style={{
                backgroundImage: `url(${item})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
              <div style={{ fontSize: '100px' }}>P B L</div>
            </TweenOne>
            <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
              <div style={{ fontSize: '30px' }}>Project Based Learning</div>
            </TweenOne>
          </Element>
        ))
        }

        <Arrow
          arrowType="prev"
          key="prev"
          prefixCls="user-arrow"
          component={TweenOne}
          onMouseEnter={this.prevEnter}
          onMouseLeave={this.prevLeave}
          animation={{ left: this.state.prevEnter ? 0 : -120 }}
        >
          <div className="arrow" />
          <TweenOneGroup
            enter={{ opacity: 0, type: 'from' }}
            leave={{ opacity: 0 }}
            appear={false}
            className="img-wrapper"
            component="ul"
          >
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[0]]})` }} key={intArray[0]} />
          </TweenOneGroup>
        </Arrow>
        <Arrow
          arrowType="next"
          key="next"
          prefixCls="user-arrow"
          component={TweenOne}
          onMouseEnter={this.nextEnter}
          onMouseLeave={this.nextLeave}
          animation={{ right: this.state.nextEnter ? 0 : -120 }}
        >
          <div className="arrow" />
          <TweenOneGroup
            enter={{ opacity: 0, type: 'from' }}
            leave={{ opacity: 0 }}
            appear={false}
            className="img-wrapper"
            component="ul"
          >
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[1]]})` }} key={intArray[1]} />
          </TweenOneGroup>
        </Arrow>

        <Thumb
          prefixCls="user-thumb"
          key="thumb"
          component={TweenOne}
          animation={{ bottom: this.state.thumbEnter ? 0 : -70 }}
        >
          {thumbChildren}
        </Thumb>
      </BannerAnim>
    );
  }
}

export default CarouselPBL;
