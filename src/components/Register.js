/* import React, { useRef } from 'react'
import {useUserContext} from '../context/UserContext'
impoert {FaStarOfLife} from 'react-icons/fa'

const Register = () => {
  const emailRef = useRef()
  const nameRef = useRef()
  const psdRef = useRef()

  const {registerUser} = useUserContext()

  const onSubmit = (e) => {
    e.prevetDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if(email && name && password) registerUser(email, name, password);
  }

  return (
    <div className='formLog'>
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <input placeholder='Name' type='name' ref={nameRef}></input>
        <input placeholder='email' type='email' ref={emailRef}></input>
        <input placeholder='password' type='password' ref={psdRef}></input>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
};

export default Register; */



import  { useRef } from 'react'
import React, { useState } from 'react'
import  { useNavigate, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import {FaStarOfLife} from 'react-icons/fa'


function Register() {
    let history = useNavigate();

    const emailRef = useRef()
    const nameRef = useRef()
    const psdRef = useRef()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Register = () => {

        createUserWithEmailAndPassword(auth, email, password).then(() =>{
            history("/Login");
            console.log('user successfully added')

        }).catch((error)=>{
            console.log(error);
        })

    }

  return (
    <div className='loginPg'>
     {/*  <div className='div'>
        <div className='firstDiv'>
          <div className='darker'>
            <h1 className='wel'>welcome to the Luviana Hotel</h1>
            <p className='charm'>DISCOVER THE CHARM OF THE LUVIANA</p>
          </div>
        </div> */}
        <center>
                  <div className='form1'>
          <h1 className='regHeader'>Register</h1>
          <input className='input' type= "email" placeholder='Email address'
          onChange={(e) => setEmail(e.target.value)} /><br/>
          <input className='input' type='password' placeholder='Password'
          onChange={(e) => setPassword(e.target.value)} /><br/>
          <button onClick={Register} type='submit' className='reg'>Register</button><br/>
          <p className='loginP'>Already have an Account? <Link to='/Login' className='loginLink'>Login</Link> </p>
        </div></center>

      
      
    </div>
  )
}
export default Register; 
 