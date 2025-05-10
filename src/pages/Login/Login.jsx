import { useState } from 'react';
import './Login.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { loginUser } from '../../api';

export default function Login() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const { state } = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setStatus('submitting');
    loginUser(loginFormData)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('loggedin', true);
          navigate(state ? state.pathname : '/host', {
            replace: true,
          });
        }
      })
      .catch((err) => setError(err))
      .finally(() => setStatus('idle'));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main className="login-container">
      <div className="content">
        {state?.message && <h3 className="login-error">{state.message}</h3>}
        <h1>Sign in to your account</h1>
        {error?.message && <h3 className="login-error">{error.message}</h3>}
        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            value={loginFormData.email}
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            value={loginFormData.password}
          />
          <button disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Logging in...' : 'Log in'}
          </button>
        </form>
      </div>
    </main>
  );
}
