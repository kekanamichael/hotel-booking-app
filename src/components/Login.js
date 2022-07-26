 import React, { useState, useRef } from 'react'
import {useNavigate, Link} from 'react-router-dom'
/* import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../config/firebase' */
import {useUserContext} from '../context/UserContext'
import {BsFillShieldLockFill} from 'react-icons/bs'

function Login() {
    let history = useNavigate();

    const emailRef = useRef()
    const psdRef = useRef()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signInUser } = useUserContext();

    const login = (() => {
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
    history('/Profile');

        /* signInWithEmailAndPassword(auth, email, password).then(() => {
            history.push('/Display');

        }).catch((err) => {
            console.log(err);
        }) */
    })
 /*    const forgotPasswordHandler = () => {
      const email = emailRef.current.value;
      if(email) forgotPassword().then(() => {
        emailRef.current.value = "";
      });
    } */

  return (
    <div className='loginPg'>
        
       {/*  <div className='firstDiv'>
          <div className='darker'>
            <h1 className='wel'>welcome to the Luviana Hotel</h1>
            <p className='charm'>DISCOVER THE CHARM OF THE LUVIANA</p>
          </div>
        </div> */}<center>
        <div className='form1'>
{/*           <BsFillShieldLockFill style={{fontSize:'32px', marginTop:'27px', color:"navy"}}/>
 */}        <h1 className='regHeader'>Login</h1>
        <input className='input' type= "email" placeholder='Email address' 
        onChange={(e) => {setEmail(e.target.value)}} ref={emailRef} /><br/>
        <input className='input' type='password' placeholder='Password'
        onChange={(e) => setPassword(e.target.value)} ref={psdRef}/><br/>
        <button onClick={login} type='submit' className='reg'>Login</button><br/>
        {/* <p onClick={forgotPasswordHandler} style={{cursor:'pointer'}} className='loginP'>forgot password</p> */}
        <p className='loginP'>Do not have an Account? <Link to='/Register' className='loginLink'>Register</Link> </p>
        <Link to='/forgotpassword'>Forgot password?</Link><br/><br/>
        </div></center>
        
      
      
    </div>
  )
}

export default Login




































/* import React, { useRef } from 'react'
import {useUserContext} from '../context/UserContext'

const Login = () => {
  const emailRef = useRef()
  const psdRef = useRef()

  const {signInUser, forgotPassword} = useUserContext()

  const onSubmit = (e) => {
    e.prevetDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if(email && password) signInUser(email, password);
  }

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if(email) forgotPassword()
  }

  return (
    <div className='formLog'>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input placeholder='email' type='email' ref={emailRef}></input>
        <input placeholder='password' type='password' ref={psdRef}></input>
        <button type='submit'>Login</button>
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
      </form>
    </div>
  )
}
export default Login; */