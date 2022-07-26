import React, {useState, useEffect} from 'react'
import { getDocs, collection } from 'firebase/firestore'
import {db} from '../config/firebase'
import Header from './Header'

function Bookings() {
  const bookingRef = collection(db, "booking");
  const [booking, setBooking] = useState([]);
  const [allBookings, setAllBookings] = useState([]);

/* 

  const getAllBookings = () =>{
      return getDocs(bookingRef);
  }
  
  const getBookings = async () =>{
    const data = await getAllBookings();
    console.log(data.docs)
    setBooking(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
  }
  
  useEffect(()=>{
    const getDetails = async()=>{
      const
    }
    getBookings();
  }, []);
 */
useEffect (()=> {
  const getDetails = async() => {
    const data = await getDocs(bookingRef);
    const getForSpecific = [];
    var email = localStorage.getItem('userEmail');
    setAllBookings(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
    console.log(email)

    for(var booking = 0; booking < allBookings.length; booking++){
      if(allBookings[booking].email === email){
        getForSpecific.push(allBookings[booking])
      }
    }
    setBooking(getForSpecific)
    console.log(booking)

  }
  getDetails();
})
  return (
    <div>
        <Header/>
        <center>
            <h1>Bookings</h1>
            <table className='ftable'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email address</th>
                    <th>Phone</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Adult(s)</th>
                    <th>Children</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    {booking.map((doc, index) =>{
                        return (
                            <tr key={doc.id}>
                                <td>{index + 1}</td>
                                <td>{doc.firstName}</td>
                                <td>{doc.email}</td>
                                <td>{doc.phone}</td>
                                <td>{doc.checkIn}</td>
                                <td>{doc.checkOut}</td>
                                <td>{doc.adult}</td>
                                <td>{doc.children}</td>
                                <td style={{color:"red"}}>Pending</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </center>
    </div>
  )
}

export default Bookings
