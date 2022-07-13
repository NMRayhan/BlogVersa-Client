import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './Component/Authentication/Login/Login';
import Registration from './Component/Authentication/Registration/Registration';
import RequireAuth from './Component/Authentication/RequireAuth/RequireAuth';
import Footer from './Component/common/Footer';
import Navbar from './Component/common/Navbar';
import Home from './Component/Home';
import ManageUserControl from './Component/ManageUserControl/ManageUserControl';

import PostBlog from './Component/PostBlog';
import UserProfile from './Component/ManageUserControl/UserProfileManage/UserProfile';
import ManageBlogs from './Component/ManageUserControl/BlogManage/ManageBlogs';
import ManageComment from './Component/ManageUserControl/CommentManage/ManageComment';

function App() {
  return (
    <div data-theme="halloween" className="App">
      <div className='w-9/12 mx-auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/registration' element={<Registration />}></Route>

          <Route path="addPost" element={
            <RequireAuth>
              <PostBlog />
            </RequireAuth>
          }></Route>

          <Route path='/dashboard' element={
            <RequireAuth>
              <ManageUserControl />
            </RequireAuth>
          }>
            <Route index element={<UserProfile />} />
            <Route path="Manage-blogs" element={<ManageBlogs></ManageBlogs>} />
            <Route path="Manage-comment" element={<ManageComment></ManageComment>} />
          </Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
