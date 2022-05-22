import React, {useEffect, useState} from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo_name from '../images/logo_name.png';
import firebase from '../config/firebase';
import './Navbar.css';


const NavBar =() =>{
  
    const { logOut, currentUser } = useAuth()
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
      if(currentUser){
      const db = firebase.firestore();
      db.collection("accounts").doc(currentUser.uid).onSnapshot((snapshot) => {
        setUser(snapshot.data())
        console.log("riksla");
      })}
  }, [currentUser]);


  return (
  <div className={currentUser ? 'wholeScreen' : "d-none"}>
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar className={"d-flex justify-content-between"} style={{backgroundColor:'#f9f9f9', color:"#e73f4b", fontFamily: "'Poppins', sans-serif"}}>
        <div className="logo">
            <img src={logo_name} alt="" />
          </div>
          {user ?
            <span>{user.firstName} {user.lastName}</span> : ""
        }
        
          <Button color="inherit" onClick={() => {
            logOut().then(()=> navigate("/signin") );
            
        }}>Log out</Button>
        </Toolbar>
      </AppBar>
    </Box>
    
    </div>
    
  );
}
export default NavBar;