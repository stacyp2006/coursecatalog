import React from 'react';
import './MyCourses.css';

const MyCourses = () => {
  return (
    <section className="my-courses">
      <h2 className="my-courses-title">My Courses</h2>
      <section className="course-container">{courseCards}</section>
    </section>
  );
};

export default MyCourses;
