import React from 'react'
import './ImageGallery.css';
import {useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion' 
import room1 from '../images/room1.png'
import room2 from '../images/room2.png'
import room3 from '../images/room3.png'
import room4 from '../images/room4.png'
import room5 from '../images/room5.png'
import { CButton, CCard, CCardBody, CCardFooter, CCardImage, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';


 const ImageGallery = () => {
    const navigate = useNavigate();
    
    const handleRoom1Click = () => {
        navigate(`/room1`)
    };
  const handleRoom2Click = () => {
         navigate(`/room2`)
     };
    const handleRoom3Click = () => {
         navigate(`/room3`)     };
     const handleRoom4Click = () => {
         navigate(`/room4`)
     };
     const handleRoom5Click = () => {
         navigate(`/room5`)
     };

  return (<div className='x'>
    <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3}}>
    <CCol xs>
      <CCard>
         <CCardImage onClick={handleRoom1Click} className='im' orientation="top" src={room1} />
        <CCardBody>
          <CCardTitle className='centar'>Bjelašnica Conference Room</CCardTitle>
          <CCardText>
            Capacity: 30 persons 
          </CCardText>
          <CCardText>  Price: BAM 250</CCardText>
        </CCardBody>
        <CCardFooter>
        <div className='centar'><CButton href="/room1">Book</CButton></div>
        </CCardFooter>
      </CCard>
    </CCol>
    <CCol xs>
      <CCard>
        <CCardImage onClick={handleRoom2Click} className='im' orientation="top" src={room2} />
        <CCardBody>
          <CCardTitle className='centar'>Igman Conference Room</CCardTitle>
          <CCardText>
            Capacity: 20 persons 
          </CCardText>
          <CCardText>  Price: BAM 220</CCardText>
        </CCardBody>
        <CCardFooter>
        <div className='centar'><CButton href="/room2">Book</CButton></div>
        </CCardFooter>
      </CCard>
    </CCol>
    <CCol xs>
      <CCard>
        <CCardImage onClick={handleRoom3Click} className='im' orientation="top" src={room3} />
        <CCardBody>
          <CCardTitle className='centar'>Vlašić Conference Room</CCardTitle>
          <CCardText>
            Capacity: 40 persons 
          </CCardText>
          <CCardText>  Price: BAM 400</CCardText>
        </CCardBody>
        <CCardFooter>
        <div className='centar'> <CButton href="/room3">Book</CButton></div>
        </CCardFooter>
      </CCard>
    </CCol>
    <CCol xs>
      <CCard>
        <CCardImage onClick={handleRoom4Click} className='im' orientation="top" src={room4} />
        <CCardBody>
          <CCardTitle className='centar'> Maglić Conference Room</CCardTitle>
          <CCardText>
            Capacity: 25 persons 
          </CCardText>
          <CCardText>  Price: BAM 300</CCardText>
        </CCardBody>
        <CCardFooter>
        <div className='centar'><CButton href="/room4">Book</CButton></div>
        </CCardFooter>
      </CCard>
    </CCol>
    <CCol xs>
      <CCard>
        <CCardImage onClick={handleRoom5Click} className='im' orientation="top" src={room5} />
        <CCardBody>
          <CCardTitle className='centar'>Jahorina Conference Room</CCardTitle>
          <CCardText>
            Capacity: 25 persons 
          </CCardText>
          <CCardText>  Price: BAM 270</CCardText>
        </CCardBody>
        <CCardFooter>
        <div className='centar'><CButton href="/room5">Book</CButton></div>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
  </div>
  )
}

export default ImageGallery;

/*

<div className="img-grid">
        <motion.div className='img-wrap' 
        whileHover={{opacity: 1}}>
            <img onClick={handleRoom1Click} src={room1} alt='room1'/>
        </motion.div>
        <motion.div className='img-wrap' 
        whileHover={{opacity: 1}}>
            <img onClick={handleRoom2Click} src={room2} alt='room2'/>
        </motion.div>
        <motion.div className='img-wrap' 
        whileHover={{opacity: 1}}>
            <img onClick={handleRoom3Click} src={room3} alt='room3'/>
        </motion.div>
        <motion.div className='img-wrap' 
        whileHover={{opacity: 1}}>
            <img onClick={handleRoom4Click} src={room4} alt='room4'/>
        </motion.div>
        <motion.div className='img-wrap' 
        whileHover={{opacity: 1}}>
            <img onClick={handleRoom5Click} src={room5} alt='room5'/>
        </motion.div>
        
    </div>
    
    */ 