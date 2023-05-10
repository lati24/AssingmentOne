import {useNavigate} from 'react-router-dom'
import React, {useState} from 'react'
import {ethers} from 'ethers'

function Explorer() {
    let navigate = useNavigate();
    const loginBtn = () => {
        let path = '/login';
        navigate(path);
    }
    const regBtn = () => {
        let path = '/register';
        navigate(path);
    }
    return (
        <div className='container-fluid'>
            <div className = 'row justify-content-between'>
                <nav className='navbar'>
                    <div className='menu'>
                        <span>
                            <button className='login' onClick={loginBtn}>Login</button>
                        </span>
                    </div>
                    <div className='menu'>
                        <span>
                            <button className='register' onClick={regBtn}>Register</button>
                        </span>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Explorer