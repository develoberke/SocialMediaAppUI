import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Navbar from "./Components/Navbar/Navbar"
import Register from './Components/Auth/Register';
import ProtectedRoute from './Libs/ProtectedRoute';
import { useSelector } from 'react-redux';
import Home from './Screens/Home';

const unauthLinks = [{path : "/signin", name: "Sign in"}, {path : "/signup", name: "Sign up"}]
const authLinks = [{path : "/", name: "Home"}, {path: "/profile", name: "Profile"}]
function App() {
  const isAuthenticated = useSelector(
    (state) => state.security.isAuthenticated
  );
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
            <Route path='/signin' element={<Login/>}></Route>
            <Route path='/signup' element={<Register/>}></Route>      
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
