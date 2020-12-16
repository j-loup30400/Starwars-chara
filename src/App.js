
import React, { Component } from "react";

class App extends Component {
  state = {
    perso : [],
  }

  componentDidMount(){
    fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(data => 
      this.setState({
        perso: data.results
      }))
  }

//why the api isLoaded make the loading screen
// instead of showing all the chara info make props 
//practice

render(){
  return(
    <div>
      <h1>hello</h1>
      {
      this.state.perso.map((names,index)=> 
      <div key={index}>
      <p>{names.name}</p>
      <p>{names.birth_year}</p>
      </div>
      )}
    </div>
  )
}

}

export default App;
