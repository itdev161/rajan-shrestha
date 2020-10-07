import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000')
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">GoodThings</header>
        {this.state.data}
      </div>
    );
  }
}
export default App;
