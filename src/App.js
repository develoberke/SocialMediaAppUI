import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Navbar from "./Components/Navbar/Navbar"
import Register from './Components/Auth/Register';

const unauthLinks = [{path : "/signin", name: "Sign in"}, {path : "/signup", name: "Sign up"}]
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar links={unauthLinks}></Navbar>
        <Routes>
          <Route exact path = "/" element={<Login/>}></Route>
          <Route path='/signin' element={<Login/>}></Route>
          <Route path='/signup' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
