import React from 'react';

const EmployeeTable = () => {
  // Sample array of employee objects
  const employees = [
    { id: 1, name: 'John Doe', position: 'Developer', salary: 60000 },
    { id: 2, name: 'Jane Smith', position: 'Designer', salary: 55000 },
    { id: 3, name: 'Bob Johnson', position: 'Manager', salary: 75000 },
  ];

  return (
    <div>
      <h2>Employee Table</h2>
      <table>
        <thead>
          <tr>
            {/* Dynamic header based on the keys of the first employee object */}
            {Object.keys(employees[0]).map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Iterate over each employee object and generate a table row */}
          {employees.map(employee => (
            <tr key={employee.id}>
              {/* Iterate over each property of the employee object and generate cells */}
              {Object.values(employee).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
