import React, { Component } from 'react';
import Header from '../Header/Header';
import Student from '../Student/Student';
import MyCourses from '../MyCourses/MyCourses';
import { Route } from 'react-router-dom';
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
          <Route
            exact
            path="/"
            render={() => (
              <Catalog
                addToMyCourses={this.addToMyCourses}
                removeFromMyCourses={this.removeFromMyCourses}
              />
            )}
          />
          <Route
            exact
            path="/mycourses"
            render={() => (
              <MyCourses
                courseList={this.state.myCourses}
                removeFromMyCourses={this.removeFromMyCourses}
              />
            )}
          />
        </section>
      </main>
    );
  }
}

export default App;
