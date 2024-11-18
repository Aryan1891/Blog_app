import './App.css';
// import Header from './Header.js';
import Layout from './Layout.js';
import Home from './components/Home.js';
import {Route, Routes} from "react-router-dom";
import Login from './components/Login.js';
import Register from './components/Register.js';
import { UserContextProvider } from './UserContext.js';
import CreatePost from './components/CreatePost.js';
import Post from './components/Post.js';


function App() {
  
  return (
    <UserContextProvider>

    <Routes>
      <Route path='/' element={<Layout/>}> 
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
          {/* <Route path="/edit/:id" element={<EditPost />} /> */}
      </Route>
    </Routes>
    </UserContextProvider>

  );
}

export default App;
