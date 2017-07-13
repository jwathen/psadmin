import React from 'react';

const CourseListRow = ({ course }) => {
  return (
    <tr>
      <td />
      <td>
        {course.title}
      </td>
      <td>
        {course.authorId}
      </td>
      <td>
        {course.Category}
      </td>
      <td>
        {course.length}
      </td>
    </tr>
  );
};

export default CourseListRow;
