import React from 'react';
import CourseRow from './Courserow';
import '../styles/CourseTable.scss'

const CourseTable = ({ courses }) => {
  return (
    <div className="course-table">
      <div className="header">
        <span>Course Name</span>
        <span>Duration</span>
        <span>Level</span>
      </div>
      <div className="body">
        {courses.map(course => (
          <CourseRow key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseTable;
