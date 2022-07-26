import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {useUserContext} from '../context/UserContext'

function Forgot({history}) {
     let his = useNavigate();

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const { forgotPassword } = useUserContext();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const config = {
            url:"http://localhost:3000/Login",
            handleCodeInApp:true,
        };
        await forgotPassword(email, config)
        .then(()=>{
            setEmail('')
            setLoading(false);
            toast.success('Link for password reset sent to your email');
            his('/Login')

        }).catch((error)=>{
            setLoading(false);
            toast.error(error.message)
            console.log("ERROR MESSAGE IN FORGOT PASSWORD", error)
        })
    }
  

  return (
    <div className='loginPg'>
         
       {/*  <div className='firstDiv'>
          <div className='darker'>
            <h1 className='wel'>welcome to the Luviana Hotel</h1>
            <p className='charm'>DISCOVER THE CHARM OF THE LUVIANA</p>
          </div>
        </div> */}
        <form onSubmit={handleSubmit} className='form1'>
        <h1 className='regHeader'>Reset password</h1>
        <input className='input' type= "email" placeholder='Email address' 
        onChange={(e) => {setEmail(e.target.value)}} value={email} /><br/>
        
        <button type='submit' className='reg'>Submit</button><br/>
        </form>

       
      
    </div>
  )
}

export default Forgot
