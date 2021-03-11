import React, { Component } from 'react';
import Header from '../Header/Header';
import Student from '../Student/Student';
import Catalog from '../Catalog/Catalog';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myCourses: [],
    };
  }

  addToMyCourses = (newCourse) => {
    const selectedCourse = this.state.myCourses.find(
      (course) => course.id === newCourse.id
    );
    if (!selectedCourse) {
      this.setState({ myCourses: [...this.state.myCourses, newCourse] });
    }
  };

  removeFromMyCourses = (id) => {
    this.setState((state) => {
      const list = state.myCourses.filter((course) => course.id !== id);
      return {
        list,
      };
    });
  };

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
