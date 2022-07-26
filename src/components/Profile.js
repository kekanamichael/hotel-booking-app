import React from 'react'
import Header from './Header'
import {GoLocation} from 'react-icons/go'
import {useUserContext} from '../context/UserContext'


import me from '../Files/Mike.jpg'

function Profile() {
    const { user } = useUserContext();
  return (
    
    <div className='main'>
        <Header />
        <div className='profNavigation'>
            <div className='personalDetails'>
                <div className='myPic'>
                    <img className='me' src={me} alt='me'/>
                </div>
                
                <div className='info'>
                    <span style={{fontWeight:"bold"}}>Michael Kekana</span>
                    <span style={{fontSize:"18px"}}><GoLocation className='locc'/>Sunnyside</span><br/><br/>
                    <span>Phone:</span><span style={{color:"dodgerblue"}}>+27 71 645 5956</span><br/><br/>
                    <span>Address:</span><span style={{color:"dodgerblue"}}>27 troye street <br/>Sunnyside<br/>Pretoria<br/>0002</span><br/><br/>
                    <span>Email:</span><span style={{color:"dodgerblue"}}>{user.email}</span><br/><br/>
                    <span>Birth Day:</span><span style={{color:"dodgerblue"}}>13 February 1999</span><br/><br/>
                    <span>Gender:</span><span style={{color:"dodgerblue"}}>Male</span><br/><br/>
                    
                    
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Profile
