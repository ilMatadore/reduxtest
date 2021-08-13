import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.component';
import React from 'react';

class App extends React.Component {


  render() {   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header />
        </header>
      </div>
    );
    }
}

export default (App);
