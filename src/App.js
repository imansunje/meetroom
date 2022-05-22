import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SigninScreen from './views/SigninScreen';
import SignupScreen from './views/SignupScreen';
import HomeScreen from './views/HomeScreen';
import BookScreen from './views/BookScreen';
import Room1Screen from './views/Room1Screen';
import Room2Screen from './views/Room2Screen';
import Room3Screen from './views/Room3Screen';
import Room4Screen from './views/Room4Screen';
import Room5Screen from './views/Room5Screen';
import NavBar from './components/NavBar';

function App() {  

  return (
    <Router>
      <AuthProvider>
   <NavBar />
          <Routes>
            <Route exact path="/" element={<SignupScreen />} />
            <Route exact path="/signin" element={<SigninScreen />} />
            <Route exact path="/home" element={<HomeScreen/>} />
            <Route exact path="/book" element={<BookScreen/>} />
            <Route exact path="/room1" element={<Room1Screen/>} />
            <Route exact path="/room2" element={<Room2Screen />} />
            <Route exact path="/room3" element={<Room3Screen/>} />
            <Route exact path="/room4" element={<Room4Screen/>} />
            <Route exact path="/room5" element={<Room5Screen/>} />
          </Routes>

        
      </AuthProvider>
    </Router>
  );
}

export default App;