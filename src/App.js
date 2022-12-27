import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Navbar from "./Components/Navbar/Navbar"
import Register from './Components/Auth/Register';
import ProtectedRoute from './Libs/ProtectedRoute';
import { useSelector } from 'react-redux';
import Home from './Screens/Home';
import Profile from './Screens/ProfileScreen';

const unauthLinks = [{path : "/signin", name: "Sign in"}, {path : "/signup", name: "Sign up"}]

function App() {
  const isAuthenticated = useSelector(
    (state) => state.security.isAuthenticated
  );
  
  const userId = useSelector((state) => state.security.user.id)
    //burada sıkıntı oluyor mu kontrol et
  const authLinks = [{path : "/", name: "Home"}, {path: `/profile/${userId}`, name: "Profile"}]
  return (
    <div className="App">
      <BrowserRouter>
        {
        isAuthenticated ? 
          <Navbar links={authLinks}></Navbar>
          :
          <Navbar links={unauthLinks}></Navbar>
        }
          <Routes>          
            <Route path = "/" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route> 
            <Route path = "/profile/:id" element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route> 
            <Route path='/signin' element={<Login/>}></Route>
            <Route path='/signup' element={<Register/>}></Route>      
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
