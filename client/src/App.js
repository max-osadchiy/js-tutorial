
import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'; 

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => await fetch('/express_backend')
    .then(res => res.json())
    .catch(err => console.error(err))

  render () {
    console.log(this.state);
    return (
      <div className="App">
        <p>{this.state.data}</p>
        <Layout/>
      </div>
    );
  }
}

export default App;
