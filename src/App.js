import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Home/Navbar';
import Signup from './Pages/Login/Signup';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>

    </div>
  );
}

export default App;
