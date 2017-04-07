import React, { Component } from 'react';
import {Link}from 'react-router-dom'


class Nav extends Component{

  constructor(props){
    super(props);
    this.state={
      activePage:'Home'
    }
  }

  handleactivePage(pagename){
    this.setState({activePage:pagename});
  }

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

      <Link to="/" className="navbar-brand" onClick={()=>{this.handleactivePage('Home')}}>Project name</Link>
    </div>
    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
        <li className={(this.state.activePage ==='Home')?'active':''}>
          <Link to="/" onClick={()=>{this.handleactivePage('Home')}} >Home</Link>
        </li>
        <li className={(this.state.activePage ==='About')?'active':''}>
          <Link to="/about" onClick={()=>{this.handleactivePage('About')}}>About</Link>
        </li>
        <li><a href="#contact">Contact</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>

        </li>
      </ul>
      </div>
      </div>
    </nav>


</div>

    );
  };
};


export default Nav;
