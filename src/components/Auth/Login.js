import React from 'react';
import { getLoginURL } from '../../utils/auth';

function Login() {
  const handleLogin = () => {
    window.location.href = getLoginURL();
  };

  return (
    <div className="login-container">
      <h1>Welcome to Your Spotify Wrapped</h1>
      <button onClick={handleLogin}>Log in with Spotify</button>
    </div>
  );
}

export default Login;
