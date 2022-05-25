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
import UserList from './Components/Pages/Dashboard/Admin/MakeAdmin/UserList/UserList';
import AddProduct from './Components/Pages/Dashboard/Admin/AddProduct/AddProduct';
import ManageProduct from './Components/Pages/Dashboard/Admin/ManageProduct/ManageProduct';
import OrderPayment from './Components/Pages/Dashboard/Users/OrderPayment/OrderPayment';
import RequireAdmin from './Components/Pages/Login/RequireAdmin/RequireAdmin';
import EditProfile from './Components/Pages/Dashboard/Both/EditProfile';
import Blogs from './Components/Pages/Blogs/Blogs';



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


        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/purchase'
          element={
            <RequireAuth>
              <Checkout></Checkout>
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

        <Route path='/myProfile'
          element={
            <RequireAuth>
              <MyProfile></MyProfile>
            </RequireAuth>
          }>
        </Route>




        <Route path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>

          {/* ---------- DASHBOARD INDEX ROUTE ---------- */}
          <Route index element={<EditProfile></EditProfile>}></Route>

          {/* ---------- DASHBOARD USER ROUTE ---------- */}
          <Route path='myOrder' element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:orderId' element={<OrderPayment></OrderPayment>}></Route>

          {/* ---------- DASHBOARD ADMIN ROUTE ---------- */}
          <Route path='makeAdmin' element={<UserList></UserList>}></Route>
          <Route path='myOrder' element={<MyOrders></MyOrders>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><UserList></UserList></RequireAdmin>}></Route>
          <Route path='manageOrder' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
        </Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
