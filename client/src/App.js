import './App.css';
import Header from './Header.js';
import Layout from './Layout.js';
import Home from './components/Home.js';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}> 
        <Route index element={<Home/>}/>
        <Route path='/login' element={<div>Login</div>}/>
      </Route>
    </Routes>
  );
}

export default App;
