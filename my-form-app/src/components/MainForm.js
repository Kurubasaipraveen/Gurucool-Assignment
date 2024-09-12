import React, { useState, useEffect } from 'react';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Confirmation from './Confirmation';

const MainForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    personal: {},
    address: {}
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData')) || { personal: {}, address: {} };
    setFormData(savedData);
  }, []);

  const handleNext = (data) => {
    setFormData(prev => ({ ...prev, [step === 0 ? 'personal' : 'address']: data }));
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData);
    localStorage.removeItem('formData');
    alert('Form submitted successfully!');
  };

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="form-container">
      {step === 0 && <PersonalInfo data={formData.personal} onNext={handleNext} />}
      {step === 1 && <AddressInfo data={formData.address} onNext={handleNext} onBack={handleBack} />}
      {step === 2 && <Confirmation data={{ ...formData.personal, ...formData.address }} onBack={handleBack} onSubmit={handleSubmit} />}
    </div>
  );
};

export default MainForm;
