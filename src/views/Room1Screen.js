import React,{ useState, useEffect }  from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Button} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import firebase from '../config/firebase';
import moment from "moment";
import '../index.css';
import './Room.css';
import { Navigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

 export const Room1Screen = () => {
  const [value, onChange] = useState(new Date());
  const {currentUser} = useAuth();
  const db = firebase.firestore();
  const [reservations, setReservations]= useState([]);
  const [error, setError] = useState("");

  const handleReservationSuccess = () => {
    if(error.length > 1){
    toast.error("Something went wrong!")}
    else 
    toast.success('Your reservation has been successful!', {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}


  useEffect(()=>{
    console.log(reservations)
  }, [reservations]);
 useEffect(() => {
   db.collection("reservations").where("room", "==", 1).onSnapshot((snapshot) => {
    let temp =[];
    snapshot.forEach((snap) => {
        temp.push(snap.data().date)
     })
     setReservations(temp);
   })

 }, [])
 
  const reserveHandler = async () => {
   
    await db.collection("reservations").add({date: moment(value).format("DD-MM-YYYY"), userId: currentUser.uid, room: 1})
  }
 
  if(currentUser){ return (<>
  <ToastContainer 
    position="middle-right"
    autoClose={2500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover />

    <div className='text-center' style={{marginTop: "120px",  fontFamily: "'Poppins', sans-serif",}}>
          <h2 style={{color:"#f3f3f3"}}>Please select the date that you want to reserve </h2>
    <div className='d-flex justify-content-center' style={{marginTop: "100px", }}> 

    <Calendar onChange={onChange} value={value} minDate={new Date()} 
     tileClassName={({ date, view }) => {
       console.log(date)
                     if (
                       reservations.find(
                         (x) => x === moment(date).format("DD-MM-YYYY")
                       )
                     ) {
                       console.log("x")
                       return 'reserved';
      } }}/>
      </div>
     <Button className="" style={{marginTop: "20px",  fontFamily: "'Poppins', sans-serif"}}onClick={ () => {reserveHandler(); handleReservationSuccess()}}>Reserve</Button>
    </div></>
  )} if(!currentUser) return <Navigate to={"/signin"}/>
};

export default Room1Screen;