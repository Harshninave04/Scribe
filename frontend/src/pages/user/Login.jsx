import { useState } from 'react';
import Alert from '../../components/Alert';
import { loginUser } from '../../controller/usersController';

const Login = () => {
  // Error State
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  // Form Data State
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // HandleLogin

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginUser(email, password);
    } catch (error) {
      setError(error.message);
    }

    // setEmail('');
    // setPassword('');
  };
  return (
    <section className="card">
      <h1 className="title">Login to your Account</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="input"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn">Login</button>
      </form>
      {error && <Alert msg={error} />}
    </section>
  );
};

export default Login;
