import React, { Component } from 'react';
import './Course.css';

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMyCourse: false,
    };
  }

  addCourse = (event) => {
    let newCourse = {
      name: this.props.name,
      key: this.props.id,
      id: this.props.id,
      time: this.props.time,
    };
    this.setState({ isMyCourse: true });
    this.props.addToMyCourses(newCourse);
  };

  removeCourse = (event) => {
    this.setState({ isMyCourse: false });
    let id = this.props.courseInfo.id;
    this.props.removeFromMyCourses(id);
  };

  render() {
    return (
      <div className="course-card">
        <section className="course-info">
          <h3 className="course-title">{this.props.courseInfo.name}</h3>
          <p className="course-id">{this.props.courseInfo.id}</p>
          <p className="course-time">{this.props.courseInfo.time}</p>
        </section>
        {!this.state.isMyCourse && (
          <button
            className="register-btn"
            type="button"
            value={this.props.courseInfo.id}
            onClick={(event) => this.addCourse(event)}
          >
            Register
          </button>
        )}
        {this.state.isMyCourse && (
          <button
            className="remomve-btn"
            type="button"
            value={this.props.courseInfo.id}
            onClick={(event) => this.removeCourse(event)}
          >
            Remove
          </button>
        )}
      </div>
    );
  }
}

export default Course;
