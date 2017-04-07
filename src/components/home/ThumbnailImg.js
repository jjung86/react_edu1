import React, { Component } from 'react';
import lion from './lion.jpg';

class ThumbnailImg extends Component{
  render(){
    return(
      <div>
        <div className="col-xs-6 col-md-4">
          <a href="#" className="thumbnail">
            <img src={lion} alt="Loin"/>
          </a>
        </div>
      </div>

    );
  };
};

export default ThumbnailImg ;
