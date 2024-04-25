import { useState } from 'react';
import Alert from '../../components/Alert';

const Register = () => {
  // Error State
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  // Form Data State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section className="card">
      <h1 className="title">Create a new account</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          className="input"
          autoFocus
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
        <button className="btn">Register</button>
      </form>
      {error && <Alert msg={error} />}
    </section>
  );
};

export default Register;
