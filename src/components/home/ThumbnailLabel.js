import React, { Component } from 'react';
import lion from './lion.jpg';
import ryan from './ryan.jpg';


class ThumbnailLabel extends Component{
  constructor(){
    super();
    this.state = {
      img : null
    }
  }

  componentWillMount(){
    this.setState({img: lion});
  }

  changeImage(image){
    this.setState({img: image});
  }

  render(){



    return(
      <div>
      <div className="col-sm-4 col-md-3">
        <div className="thumbnail">
         <img src={this.state.img} alt={this.state.img}/>
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.content}</p>
             <p><button type="button" className="btn btn-primary" onClick={()=>{this.changeImage(lion)}} >Hello</button> <button type="button" className="btn btn-default" onClick={()=>{this.changeImage(ryan)}}>Saygoodbye</button></p>
          </div>
        </div>
      </div>
      </div>
    );
  };
};


export default ThumbnailLabel;
