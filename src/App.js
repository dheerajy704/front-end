import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from "./components/ProductList";
import UpdateProduct from './components/UpdateProduct';
import ProfileComponent from './components/ProfileComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>

        <Route element = {<PrivateComponent/>}>
        <Route path = "/" element = {<ProductList/>}/>
        <Route path = "/add" element = {<AddProduct/>}/>
        <Route path = "/update/:id" element = {<UpdateProduct/>}/>
        <Route path = "/update" element = {<UpdateProduct/>}/>
        <Route path = "/logout" element = {<h1>Logout components</h1>}/>
        <Route path = "/profile" element = {<h1>{<ProfileComponent/>} </h1>}/>
        </Route>

        <Route path = "/signup" element = {<SignUp/>} />
        <Route path = "/login" element = {<Login/>} />
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;







