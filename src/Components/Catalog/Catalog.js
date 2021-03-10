import React, { Component } from 'react';
import Course from '../Course/Course';
import { courses } from '../../courses.js';
import './Catalog.css';

class Catalog extends Component {
  displayCourses = () => {
    return courses.map((course, i) => {
      return (
        <Course
          key={i}
          courseInfo={course}
          addToCourseList={this.addToCourseList}
        />
      );
    });
  };

  render() {
    const courseCards = this.displayCourses();
    return (
      <section className="catalog">
        <h2 className="catalog-title">Available Courses</h2>
        <section className="course-container">{courseCards}</section>
      </section>
    );
  }
}

export default Catalog;
