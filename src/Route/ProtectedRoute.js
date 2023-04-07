//Adding protected route through Layout Route 
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'

const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/landing',
    children, }) => {
      console.log("Protected Route: ", isAllowed);
    if(isAllowed) {
      return children? children : <Outlet />;
    }
    return <Navigate to={redirectPath} replace/>
  }


export default ProtectedRoute;