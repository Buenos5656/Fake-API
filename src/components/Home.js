import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AuthContext from '../context/AuthProvider'
import LoginPage from './LoginPage';

import Signin  from '../utils/login';
// import {signout} from '../utils/logout';

import './home.css'

import axios from '../axios/axios';

import Posts from './Posts';

function Home() {
    const auth = useContext(AuthContext);

    return (
    <div>
    {auth.auth ? <Posts /> : <div>Please login</div>}
    
 
    </div>
  )
}

export default Home