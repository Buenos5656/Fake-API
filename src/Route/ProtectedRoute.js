//Adding protected route through Layout Route 
import { useContext } from 'react';
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import AuthContext from '../context/AuthProvider';

const ProtectedRoute = ({
    isAllowed=false,
    redirectPath = '/home',
    children, }) => {
      const auth = useContext(AuthContext);
      isAllowed= !!auth.auth;
      console.log("Protected Route: ", isAllowed);
      console.log("Protected routh: auth? ", auth.auth);
      if(isAllowed) {
        return children? children : <Outlet />;
      }
      return <Navigate to={redirectPath} replace/>
  }

export default ProtectedRoute;