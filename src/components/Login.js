import '../styles/Reset.css'
import '../styles/Login.css'

import React,{useState} from 'react';
import LoginInput from './LoginInput'

import users from '../data/users'






function validateUser(email, password, setError, 
    setCurrentUser, setPageState, usersWhoVoted) {    
    let chosen = users.filter( function (user) {
        return (user.email === email) && (user.password === password);
    });


    if(chosen.length === 0) {
        //error message
        setError(true);
    }
    else if(usersWhoVoted[chosen[0].id] !== -1) {
        setError(true);
    }
    else {
        //set selected user
        setCurrentUser(chosen[0]);
        if(chosen[0].type === 'user') {
            setPageState(1); //user voting page
        }
        else {
            setPageState(2); //admin, user page
        }
    }
}

function ErrorMessage(props) {
    if(props.error) {
        return (
            <h3 className='error-message'>*Invalid user</h3>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

function Login(props) {
    //Get button click callback function
    const [error, setError] = useState(false);
    
    return (
        <div className="Login-container">
            <div className='Login-title-container'>
                <h1 className='Login-title'>Login Screen</h1>
            </div>
            <div className='Login-input-container'>
                <LoginInput 
                    text="Email:"
                />
                <LoginInput 
                    text="Password:"
                />
            </div>
            <div className='error-container'>
                <ErrorMessage
                    error={error}
                />
            </div>
            <div className='button-container'>
                <button className='button-login' onClick={() => {
                    const inputs = document.querySelectorAll('.LoginInput input');
                    validateUser(inputs[0].value, inputs[1].value, setError, props.setCurrentUser, props.setPageState, props.usersWhoVoted);
                }}>
                    Login
                </button>
            </div>
        </div>
    )
}


export default Login;
