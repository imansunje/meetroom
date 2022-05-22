import { useAuth } from '../contexts/AuthContext';
import Title from '../components/Title';
import ImageGallery from '../components/ImageGallery';
import '../index.css';
import { Navigate } from 'react-router-dom';

const BookScreen = () => {
    const { logOut, currentUser } = useAuth()

 if(currentUser){   
    return <div >
        <Title />
        <ImageGallery />
    </div>;}
    if(!currentUser) return <Navigate to={"/signin"}/>
};

export default BookScreen;
