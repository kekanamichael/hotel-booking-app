import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useUserContext} from '../context/UserContext'

import '../css/header.css'

function Header() {

    const [activeTab, setActiveTab] = useState("Profile")
    const { user, logoutUser } = useUserContext();

    const locc = useLocation();

    useEffect(()=>{
        if(locc.pathname === "/Profile") {
            setActiveTab("Profile")
        }else if(locc.pathname === "/Display") {
            setActiveTab("Display")
        }else if(locc.pathname === "/Bookings") {
            setActiveTab("Bookings")
        }else if(locc.pathname === "/Notificatins") {
            setActiveTab("Notifications")
        }
    }, [locc])
  return (
    <div className='profileHeader'>
        <p className='myDeatails'>{user.email}</p>
        <div className='header-right'>
            <Link to="/Profile">
                <p className={`${activeTab === "Profile" ? "active" : ""}`} 
                onClick={()=>setActiveTab("Profile")}>Profile</p>
            </Link>
            <Link to="/Display">
                <p className={`${activeTab === "Display" ? "active" : ""}`} 
                onClick={()=>setActiveTab("Display")}>Availabe Hotels</p>
            </Link>
            <Link to="/Bookings">
                <p className={`${activeTab === "Bookings" ? "active" : ""}`} 
                onClick={()=>setActiveTab("Bookings")}>Bookings</p>
            </Link>
            <Link to="/Notifications">
                <p className={`${activeTab === "Notifications" ? "active" : ""}`} 
                onClick={()=>setActiveTab("Notifications")}>Notifications</p>
            </Link>
            <button onClick={logoutUser}>Logout</button>
        </div>
      
    </div>
  )
}

export default Header
