import React, { Component } from 'react';
import Header from '../Header/Header';
import Student from '../Student/Student';
import Catalog from '../Catalog/Catalog';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="main-area">
        <Header />
        <section className="container">
          <Student />
          <Catalog />
        </section>
      </main>
    );
  }
}

export default App;
