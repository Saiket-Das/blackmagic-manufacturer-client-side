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



function App() {

  return (
    <div className="">

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


        <Route path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
        </Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


      <ToastContainer />

    </div>
  );
}

export default App;
