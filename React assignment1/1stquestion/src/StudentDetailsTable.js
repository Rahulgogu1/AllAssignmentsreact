import React from 'react';

const StudentDetailsTable = ({ student }) => {
  const { sid, sname, course, age, total } = student;

  return (
    <div>
      <h2>Student Details</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Age</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{sid}</td>
            <td>{sname}</td>
            <td>{course}</td>
            <td>{age}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetailsTable;
