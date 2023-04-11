import React, { useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import './posts.css'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from './LoginPage';

function Sidebar() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    function logout(){
  
        window.localStorage.removeItem("isLoggedIn");
        auth.setAuth(null);
        navigate('/login')
      }


    return (

    <div class="sidebar">
            <div class="profile">
                <img src="https://kilbergmedia.com/images/myAvatar.png" alt="profile_picture" />
                <h3>{auth.auth.username}</h3>
                {/* <p>Designer</p> */}
            </div>
            <ul>
                <li>
                    <Link to="/home" class="active" replace>
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="posts" replace>
                        <span class="icon"><i class="fas fa-desktop"></i></span>
                        <span class="item">Posts</span>
                    </Link>
                </li>
                <li>
                    <Link to="albums" replace >
                        <span class="icon"><i class="fas fa-user-friends"></i></span>
                        <span class="item">Albums</span>
                    </Link>
                </li>
                {/* <li>
                    <Link to="todos" replace>
                        <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
                        <span class="item">Todos</span>
                    </Link>
                </li> */}
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-sign-out"></i></span>
                        <span class="item" onClick={logout}>SignOut</span>
                    </a>
                </li>
            
            </ul>
        </div>
  )
}

export default Sidebar
