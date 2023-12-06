import { Route , Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Homepage from './components/genre/Homepage';
import Genreselection from './components/genre/Genreselection';

import Userpage from './components/userpage/Userpage';
import Movielisting from './components/Moviepage/Movielisting';
const App = () => {

  return (


    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/homepage' element={<Homepage />}></Route>
      <Route path='/genreselection' element={<Genreselection />}></Route>
      <Route path='/userpage' element={<Userpage />}></Route> 
      <Route path='/movielists' element={<Movielisting />}></Route> 

    </Routes>
  )
};



export default App;
