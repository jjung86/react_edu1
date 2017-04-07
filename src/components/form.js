import React, { Component } from 'react';



class form extends Component{
  render(){
      return(
        <div>
          <form className="form-horizontal" role="form">
            <div className="form-group">
            <label for="inputType" className="col-sm-2 control-label">Label</label>
            <div className="col-sm-4">
             <input type="text" className="form-control" id="inputCity" placeholder="Input text"/>
             </div>
             </div>
          </form>
        </div>

      );
  };
};


export default form;
