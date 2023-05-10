import { useContext } from 'react';
import { AuthContext } from './AuthContext'

export const login = (employeeEmail,employeePassword) => {
    return fetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify({email : employeeEmail, password : employeePassword}),
        headers: {
            'context-type': 'application/json'
        }
    })
}

export const logout = () => {
    return fetch('/auth/logout', {
        method : 'POST'
    })
}

export const useAuth = () => {
    return useContext(AuthContext)
}