
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Inventory from './Components/Inventory/Inventory';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import NotFound from './Components/NotFound/NotFound';
import AddNewItem from './Components/AddNewItem/AddNewItem';
import MyItem from './Components/MyItem/MyItem';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div >
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        {/* <Route path="/service/:serviceID" element={
          <RequireAuth> <Checkout></Checkout> </RequireAuth>
        }></Route> */}
        <Route path="/manage-inventory" element={<ManageInventory></ManageInventory> }></Route>
        <Route path="/inventory" element={<Inventory></Inventory> }></Route>
        {/* <Route path="/checkout" element={
          <RequireAuth> <Checkout></Checkout> </RequireAuth>
        }></Route> */}
        <Route path="/login" element={<Login></Login> }></Route>
        <Route path="/signup" element={<Signup></Signup> }></Route>
        <Route path="/add-new" element={<AddNewItem></AddNewItem> }></Route>
        <Route path="/my-item" element={<MyItem></MyItem>}></Route>
        <Route path="*" element={ <NotFound></NotFound>}></Route>
        
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
