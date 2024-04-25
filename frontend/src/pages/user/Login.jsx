import { useState } from 'react';
import Alert from '../../components/Alert';

const Login = () => {
  // Error State
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(' Ok');
  return (
    <section className="card">
      <h1 className="title">Login to your Account</h1>
      <form>
        <input type="email" placeholder="Email" className="input" autoFocus />
        <input type="password" placeholder="Password" className="input" />
        <button className="btn">Login</button>
      </form>
      {error && <Alert msg={error} />}
    </section>
  );
};

export default Login;
