import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Thumbnail from './Thumbnail';
import Thumbnail1 from './Thumbnail1';


class Container extends Component{
  render(){
    return(
      <div className="container">
         <Jumbotron/>
         <Thumbnail/>
         <Thumbnail1/>
      </div>
    );
  };
};

export default Container;
