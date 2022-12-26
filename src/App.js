import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <>
          <Navbar links={authLinks}></Navbar>
          <Routes>
            <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
          </Routes>
        </> 

        :
        <>
          <Navbar links={unauthLinks}></Navbar>
          <Routes>
            <Route path = "/" element={<Login/>}></Route>
            <Route path='/signin' element={<Login/>}></Route>
            <Route path='/signup' element={<Register/>}></Route>
          </Routes>
        </>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
