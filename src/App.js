import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard/Dashboard';
import AddReview from './Components/Pages/Dashboard/Users/AddReview/AddReview';
import MyOrders from './Components/Pages/Dashboard/Users/MyOrders/MyOrders';
import Home from './Components/Pages/Home/Main/Home';
import Checkout from './Components/Pages/Home/Products/Checkout/Checkout';
import Login from './Components/Pages/Login/Login/Login';
import RequireAuth from './Components/Pages/Login/RequireAuth/RequireAuth';
import SignUp from './Components/Pages/Login/SignUp/SignUp';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import MyProfile from './Components/Pages/MyProfile/MyProfile';
import Inventory from './Components/Pages/Home/Products/Inventory/Inventory';
import 'react-toastify/dist/ReactToastify.css';
import ManageOrders from './Components/Pages/Dashboard/Admin/ManageOrders/ManageOrders';
import MakeAdmin from './Components/Pages/Dashboard/Admin/MakeAdmin/MakeAdmin';
import UserList from './Components/Pages/Dashboard/Admin/MakeAdmin/UserList/UserList';



function App() {

  return (
    <div className="">
      <ToastContainer />

      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>


        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='/purchase'
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }>
        </Route>

        <Route path='/myProfile'
          element={
            <RequireAuth>
              <MyProfile></MyProfile>
            </RequireAuth>
          }>
        </Route>

        <Route path='/inventory'
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }>
        </Route>


        <Route path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='manageOrder' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='makeAdmin' element={<UserList></UserList>}></Route>
        </Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
