import React from 'react'
import { useState, useEffect } from 'react';
import {db} from '../config/firebase'
import {addDoc, getDocs, collection, getDoc, doc} from 'firebase/firestore'
import { useLocation } from 'react-router-dom'
import {useUserContext} from '../context/UserContext'
import {BsPaypal} from 'react-icons/bs'
import {CgClose} from 'react-icons/cg'

function Book() {
  const bookingRef = collection(db, "booking");
  const collectionRef = collection(db, "Hotel");

  const { user } = useUserContext();
  const [booking, setBooking] = useState([]);
  const [hotelDetails, setHotelDetails] = useState([]);

  const [firstName, setFirstName] = useState(0);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState('');
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [checkIn, setCheckin] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [total, setTotal] = useState(0)

  const {state} = useLocation();
  const { id } = state
  const [hotel, setHotel] = useState({})

/*   const date1 = new Date(checkIn);
const date2 = new Date(checkOut);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffTime + " milliseconds");
console.log(diffDays + " days"); */

   useEffect(() => 
        {setHotel(id)
        console.log("ID: ", hotel)

        if(checkIn !== '' && checkOut !== '') {
          const date1 = new Date(checkIn)
          const date2 = new Date(checkOut)
          const diffTime = Math.abs(date2 - date1);
          setTotal(Math.ceil(diffTime / (24*3600*1000) * Number(hotel.fee))); 
         /*  setTotal(((date2.getTime() - date1.getTime)/(24*3600*1000)) * Number(hotel.fee)) */
          /* console.log(diffDays + " Days") */
         /*  console.log(checkIn + " Days") */
        }

   }) 
 

  const getOneHotel = () =>{
    return getDocs(collectionRef);
}
useEffect(()=>{
    getHotel();
}, []);

const getHotel = async () =>{
    const data = await getOneHotel();
    setHotelDetails(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
} 

  const onSubmit = (e) => {
    e.preventDefault()
    const book ={
      firstName:firstName,
      email:email,
      phone:phone,
      checkIn:checkIn,
      checkOut:checkOut, 
      adult:adult,
      children:children,
      total:total
    };
    addDoc(bookingRef, book).then(()=>{
      alert("booked successfully")
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className='myBooking'>
        <center>
            
            <form onSubmit={onSubmit} className='formReserve'>
                <br/><br/>
                <h1 style={{fontSize:"40px"}} className='makeareservation'>Make a reservation</h1><br/><br/><br/><br/>
                <input className='abcd' type='text' placeholder='Name' 
                onChange={(e) => setFirstName(e.target.value)} required/>
                <input className='abcd' type='email' placeholder='Email address' 
                /* onChange={(e) => setEmail(e.target.value)} */ value={email} required/>
                <input className='abcd' type='tel' placeholder='Phone' 
                onChange={(e) => setPhone(e.target.value)} required/><br/>
                <input className='abcd' placeholder="Check- In :" type="date" 
                onChange={(event) => setCheckin(event.target.value)}style={{width:'32%', fontSize:"20px" }} required/>
                <input className='abcd' placeholder="Check-Out :" type="date" 
                onChange={(e) => setCheckOut(e.target.value)} style={{width:'32%', fontSize:"20px" }} required/><br/>
                <input style={{width: "32%"}} className='abcd' placeholder="Adult " type="number" 
                onChange={(e) => setAdult(e.target.value)} required/>
                <input style={{width: "32%"}} className='abcd' placeholder="Children " type="number" 
                onChange={(e) => setChildren(e.target.value)} required/><br/>

                <div className='pay'>
                  <p>Please select Payment Method:</p>
                  <input type="radio" id="html" name="fav_language" value="PayPal"/>
                  <label for="html">PayPal</label><br/>
                  <input type="radio" id="css" name="fav_language" value="CSS"/>
                  <label for="css">Pay with VISA</label><br/><br/>
{/* 
                  <div className='popup'>
                    <div className='popuphead'>
                      <p><BsPaypal /></p>
                      <p><CgClose /></p>
                     
                    </div>
               
                    <div className='payBody'>
                      <div className='paypal'>
                        <p><BsPaypal />PayPal</p><p>R{total}</p>
                      </div>
                      <hr></hr>
                      <div className='paymentForm'>
                        <h3>Pay with debit or credit card</h3>
                        <p>we dont share don't share your financial details with merchant</p>
                        
                      </div>
                    </div>
                  </div> */}
                 
                <div className='totalFee'><p>Total Fee:</p><p>R{total}</p> <br/>
                </div>
               </div>
                <button type='submit' className='rs'>Reserve</button>
            </form>
        </center>
    </div>
  )
}

export default Book