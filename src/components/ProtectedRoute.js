import { Navigate, Outlet } from "react-router-dom";
import cookie from 'cookie'

const ProtectedRoute = (props) => {

  const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["shintoUser"] && cookies["shintoken"] ? true : false;
  };

  return (
    checkAuth() 
        ? <Outlet /> 
        : <Navigate to="/login" />
  );
};

export default ProtectedRoute;
