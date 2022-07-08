import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './Component/Authentication/Login/Login';
import Registration from './Component/Authentication/Registration/Registration';
import Footer from './Component/common/Footer';
import Navbar from './Component/common/Navbar';
import Home from './Component/Home';

function App() {
  return (
    <div data-theme="halloween" className="App">
      <div className='w-9/12 mx-auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/registration' element={<Registration />}></Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
