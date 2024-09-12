import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';

const AddressInfo = ({ data, onNext, onBack }) => {
  const [addressLine1, setAddressLine1] = useState(data.addressLine1 || '');
  const [addressLine2, setAddressLine2] = useState(data.addressLine2 || '');
  const [city, setCity] = useState(data.city || '');
  const [state, setState] = useState(data.state || '');
  const [zipCode, setZipCode] = useState(data.zipCode || '');

  useEffect(() => {
    setAddressLine1(data.addressLine1 || '');
    setAddressLine2(data.addressLine2 || '');
    setCity(data.city || '');
    setState(data.state || '');
    setZipCode(data.zipCode || '');
  }, [data]);

  const handleSubmit = () => {
    const zipCodePattern = /^[0-9]{6}$/; 
    if (addressLine1 && city && state && zipCodePattern.test(zipCode)) {
      onNext({ addressLine1, addressLine2, city, state, zipCode });
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <div>
      <h2>Address Information</h2>
      <TextField
        label="Address Line 1"
        value={addressLine1}
        onChange={(e) => setAddressLine1(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address Line 2"
        value={addressLine2}
        onChange={(e) => setAddressLine2(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Zip Code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        fullWidth
        margin="normal"
        placeholder="12345"
      />
      <Button variant="contained" color="secondary" onClick={onBack}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Next
      </Button>
    </div>
  );
};

export default AddressInfo;
