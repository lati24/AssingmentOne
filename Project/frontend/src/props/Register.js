import {useRef,useState} from 'react';
import { Link } from 'react-router-dom';
function Register() {
    const [employeeEmail, setEmployeeEmail] = useState('');
    const [employeeAddress, setEmployeeAddress] = useState('');
    const [msg, setMsg] = useState('');
    const passInput = useRef(null);
    const rePassInput = useRef(null);

    const validatePassword = function(event){
        if(passInput.current.value === rePassInput.current.value){
            passInput.current.classList.remove('is-invalid')
            rePassInput.current.classList.remove('is-invalid')
            passInput.current.classList.add('is-valid')
            rePassInput.current.classList.add('is-valid')
            return true
        } else {
            passInput.current.classList.add('is-invalid')
            rePassInput.current.classList.add('is-invalid')
            return false
        }
    }

    const registerAccount = function() {
        if (employeeEmail && employeeAddress){
            if(validatePassword()){
                var data = {
                    employeeEmail: employeeEmail,
                    employeeAddress: employeeAddress,
                    employeePassword: passInput.current.value
                }
                fetch('/auth/register',{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'content-type':'application/json'
                    }
                })
                .then((res) => res.json)
                .then((data) => {
                    if(data.type === 'sucess'){
                        setMsg(<span className='text-sucess'>{data.msg}</span>)
                    } else {
                        setMsg(<span className='text-danger'>{data.msg}</span>)
                    }
                })
            } else {
                setMsg('Password does not match')
            }
        } else {
            setMsg('Empty fields!')
        }
        setTimeout(() => {
            setMsg('')
        }, 5000 )
    }

    return(
        <div className='container-fluid'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-4 shadow p-5 text-center'>
                    <p className='fst-italic'>{msg}</p>
                    <p className='Reg'>Register</p>
                    <input type='text' className='form-control form-control-sm mb-3' placeholder="Email" onChange={(e) => {setEmployeeEmail(e.target.value)}}/>
                    <input type='text' className='form-control form-control-sm mb-3' placeholder="Address" onChange={(e) => {setEmployeeAddress(e.target.value)}}/>
                    <input type='password' className='form-control form-control-sm mb-3' placeholder='Enter Password' ref={passInput} />
                    <input type='password' className='form-control form-control-sm mb-3' placeholder='Retype Password' ref={rePassInput} onChange={validatePassword} />
                    <button className='btn btn-primary btn-sm mb-3' onClick={registerAccount}>Create an Account</button>
                    <p>
                        <Link to='/login'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register