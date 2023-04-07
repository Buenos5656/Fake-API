import './App.css';

// Importing react-router-dom
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import Home from './components/Home';
import Albums from './components/albums';
import Posts from './components/Posts';
import Todos from './components/Todos';
import Landing from './components/Landing';
import { useContext, useEffect, useState } from 'react';
import AuthContext, { AuthProvider } from './context/AuthProvider';

//Importing ProutedRoute component
import ProtectedRoute from './Route/ProtectedRoute';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const {auth, setAuth} = useContext(AuthContext);
  const handleLogin = () => {
    setAuth({
      id: '1', 
      user: 'Avaya',
      permissions: ['read'],
      role: ['normal'],
    });
  }
  const handleLogout = () => {
    setAuth(null);
    localStorage.removeItem('user');
    setIsAuthorized(false);
  }

  //Authorized function
  const checkAuthorized = () => {
    const myObject = localStorage.getItem("user");
    console.log("Authorized function: ", !!myObject);
    setIsAuthorized(!!myObject);
    return !!myObject;
  }

  const updateAuth = () => {
    if (!!auth == false && checkAuthorized == true){
      const myObject = localStorage.getItem("user");
      setAuth(JSON.parse(myObject));
    }
  }

  useEffect(()=>{
    // console.log("auth: ", auth);
    const myObject = localStorage.getItem("user");

    //Since user is not present, store the user into localStorage
    if(!myObject && !!auth){
      localStorage.setItem("user", JSON.stringify(auth));
      setIsAuthorized (true);
    }
  }, [auth]);

  //Check authorized or not:
  useEffect(()=>{
    checkAuthorized();
    updateAuth();
  }, [isAuthorized]);

  return (
    <>
    {isAuthorized? 
      (
      <button onClick={handleLogout}>Logout</button>
      )
      :
      (
      <button onClick={handleLogin}>Login</button>
      )
    }

    <div>
      <Routes>
        <Route index element={<Landing />}/>
        <Route path="/landing" element={<Landing/>} />
        <Route element={<ProtectedRoute isAllowed={!!auth}/>}>
          <Route path="/home" element={<Home />}/>
          <Route path="/albums" element={<Albums />} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/todos" element={<Todos />} />
        </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
     </Routes>
    </div>
    </>
  );
}

export default App;
