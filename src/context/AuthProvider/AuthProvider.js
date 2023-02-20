import React, { createContext } from 'react';
import useData from '../../hooks/useData';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const allContexts = useData();
    
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;