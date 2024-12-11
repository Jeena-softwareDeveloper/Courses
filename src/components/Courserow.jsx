import React from 'react';

import '../styles/CourseRow.scss'
const CourseRow = ({ course }) => {
  return (
    <div className="course-row">
      <span>{course.name}</span>
      <span>{course.duration}</span>
      <span>{course.level}</span>
    </div>
  );
};

export default CourseRow;
