import React, { Component } from 'react';



class InputForm extends Component{

  constructor(props) {
    super(props);
   this.handleChangeId = this.handleChangeId.bind(this);
   this.handleChangeName = this.handleChangeName.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.state = {items: [], id: '' , name:''};
  }
  handleChangeId(event) {
    this.setState({id: event.target.value});
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event){
     event.preventDefault(); //원래값이 없어진다.
      const newItem = {
       id:this.state.id,
       name: this.state.name,
     };

    if(newItem.id === ''||newItem.name ===''){
      alert('you must insert all!!');
    }


     this.setState((prevState)=>({
       items:prevState.items.concat(newItem),
       text:''
     }));
  }



  render(){
    return(
      <div>
      <form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputType" className="col-sm-2 control-label" id="id">ID</label>
          <div className="col-sm-4">
           <input type="text" name="id"className="form-control" value={this.state.id}  onChange={(event)=>this.handleChangeId(event)} placeholder="Input id"/>
           </div>
         </div>
         <div className="form-group">
           <label htmlFor="inputType" className="col-sm-2 control-label" id="name">NAME</label>
           <div className="col-sm-4">
            <input type="text" name="name" className="form-control" value={this.state.name} onChange={(event)=>this.handleChangeName(event)} placeholder="Input name"/>
            </div>
            <div className="col-sm-3">
               <button type="submit" className="btn btn-default" onClick={(event)=> {this.handleSubmit(event)}}>submit</button>
            </div>
          </div>
      </form>

      <ul className="list-group">
        {
          this.state.items.map((item ,index)=>{
            const uniqueKey = 'itemID_'+index;
          return(
            <li className="list-group-item" key={uniqueKey}>ID: {item.id} / Name: {item.name}</li>
          )
          })
        }

      </ul>
      </div>
    )
  }


}

export default InputForm;
