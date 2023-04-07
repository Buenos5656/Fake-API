import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AuthContext from '../context/AuthProvider'
import LoginPage from './LoginPage';

function Home() {
    const auth = useContext(AuthContext);
    
    return (
    <div>
            Welcome to home page
            <Link to="/posts">Posts</Link>
            <Link to="/albums">Albums</Link>
            <Link to="/todos">Todos</Link>
    </div>
  )
}

export default Home