import React, { useState } from 'react';

const StepOne = ({ onNext }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = () => {
    // Проверка данных и передача на следующий шаг
    onNext({ name, email });
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

const StepTwo = ({ formData, onPrev, onNext }) => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handlePrev = () => {
    // Возврат к предыдущему шагу
    onPrev();
  };

  const handleNext = () => {
    // Проверка данных и передача на следующий шаг
    onNext({ ...formData, address, phone });
  };

  return (
    <div>
      <h2>Step 2: Shipping Address</h2>
      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={handlePrev}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

const StepThree = ({ formData, onPrev, onConfirm }) => {
  const handlePrev = () => {
    // Возврат к предыдущему шагу
    onPrev();
  };

  const handleConfirm = () => {
    // Отправка данных о заказе
    onConfirm(formData);
  };

  return (
    <div>
      <h2>Step 3: Confirm Order</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Address: {formData.address}</p>
      <p>Phone: {formData.phone}</p>
      <button onClick={handlePrev}>Back</button>
      <button onClick={handleConfirm}>Confirm Order</button>
    </div>
  );
};

const CheckoutForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNextStep = (data) => {
    setCurrentStep(currentStep + 1);
    setFormData(data);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleConfirmOrder = (data) => {
    // Отправка данных о заказе на сервер
    console.log('Order confirmed:', data);
  };

  return (
    <div>
      {currentStep === 1 && <StepOne onNext={handleNextStep} />}
      {currentStep === 2 && <StepTwo formData={formData} onPrev={handlePrevStep} onNext={handleNextStep} />}
      {currentStep === 3 && <StepThree formData={formData} onPrev={handlePrevStep} onConfirm={handleConfirmOrder} />}
    </div>
  );
};

export default CheckoutForm;
