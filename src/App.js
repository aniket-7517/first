import logo from './logo.svg';
import './App.css';
import User from './User';
import Products from './Products';
import { Route, Routes } from 'react-router-dom';
import TodoApp from './Todo/TodoApp';
import Navbar from './Navbar';
import Product from './Product';
import Mobiles from './Mobiles';
import Mobile from './Mobile';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/first' element={<Products/>}></Route>
        <Route path='/product/:productname' element={<Product/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/Todo' element={<TodoApp/>}></Route>
        <Route path='/mobile/:mobileName' element={<Mobile/>}></Route>
        <Route path='/mobiles' element={<Mobiles/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
