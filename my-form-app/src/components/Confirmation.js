import React from 'react';
import { Button } from '@mui/material';

const Confirmation = ({ data, onBack, onSubmit }) => {
  return (
    <div>
      <h2>Confirmation</h2>
      <h3>Personal Information:</h3>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Phone Number: {data.phone}</p>
      
      <h3>Address Information:</h3>
      <p>Address Line 1: {data.addressLine1}</p>
      <p>Address Line 2: {data.addressLine2}</p>
      <p>City: {data.city}</p>
      <p>State: {data.state}</p>
      <p>Zip Code: {data.zipCode}</p>
      
      <Button variant="contained" color="secondary" onClick={onBack}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Confirmation;
