import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import firebase from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import {Autocomplete, TextField} from '@mui/material';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};


const FeedbackPopup = () => {

    const { currentUser } = useAuth();
    const { userid } = useParams();
    const [knowledgeRating, setKnowledgeRating] = useState(0);
    const [knowledgeComment, setKnowledgeComment] = useState("");
    const [entrepreneurshipRating, setEntrepreneurshipRating] = useState(0);
    const [entrepreneurshipComment, setEntrepreneurshipComment] = useState("");
    const [businessSenseRating, setBusinessSenseRating] = useState(0);
    const [businessSenseComment, setBusinessSenseComment] = useState("");
    const [generalComment, setGeneralComment] = useState("");
    const [users, setUsers] = useState([]);
    const db = firebase.firestore();
    const [error, setError] = useState("");


    const handleSuccess = () => {
      if(error.length > 1){
      toast.error("Something went wrong!")}
      else 
      toast.success('You have subbmited a feedback!', {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
  }



    useEffect(() => {
        db.collection("users").orderBy("name", "asc").onSnapshot((snapshot) => {
            const juzeri = [];
            snapshot.forEach((snap) => {
            juzeri.push({label: snap.data().name + "" + snap.data().surname, id: snap.id, })
            })
            setUsers(juzeri);
        })
    }, [])



    const sendFeedback = async () => {
        const db = firebase.firestore();
        try{await db.collection("feedbacks").doc(userid).collection("feedback").add({
            knowledgeComment,
            knowledgeRating,
            reviewerId: currentUser.uid,
            reviewerEmail: currentUser.email
        })
        setShow(false)
        setKnowledgeComment('')
        setError("")}
        catch(error){setError(error)}
        
    }

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = value => {
        setCurrentValue(value)
        setKnowledgeRating(value)
    }

    

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

   

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }
  

    return (<><ToastContainer 
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />

            <Button variant="primary" onClick={handleShow}>
                Give feedback
            </Button>
            <Modal show={show} onHide={handleClose} centered>

                <Modal.Header closeButton>
                    <Modal.Title><div style={styles.title}><h3>Feedback</h3></div></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                

                    <div style={styles.container}>
                        <div className='titl'> <h5>Your evaluation of our service</h5></div>
                        <div style={styles.stars}>
                            {stars.map((_, index) => {
                                return (
                                    <FaStar
                                        key={index}
                                        size={24}
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                        style={{
                                            marginRight: 10,
                                            cursor: "pointer"
                                        }}
                                    />
                                )
                            })}
                        </div>
                        <textarea
                            placeholder="Any additional feedback?"
                            style={styles.textarea}
                            value={knowledgeComment}
                            onChange={(e) => setKnowledgeComment(e.target.value)}
                        />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button onClick={() => {sendFeedback(); handleSuccess()}} variant="primary">Submit feedback</Button>
                </Modal.Footer>

            </Modal>

        </>
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
        width: 300
    },
    title: {
        display: "flex",
        alignItems: "center"
    }


};

export default FeedbackPopup;
