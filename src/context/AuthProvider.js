import React, { useState, createContext } from 'react'
import axios from '../axios/axios';
import users from '../users/users'

const AuthContext = createContext({});

const init = null;

const getInitalState = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null
}

const getAllUsers = async () => {
    try {

        const listOfUsers = await axios.get("users");
        return listOfUsers
    } catch(err) {
        console.log(err)
    }
    return null;
}

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(getInitalState);
    const [listUsers, setListUsers] = useState(getAllUsers)
    return (
        <AuthContext.Provider value = {{auth, setAuth, listUsers}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
