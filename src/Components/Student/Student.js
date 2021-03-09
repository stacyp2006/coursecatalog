import React from 'react';
import './Student.css';

//In a more complete application, this component would render student information dynamically.

const Student = () => {
  return (
    <section className="student-area">
      <h2 className="greeting">Welcome, Student</h2>
      <h3 className="student-name">Johnny Coed</h3>
      <h4 className="student-id">S12345</h4>
      <h4 className="student-email">johnny.coed@guild.edu</h4>
    </section>
  );
};

export default Student;
