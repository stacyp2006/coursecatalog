import React from 'react';
import './Course.css';

const Course = ({ courseInfo, addToCourseList }) => {
  return (
    <div className="course-card">
      <section className="course-info">
        <h3 className="course-title">{courseInfo.name}</h3>
        <p className="course-id">{courseInfo.id}</p>
        <p className="course-time">{courseInfo.time}</p>
      </section>
      <button
        className="register-btn"
        type="button"
        value={courseInfo.id}
        onClick={(event) => addToCourseList(event)}
      >
        Register
      </button>
    </div>
  );
};

export default Course;
