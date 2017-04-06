import React, { Component } from 'react';
import Dropdown from './Dropdown';

class Nav extends Component{
  render(){
    return(
      <div>
      <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
      <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Project name</a>
    </div>
    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
        <li className="active"><a href="http://www.naver.com/" target="_blank">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>

        </li>
      </ul>
      </div>
      </div>
    </nav>

  <Dropdown/>
</div>

    );
  };
};


export default Nav;
