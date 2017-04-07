import React, { Component } from 'react';


class Dropdown extends Component{
  render(){
    return(
      <div>
        <ul className="dropdown-menu" role="menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li className="divider"></li>
          <li className="dropdown-header">Nav header</li>
          <li><a href="#">Separated link</a></li>
          <li><a href="#">One more separated link</a></li>
        </ul>
      </div>
    );
  };
};

export default Dropdown;
