import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = { 
    advice:''
   }

   componentDidMount() {
     this.fetchAdvice();
   }

   fetchAdvice = () => {
     axios.get("https://api.adviceslip.com/advice")
     .then((response)=>{
        //console.log(response.data.slip.advice); destructing it as below
        const {advice} = response.data.slip;
        console.log(advice);
        this.setState({
          advice : advice
        })
     })
     .catch((error) =>{
        console.log(error);
     })
   }

  render() { 
    return ( 
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>Get Me Advice</button>
        </div>
      </div>
     );
  }
}
 
export default App;
