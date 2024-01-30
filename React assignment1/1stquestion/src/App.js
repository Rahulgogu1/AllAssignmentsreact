import React from 'react';
import StudentDetailsTable from './StudentDetailsTable';

const App = () => {
  const studentDetails = {
    sid: '123',
    sname: 'John Doe',
    course: 'Computer Science',
    age: 20,
    total: 95,
  };

  return (
    <div>
      <h1>Student Information App</h1>
      <StudentDetailsTable student={studentDetails} />
    </div>
  );
};

export default App;
