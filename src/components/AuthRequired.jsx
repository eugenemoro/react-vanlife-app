import { Outlet, Navigate, useLocation } from 'react-router-dom';

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem('loggedin');
  const location = useLocation();

  if (!isLoggedIn)
    return (
      <Navigate
        to="login"
        state={{
          message: 'You must log in first',
          pathname: location.pathname,
        }}
        replace
      />
    );
  return <Outlet />;
}
