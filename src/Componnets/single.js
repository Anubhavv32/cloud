import React, { Component } from 'react'

export default class Single extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    checkHandler=(e,id)=>{
 this.props.click(id,e.target.checked)
    }
    render() {
let selectAll = this.props.selectAll
        return (
            <div>
                 <label className="container1">First
          <input type="checkbox" className="select1" id="1" checked={selectAll[1]} onChange={
              (e)=>{this.checkHandler(e,1)}
          } />
          <span className="checkmark" />
        </label>
        <label className="container1">Second
          <input type="checkbox" className="select2" id="2" checked={selectAll[2]} onChange={
              (e)=>{this.checkHandler(e,2)}
          } />  
          <span className="checkmark" />
        </label>
        <label className="container1">Third
          <input type="checkbox" className="select3" id="3" checked={selectAll[3]} onChange={
              (e)=>{this.checkHandler(e,3)}
          } />
          <span className="checkmark" />
        </label>
        <label className="container1">Fourth
          <input type="checkbox" className="select4" id="4" checked={selectAll[4]} onChange={
              (e)=>{this.checkHandler(e,4)}
          } />
          <span className="checkmark" />
        </label>
            </div>
        )
    }
}
