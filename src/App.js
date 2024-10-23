import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Home from './components/Home';
import Sports from './components/news/Sports';
import Weather from './components/news/Weather';
import About from './components/news/About';
import Contact from './components/news/Contact';
import Post from './components/Post';


function App() {
  return (
   
    <div className="App">
       
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/sports" element={<Sports />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/admin/*" element={<Admin />}>
        <Route path="post" element={<Post />} /> {/* This matches /admin/post */}
      </Route>
      </Routes>

    </div>
  );
}

export default App;
