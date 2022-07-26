import React, {useState} from 'react';
import Login from './Login';
import Register from './Register';


const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState)
  }  ;

  return (
    <div className='authContainer'>
        {!index ? <Login/> : <Register/>}
        <p onClick={toggleIndex}>
            {!index ? "don't have an acoount? Register" : "Already have an Acoount? Login"}
        </p>
    </div>
  )
}

export default Auth