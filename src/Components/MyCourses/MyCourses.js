import React from 'react';
import Course from '../Course/Course';
import './MyCourses.css';

const MyCourses = ({ courseList, addToMyCourses, removeFromMyCourses }) => {
  let displayMyCourses = () => {
    return courseList.map((course, i) => {
      return (
        <Course
          key={i}
          courseInfo={course}
          addToMyCourses={addToMyCourses}
          removeFromMyCourses={removeFromMyCourses}
        />
      );
    });
  };

  const courseCards = displayMyCourses();
  return (
    <section className="my-courses">
      <h2 className="my-courses-title">My Courses</h2>
      <section className="course-container">{courseCards}</section>
    </section>
  );
};

export default MyCourses;
