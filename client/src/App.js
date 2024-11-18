import './App.css';
import Header from './Header.js';
import Layout from './Layout.js';
import Home from './components/Home.js';
import {Route, Routes} from "react-router-dom";
import Login from './components/Login.js';
import Register from './components/Register.js';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}> 
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Route>
    </Routes>
  );
}

export default App;
