import React, { Component } from 'react';
import Single from './Componnets/single';
import Select from './Componnets/select';

import './App.css';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      selectAll:{1:false,2:false,3:false,4:false}
    }
  }
  clickAll=(bool)=>{
    console.log(bool)
    let selectAll = this.state.selectAll
    selectAll[1]=bool
    selectAll[2]=bool
    selectAll[3]=bool
    selectAll[4]=bool
  
this.setState({selectAll})
    // this.setState({checkAll:e.target.value},()=>{
    //   console.log(this.check)
    // })
  }
 
  clickSingle=(id,bool)=>{
    let selectAll = this.state.selectAll
    selectAll[id] = bool
    this.setState({selectAll})
  }
 
  render() {
   
    return (
      <div style={{width:"100%"}}>
      <div className="row">
       <div className="col-sm-4">
    <div className="card">
    <div className="card-body">
      Indeterminate Checkbox
    </div>
<Select selectAll={this.state.selectAll} click={this.clickAll}/>
<Single selectAll={this.state.selectAll} click={this.clickSingle} />
      <div className="card-body11">

       
      </div></div></div></div></div>
    )
  }
}
