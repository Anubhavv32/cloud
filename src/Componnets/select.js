import React, { Component } from 'react'

export default class Select extends Component {
    constructor(){
        super()
        this.state={
            checkAll:false
        }
    }
    checkHandler=(e)=>{
        this.setState({checkAll:e.target.checked},
            ()=>{
                if(this.state.checkAll){
                    this.props.click(true)
                }
              
            })
    }


componentWillReceiveProps(){
    
    let count =0
    let selectAll = this.props.selectAll
    let n = Object.values(selectAll).length
    for(let i = 1; i<n+1;i++){
      if(selectAll[i]  == true){
        count++;
      }
}
   
    if(count != 4){
      
          this.setState({checkAll:false})
      }
  }
    render() {
        return (
            <div>
               <label className="container1">Select All
          <input type="checkbox" className="select-all" onClick={this.checkHandler} 
          checked={this.state.checkAll} />
          <span className="checkmark" />
        </label> 
            </div>
        )
    }
}
