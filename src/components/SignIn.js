import React, { useState } from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
        </Link>

        <div className='login_container'>
            <h1>Sign-In</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} />

                <h5>Password</h5>
                <input type='password'/>

                <button className='login_signInButton'>Sign In</button>
                <p>By sigining-in you agree to the AMAZON FAKE CLONE Conditions of Use & sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className='login_registerButton'>Create your amazon account</button>
            </form>
        </div>

    </div>
  )
}

export default SignIn