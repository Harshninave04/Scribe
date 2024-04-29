import { useState } from 'react';
import Alert from '../../components/Alert';
import { registerUser } from '../../controller/usersController';

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
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await registerUser(formData.email, formData.password, formData.confirmPassword);
    } catch (error) {
      setError(error.message);
    }
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
