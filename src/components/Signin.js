import './Signin.css';
import React, {useRef} from 'react';
import logo_name from '../images/logo_name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../contexts/AuthContext';
import { Link, Navigate} from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const Signin = () => {  
const navigate = useNavigate();
const { signIn, currentUser } = useAuth();
const emailRef = useRef();
const passwordRef = useRef();

const signUpHandler = async (e) => {
  e.preventDefault();
  try {
      await signIn(emailRef.current.value, passwordRef.current.value);
  } catch (error) {
      console.log(error)
  }

}
  if(!currentUser){
    return (
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
  
                      <Form.Group id='password'>
                      <FontAwesomeIcon className='icon' icon={faLock} />{" "}
                          <Form.Label>Password</Form.Label>
                          
                          <Form.Control type='password' ref={passwordRef} required></Form.Control>
                      </Form.Group>
  
  
                      <Button className='dugme' type='submit'  variant="info">Sign in</Button>
                  </Form>
              </Card.Body>
          
          <div className='w-100 text-center mt-2'> Need an account? <Link to={'/'}> Sign up </Link> </div>
      </div>
        </div>
      </div>
    );
  }

  if(currentUser) return <Navigate to={"/book"}/>

}


export default Signin;