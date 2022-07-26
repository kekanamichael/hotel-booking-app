import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { getDocs, collection, getDoc, doc} from 'firebase/firestore'
import {db} from '../config/firebase'
import {useUserContext} from '../context/UserContext'
/* import {storage} from '../config/firebase' */
/* import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage' */
/* import { signOut } from 'firebase/auth' */
import {TiTick} from 'react-icons/ti'
import {BiBed} from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
import Header from './Header'


function Display() { 
    let history = useNavigate()
    const collectionRef = collection(db, "Hotel");

    const [hotelDetails, setHotelDetails] = useState([]);
    
    const { user, logoutUser } = useUserContext();
    

   const {id} = useParams(); 


    const getAllHotels = () =>{
        return getDocs(collectionRef);
    }
    useEffect(()=>{
        getHotels();
        console.log(hotelDetails)
    }, []);

    const getHotels = async () =>{
        const data = await getAllHotels();
        setHotelDetails(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
    }
    const bookNow = async (id) =>{
      history('/book', {state: {id:id}})
      
      

          /* const docRef = doc(db, "Hotel", id);
         getDoc(docRef).then((doc)=> {
            console.log(doc.data(), doc.id)
         }) */
    } 
    const [search, setSearch] = useState(0)

    
  return (
    <div>
        <Header />
      <div className='mainWrapper'>
        <div className='dash'>
        </div>
        <div className='searchHotel'>
            <input className='checking' type='date' placeholder='Check In'/>
            <input  className='checking' type='date' placeholder='Check Out'/>
            <select className='adcheck'>
                <option value=''>Adult</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select> 
            <select className='adcheck'>
                <option value=''>Children</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select> 
            <button className='submit' type='submit'>Search</button>
        </div>
        <div className='flexcointainer'>
            <div className='filter'>
            {/*     <h3>Filter</h3>
                <p>Hotel Name</p>
                <input type='text' placeholder='Search by Name'/><br/>
                <p>Price</p>
                <select>
                    <option value=''>0</option>
                    <option value='R0 - R1000'>R0 - R1000</option>
                    <option value='R1000 - R2500'>R1000 - R2500</option>
                    <option value='R2500 - R5000'>R2500 - R5000</option>
                </select>  */}
                <p>Location</p><br/>
                <input onChange={(e)=> setSearch(e.target.value)} type='text' placeholder='Search By Location'/>
            </div>
            <div className='avHotels'>
                    <div>
                    {hotelDetails
                    .filter((val)=>{
                        if(search==''){
                            return val;
                        }else if(val.location.toLowerCase().includes(search.toLowerCase())){
                            return val
                        }  
                    })
                    .map((doc, index) =>{
                        return (
                            <div>
                                <div className='details'>
                                  
                                    <div className='image1'><img className='myroom' src={doc.hotelImage} alt='room'/></div> 
                                    <div className='myroomDetails'>
                                        <h1>{doc.roomType}</h1>
                                        <span><BiBed className='bed'/>{doc.bedType}</span>
                                        <span><GoLocation className='locc'/>{doc.location}</span><br/>
                                        
                                        <div className='addServe'>
                                            <p><TiTick className='tick'/>Air Conditioning</p>
                                            <p><TiTick className='tick'/>Free WiFi</p>
                                            <p><TiTick className='tick'/>Television</p>
                                            <p><TiTick className='tick'/>Shower</p>
                                            <p><TiTick className='tick'/>Hair Dryer</p>
                                        </div>
                                    </div>
                                    <div className='booking'>
                                        <h1>R{doc.fee}</h1>
                                        
                                            <button  className='booknow' type='submit' onClick={() => bookNow(doc)}>Book Now</button>
                                          
                                    </div>
                                </div>
                            </div>
                        )
                        })}
                    </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Display
