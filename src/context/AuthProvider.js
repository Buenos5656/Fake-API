import React, { useState, createContext } from 'react'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    // const [auth, setAuth] = useState(null);
    const [auth, setAuth] = useState({user: 'Avaya', roles:'5001'});

    return (
        <AuthContext.Provider value = {{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;
