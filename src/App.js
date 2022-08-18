import "bootstrap/dist/css/bootstrap.min.css"
import './sb-admin-2.css';
import SideBar from "./sideNav.jsx";
import NavBar from "./navBar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Users from "./Users";
import {BrowserRouter,Routes,Route, Outlet} from "react-router-dom";
import Product from "./Product";
import Newuser from './Newuser'
import Login from "./Login";
import Userview from "./Userview";

function App() {
  return (
    <>
    <BrowserRouter>
    <div id="page-top">
      <div id="wrapper">
        <SideBar></SideBar>
        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <NavBar></NavBar>
          <div class="container-fluid">

            <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/> 
            <Route path="/Users" element={<Users/>}/>
            <Route path="Users/Newuser" element={<Newuser/>}/>
            <Route path="Users/:id" element={<Userview/>}/>
            <Route path="/Product" element={<Product/>}/>
            </Routes>
            
            

          </div>
        </div>
        <Footer></Footer>
        </div>
      </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
