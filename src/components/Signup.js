import React, {useRef, useState} from 'react';
import { Form, Button, Card } from 'react-bootstrap'
import logo_name from '../images/logo_name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faIdCard, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Signin.css';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Signup() {
    
    
    const navigate = useNavigate();
    const { signUp } = useAuth();
    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState("");

    const handlePeriodSuccess = () => {
        if(error.length > 1){
        toast.error("Something went wrong!")}
        else 
        toast.success('You have been registered!', {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const signUpHandler = async (e) => {
        e.preventDefault();
        try {
            await signUp(emailRef.current.value, passwordRef.current.value, firstNameRef.current.value, lastNameRef.current.value);
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
        <ToastContainer 
     position="bottom-right"
     autoClose={2500}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover />
        <div className="App">
      <div className="wrapper">
        <div className="content">
        
        <div className="logo">
            <img src={logo_name} alt="" />
          </div>
            <Card.Body>
            <div className='text-center mb-4'> <span>Book with Congreso today</span></div>
                <Form onSubmit={signUpHandler}>
                    <Form.Group id='email'>
                    <FontAwesomeIcon className='icon' icon={faUser} />{" "}
                        <Form.Label>Email</Form.Label>
                        
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>

                    <Form.Group id='firstName'>
                    <FontAwesomeIcon className='icon' icon={faIdCard} />{" "}
                        <Form.Label>First name</Form.Label>
                        
                        <Form.Control type='firstName' ref={firstNameRef} required></Form.Control>
                    </Form.Group>

                    <Form.Group id='lastName'>
                    <FontAwesomeIcon className='icon' icon={faAddressCard } />{" "}
                        <Form.Label>Last name</Form.Label>
                        
                        <Form.Control type='lastName' ref={lastNameRef} required></Form.Control>
                    </Form.Group>

                    <Form.Group id='password'>
                    <FontAwesomeIcon className='icon' icon={faLock} />{" "}
                        <Form.Label>Password</Form.Label>
                        
                        <Form.Control type='password' ref={passwordRef} required></Form.Control>
                    </Form.Group>

                    <Form.Group id='password-confirm'>
                    <FontAwesomeIcon className='icon' icon={faLock} />{" "}
                        <Form.Label>Password Confirmation</Form.Label>
                        
                        <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
                    </Form.Group>

                    <Button onClick={handlePeriodSuccess} className='dugme' type='submit' variant="info">Sign up</Button>
                </Form>
            </Card.Body>
        
        
        <div className='w-100 text-center mt-2'> Already part of Congreso? <Link to='/signin'>Log in </Link> </div>
        </div>
        </div>
    </div>
</>
   );
}
