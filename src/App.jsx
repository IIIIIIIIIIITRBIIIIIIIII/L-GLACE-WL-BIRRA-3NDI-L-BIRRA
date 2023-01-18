import {Route, Routes } from 'react-router-dom';
import './App.css';
import First from './components/First';
import Form from './components/Form';
import Home from './components/Home';
import Birra from './components/Birra'
import Basket from './components/Basket';
import Success from './components/Success';
function App() {
  return (
    <>
       
       <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<First/>}/>
        <Route path='/Form' element={<Form/>}/>
        <Route path='/Birra' element={<Birra/>}/>
        <Route path='/Basket' element={<Basket/>}/>
        <Route path='/Success' element={<Success/>}/>
       </Routes>
    </>
  );
}

export default App;