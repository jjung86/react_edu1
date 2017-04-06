import React, { Component } from 'react';
import lion from './lion.jpg';

class ThumbnailLabel extends Component{
  render(){
    return(
      <div>
      <div className="col-sm-4 col-md-3">
        <div className="thumbnail">
         <img src={lion} alt="Lion"/>
          <div className="caption">
            <h3>Thumbnail label</h3>
            <p>hello</p>
             <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
      </div>
    );
  };
};


export default ThumbnailLabel;
