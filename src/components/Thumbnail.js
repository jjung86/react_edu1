import React, { Component } from 'react';
import lion from './lion.jpg';
import ThumbnailLabel from './ThumbnailLabel';


class Thumbnail extends Component{
  render() {
    return (
      <div className="row">
        <ThumbnailLabel/>
        <ThumbnailLabel/>
        <ThumbnailLabel/>
        <ThumbnailLabel/>
      </div>
    );
  };
};


export default Thumbnail;
