import React from 'react';
// import MyCourses from '../MyCourses/MyCourses';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="page-header">
      <h1 className="title">Course Catalog</h1>
      <nav className="nav-area">
        <Link className="my-courses-link" to="/mycourses">
          My Courses
        </Link>
      </nav>
    </header>
  );
};

export default Header;
