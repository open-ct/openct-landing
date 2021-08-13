import React from 'react';
import { CloseOutlined } from '@ant-design/icons'

class AdvisoryCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {ifshow: true};
  }
  closeClick(){

  }
  render(){
    if(this.state.ifshow){
      return (
        <div className="customer-service-new">
          <div className="shop-top">
          <CloseOutlined
           className="closeShop" 
           onClick={() => {
             this.setState({
              ifshow:false
             })
            }}/>
          </div>
            <div 
            style={{
              background: ("#66ffff"),
              width: "120px",
              height: "200px",
              borderRadius:"4px",
              paddingTop:"50px",
              marginLeft:"120px",
              }}
            >咨询
            </div>
        </div>
      )
    }else{
      return null
    }
    
  }
}
export default AdvisoryCard