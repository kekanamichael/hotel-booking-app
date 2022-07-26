import './App.css';
import Register from './components/Register'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import {useUserContext} from './context/UserContext'
import AddHotel from './components/AddHotel'
import Login from './components/Login';
import Home from './components/Home';
import Display from './components/Display';
import Welcome from './components/welcome';
import Auth from './components/Auth';
import Book from './components/book';
import Forgot from './components/forgotPassword';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ViewBookings from './components/viewBookings';
import Profile from './components/Profile';
import Bookings from './components/Bookings';
import Notifications from './components/Notifications';

function App() {
  const {loading, error, user} = useUserContext();

  const [hotelID, setHotelID] = useState("");
  
  const getHotelIdHandler = (id) =>{
    console.log("The ID of document to be  updated: ", id);
    setHotelID(id)
  }

  return (  
    <div className="App">
      <ToastContainer position='top-center'/>
        <Routes>
        {/* {error && <p className='err'>{error}</p>} */}
         
          <Route exact path='/' element={<Home/>}>
          </Route>
          <Route  path='/Login' element={<Login/>}>
          </Route>
          <Route path='/Register' element={<Register/>}>
          </Route>
          <Route path='/Display' element={<Display></Display>}>
          </Route>
          <Route path='/book' element={<Book/>}>
          </Route>
          <Route path='/AddHotel' element={<AddHotel id={hotelID} setHotelID={setHotelID}/>}>
          </Route>
          
        <Route path='/forgotpassword' element={ <Forgot />}>
           
          </Route>
          <Route path='/viewBookings' element = {<ViewBookings />}>
            
          </Route>
          <Route path='/Bookings' element={<Bookings />}>
            
          </Route>
          <Route path='/Notifications' element={<Notifications />}>
            </Route>
          { <>{user ? <Route path='/Profile' element={<Profile/>}></Route> : <Route path='/Login' element = {<Auth />}></Route>} </>} 

            
          
          </Routes>
        
       
    </div>
  );
}

export default App;
