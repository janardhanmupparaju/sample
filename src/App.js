import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
export class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      val:10,
      addval:20,
      subval:30,
      userdata:{}
    }

  }
  componentDidMount(){
    let self=this
    const options = {
      method:'GET',
      url:'https://gist.githubusercontent.com/mdsadiq/caba21da871e624587c1fd46b7c378a7/raw/f4e1dec7bb27077b527b7824dea0a284e9a79a9a/user.json',
    }
    console.log('calling api')
    axios(options).then(function(response){
      console.log("this is response2",response)
      console.log("this is response",response.data)

      self.setState({userdata:response.data})
  
      // this.props.changeinitalval(this.response.data)

      // console.log("this is response name",userdata.name)


    }).catch((err) =>{
  
      console.log("error",err)
    })
  }
  

  render() {
    console.log("this response fron store",this.props.storeData)
    console.log("this is from App.js",this.props)
    console.log("this is from App.js getting value",this.props.initval)
    //this Object destructure
const {initval,afteraddval} = this.props
    return (
        <div>

        <p>{this.state.userdata.name}</p>
            <p>{initval}</p>
            <input type="number" id="ss" ref={(ref)=>this.inputElement = ref} />
            {/* <button onClick={this.props.changeValueWithDispatch(this.inputElement)}>change</button> */}
            <button onClick={() => this.props.changeinitalval(this.inputElement)}>change</button>
            <div>
               <p>added value{afteraddval}</p>
              </div>
            </div>
            
    )
}
}

export default App;
