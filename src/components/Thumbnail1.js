import React, { Component } from 'react';
import lion from './lion.jpg';
import ThumbnailImg from './ThumbnailImg';


class Thumbnail1 extends Component{
  render(){
    return(
      <div>
        <div className="row">
          <ThumbnailImg/>
          <ThumbnailImg/>
          <ThumbnailImg/>
          <ThumbnailImg/>
          <ThumbnailImg/>
          <ThumbnailImg/>
        </div>
      </div>
    );
  };
};

export default Thumbnail1;
