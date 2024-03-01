import { useState } from 'react';
import "./App.css";
function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    city: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваша логика для отправки данных
    console.log('Форма отправлена:', formData);
  };

  const nextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const prevStep = (e) => {
    setStep(step - 1);
    e.preventDefault();
  };

  switch (step) {
    case 1:
      return (
        <form onSubmit={(e) => nextStep(e)} >
            <span>Step - {step}</span>
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
          <button type="submit">Next</button>
        </form>
      );
    case 2:
      return (
        <form onSubmit={(e) => nextStep(e)} className='form'>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <button onClick={prevStep}>Back</button>
          <button type="submit">Next</button>
        </form>
      );
    case 3:
      return (
        <form onSubmit={(e) => nextStep(e)} className='form'>
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </label>
          <label>
            Country:
            <input type="text" name="country" value={formData.country} onChange={handleChange} />
          </label>
          <button onClick={prevStep}>Back</button>
          <button type="submit">next</button>
        </form>
      );
    case 4:
        return (
            <form onSubmit={handleSubmit} className='form'>
                 <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </label>
          <label>
            Country:
            <input type="text" name="country" value={formData.country} onChange={handleChange} />
          </label>
            <button onClick={prevStep}>Back</button>
            <button type="submit">send</button>
          </form>
        )
    default:
      return null;
  }
}

export default MultiStepForm;