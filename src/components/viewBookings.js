import React, {useState, useEffect} from 'react'
import { getDocs, collection } from 'firebase/firestore'
import {db} from '../config/firebase'

function ViewBookings() {
    const bookingRef = collection(db, "booking");
    const [booking, setBooking] = useState([]);

    const getAllBookings = () =>{
        return getDocs(bookingRef);
    }
    
    const getBookings = async () =>{
      const data = await getAllBookings();
      console.log(data.docs)
      setBooking(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
    }
    
    useEffect(()=>{
      getBookings();
    }, []);

  return (
    <div>
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
                    <th>Action</th>
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
                                <td><button>Accept</button><button>Reject</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </center>
    </div>
  )
}

export default ViewBookings