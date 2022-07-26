import { useState, useEffect } from 'react';
import { db } from '../config/firebase'
import { storage } from '../config/firebase'
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'
import { v4 } from 'uuid';
import { addDoc, getDocs, collection, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { async } from '@firebase/util';

function Add({id, setHotelID}) {
    const collectionRef = collection(db, "Hotel");

    const [hotelDetails, setHotelDetails] = useState([]);

    const [uploadImage, setUploadImage] = useState(null)
    const [fee, setFee] = useState(0);
    const [roomType, setRoomType] = useState('');
    const [bedType, setBedType] = useState('');
    const [location, setLocation] = useState('');
    const [progress, setprogress] = useState(0)
    let [hotelImage, sethotelImage]= useState('')
    const file = ''

    const getAllHotels = () => {
        return getDocs(collectionRef);
    }
    useEffect(() => {
        getHotels();
    }, []);

    const handleImage = (e) => {
        setUploadImage(e.target.files[0])
        uploadedimage(uploadImage)
    }

    function uploadedimage(uploadImage) {
        if (!uploadImage) return;
        const imageRef = ref(storage, `images/${uploadImage.name + v4()}`);
        const uploadTask = uploadBytesResumable(imageRef, uploadImage);
        uploadTask.on('state_changed', (snapshot) => {
            const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100)
            setprogress(prog)
        }, (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {
                        sethotelImage(url)
                    })

            }
        )
    }
    const getHotels = async () => {
        const data = await getAllHotels();
        console.log(data.docs)
        setHotelDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    const add = (() => {
    
        const hotelD = {
            fee: fee,
            roomType: roomType,
            bedType: bedType,
            location: location,
            hotelImage:hotelImage
        };

        if(id !== undefined && id !== ''){
     
                const refDoc = doc (db, "Hotel", id)
                 updateDoc(refDoc, hotelD).then(()=>{
                    alert("Updated successfully")
                 }).catch((err)=>{
                    console.log(err)
                 })
                setHotelID("");
       
        }else{
            addDoc(collectionRef, hotelD).then(() => {
                alert("added successfully")
            }).catch((err) => {
                console.log(err)
            })
        }

        

    })
    const deleteHotel = async (id) =>{
       const refDoc = doc(db, "Hotel", id)
       return deleteDoc(refDoc);
    }
  
    return (
        <div>
            <center>
                <h1>Add Romm Details</h1>
                <div className='formRoom'>
                    <input className='dinput' type='file' onChange={handleImage} name="uploadImage" value={file} />
                    {progress} %
                    <select className='select' onChange={(e) => setRoomType(e.target.value)}>
                        <option value=''>Select Room Type</option>
                        <option value='Standard Room'>Standard Room</option>
                        <option value='Deluxe Room'>Deluxe Room</option>
                        <option value='Premium Room'>Premium Room</option>
                        <option value='Classic Double Room'>Classic Double Room</option>
                        <option value='Superior  Double Room'>Superior Double Room</option>
                    </select>

                    <select className='select' onChange={(e) => setBedType(e.target.value)}>
                        <option value=''>Select bed Type</option>
                        <option typeof='text' value='King Size Bed'>King Size Bed</option>
                        <option value='Double Size Bed'>Double Size Bed</option>
                        <option value='Triple Size Bed'>Triple Size Bed</option>
                    </select>
                    <input className='dinput' type="text" placeholder='Location' onChange={(e) => setLocation(e.target.value)} />
                    <input className='dinput' type='number' placeholder='Total Fee' onChange={(e) => setFee(e.target.value)} />
                    <div style={{textAlign:'left'}}>
                        <h2>Additional services</h2>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="air" /><label for="vehicle1"> Air conditioning</label><br />
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="shower" /><label for="vehicle1"> Shower </label><br />
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="wifi" /><label for="vehicle1"> Free WiFi </label><br />
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="tv" /><label for="vehicle1"> Television </label><br />
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="dryer" /><label for="vehicle1">Hair Dryer</label><br />
                    </div>

                    <button className='fbtn' onClick={add}>Add Details</button>
                </div>
            </center>
            <center>
                <h1>Details</h1>
                <table className='ftable'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Type</th>
                            <th>Bed Type</th>
                            <th>Location</th>
                            <th>Total Fee</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotelDetails.map((doc, index) => {
                            return (
                                <tr key={doc.id}>
                                    <td>{index + 1}</td>
                                    <td>{doc.roomType}</td>
                                    <td>{doc.bedType}</td>
                                    <td>{doc.location}</td>
                                    <td>R{doc.fee}</td>
                                    <td><button onClick={()=> setHotelID(doc.id)}>Edit</button><button onClick={()=> deleteHotel(doc.id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </center>
        </div>
    )
}
export default Add;