import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  
  render() {
    return (
      <div style={{width:"100%"}}>
      <div className="row">
       <div className="col-sm-4">
    <div className="card">
    <div className="card-body">
      Indeterminate Checkbox
    </div>

      <div className="card-body11">

       <label className="container1">Select All
          <input type="checkbox" className="select-all" id="select-all"  />
          <span className="checkmark" />
        </label>
        <label className="container1">First
          <input type="checkbox" className="select1" id="select1"  />
          <span className="checkmark" />
        </label>
        <label className="container1">Second
          <input type="checkbox" className="select2" id="select2"  />
          <span className="checkmark" />
        </label>
        <label className="container1">Third
          <input type="checkbox" className="select3" id="select3"  />
          <span className="checkmark" />
        </label>
        <label className="container1">Fourth
          <input type="checkbox" className="select4" id="select4"  />
          <span className="checkmark" />
        </label>
      </div></div></div></div></div>
    )
  }
}
