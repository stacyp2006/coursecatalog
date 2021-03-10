import React from 'react';
import './Course.css';

const Course = () => {
  return (
    <div className="course-card">
      <section className="course-info">
        <h3 className="course-title">Course title</h3>
        <p className="course-id">C123456</p>
        <p className="course-time">9am MWF</p>
      </section>
      <button className="register-btn" type="button">
        Register
      </button>
    </div>
  );
};

export default Course;
