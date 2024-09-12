import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';

const PersonalInfo = ({ data, onNext }) => {
  const [name, setName] = useState(data.name || '');
  const [email, setEmail] = useState(data.email || '');
  const [phone, setPhone] = useState(data.phone || '');

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData')) || {};
    setName(storedData.name || '');
    setEmail(storedData.email || '');
    setPhone(storedData.phone || '');
  }, []);

  const handleSubmit = () => {
    const phonePattern = /^[0-9]{10}$/; 
    if (name && email.includes('@') && phonePattern.test(phone)) {
      localStorage.setItem('formData', JSON.stringify({ name, email, phone }));
      onNext({ name, email, phone });
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        fullWidth
        margin="normal"
        placeholder="1234567890"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Next
      </Button>
    </div>
  );
};

export default PersonalInfo;
