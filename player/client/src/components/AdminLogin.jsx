import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AdminLogin = ({ onLogin }) => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  React.useEffect(() => {
    if (isAuthenticated && user.email === 'admin@example.com') {
      onLogin('admin');
    }
  }, [isAuthenticated, user, onLogin]);

  return (
    <div>
      <h2>Admin Login</h2>
      <button onClick={() => loginWithRedirect()}>Login with Google</button>
    </div>
  );
};

export default AdminLogin;
