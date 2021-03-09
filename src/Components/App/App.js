import React, { Component } from 'react';
import Header from '../Header/Header';
import Student from '../Student/Student';
// import './App.css';

class App extends Component {
  render() {
    return (
      <main className="main-area">
        <Header />
        <Student />
      </main>
    );
  }
}

export default App;
