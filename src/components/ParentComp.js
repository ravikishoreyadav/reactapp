import React, { Component } from 'react'
import PureComp from './PureComp'
import ReguComp from './ReguComp'
import MemoComp from './MemoComp'

export class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Abhishek'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Abhishek'
            })
        },2000)
    }

  render() {
    console.log("************ Parent Component ************");
    return (
      <div>
        Parent Component 
        {/* <PureComp name={this.state.name} />
        <ReguComp name={this.state.name}/> */}
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp