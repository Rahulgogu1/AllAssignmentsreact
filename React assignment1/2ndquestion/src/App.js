import React from 'react';
import DoctorsDetailsTable from './DoctorsDetailsTable';

const App = () => {
  const doctorsDetails = [
    {
      doctorId: '1',
      doctorName: 'Dr. Smith',
      designation: 'Cardiologist',
      experience: '10 years',
      contactNumber: '123-456-7890',
    },
    {
      doctorId: '2',
      doctorName: 'Dr. Johnson',
      designation: 'Orthopedic Surgeon',
      experience: '8 years',
      contactNumber: '987-654-3210',
    },
    // Add more doctors as needed
  ];
 
  return (
    <div>
      <h1>Doctors Information App</h1>
      <DoctorsDetailsTable doctors={doctorsDetails} />
    </div>
  );
};

export default App;
