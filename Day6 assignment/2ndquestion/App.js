// App.js
import React from 'react';
import EmployeeTable from './EmployeeTable';

const App = () => {
  // Sample array of employee objects
  const employees = [
    { id: 1, name: 'John Doe', position: 'Developer', salary: 60000 },
    { id: 2, name: 'Jane Smith', position: 'Designer', salary: 55000 },
    { id: 3, name: 'Bob Johnson', position: 'Manager', salary: 75000 },
  ];

  return (
    <div>
      <h1>Employee Management App</h1>
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default App;
