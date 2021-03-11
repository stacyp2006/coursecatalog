import React from 'react';
import Course from '../Course/Course';
import './MyCourses.css';

const MyCourses = ({ courseList, addToMyCourses, removeFromMyCourses }) => {
  let courseCards;
  if (courseList.length !== 0) {
    courseCards = courseList.map((course, i) => {
      return (
        <Course
          key={i}
          courseInfo={course}
          addToMyCourses={addToMyCourses}
          removeFromMyCourses={removeFromMyCourses}
        />
      );
    });
  } else {
    return (
      <p className="add-message">
        Return to the Home page and add some courses to your schedule.
      </p>
    );
  }

  return (
    <section className="my-courses">
      <h2 className="my-courses-title">My Courses</h2>
      <section className="course-container">{courseCards}</section>
    </section>
  );
};

export default MyCourses;
