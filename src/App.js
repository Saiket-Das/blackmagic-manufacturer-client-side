import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Main/Home';
import Header from './Components/Shared/Header/Header';



function App() {
  return (
    <div className="">

      <Header></Header>


      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>

    </div>
  );
}

export default App;
