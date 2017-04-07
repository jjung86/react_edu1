import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Thumbnail from './Thumbnail';
import Thumbnail1 from './Thumbnail1';
import InputForm from './InputForm';

class Container extends Component{

/*  constructor(props){
   super(props);
   this.state = {inputTextID:'', inputTextName:''};

   this.handleChangeID = this.handleChangeID.bind(this);
   this.handleChangeNAME = this.handleChangeNAME.bind(this);
 };

 handleChangeID(event) {

        this.setState({
            inputTextID: event.target.value
        })

    }

  handleChangeNAME(event) {
            this.setState({
                inputTextName: event.target.value
            })

        }

handleSubmit(event) {
 event.preventDefault();  //기본이벤트를 막는 기능
alert('ID: ' + this.state.inputTextID +   'NAME: '+this.state.inputTextName);

} */



  render(){
    return(
      <div className="container">
          <Jumbotron/>
           <InputForm/>
           <Thumbnail/>
           <Thumbnail1/>
      </div>
    );
  };
}


export default Container;
