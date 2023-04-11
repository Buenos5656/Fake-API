import './App.css';

// Importing react-router-dom
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import Home from './components/Home';
import Albums from './components/albums';
import Posts from './components/Posts';
import Todos from './components/Todos';
import Landing from './components/Landing';

//Importing ProutedRoute component
import ProtectedRoute from './Route/ProtectedRoute';
import LoginPage from './components/LoginPage';
import Photo from './components/Photo';
import Collection from './components/collection';

function App() {
  let logged = window.localStorage.getItem("isLoggedIn");

  return (
    <>
    <div>
      <Routes>
        <Route index element={logged ? <Home /> : <LoginPage />}/>
        <Route path="/" element={logged? <Home /> : <LoginPage />} />
        <Route path="login" element={logged? <Home /> :<LoginPage/>} />
        <Route path="home" element={<Home/>} />
        {/* <Route element={<ProtectedRoute isAllowed/>}> */}
          <Route path="albums" element={<Albums />} />
          <Route path="albums/:albumId" element={<Collection />} />
          <Route path="photos" element={<Photo />} />
          <Route path="posts" element={<Posts/>} />
          <Route path="todos" element={<Todos />} />
        {/* </Route> */}
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
     </Routes>
    </div>
    </>
  );
}

export default App;
