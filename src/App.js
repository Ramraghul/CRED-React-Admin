import "bootstrap/dist/css/bootstrap.min.css"
import './sb-admin-2.css';
import './App.css';
import SideBar from "./sideNav.jsx";
import NavBar from "./navBar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Users from "./Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";
import Newuser from './Newuser'
import Userview from "./Userview";
import Edit from "./Edit";
import EditProduct from "./EditProduct";
import ViewProduct from "./ViewProduct";
import CreateProduct from "./CreateProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="page-top">
          <div id="wrapper">
            <SideBar></SideBar>
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <NavBar></NavBar>
                <div className="container-fluid">

                  <Routes>

                    <Route path="/" element={<Dashboard />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Users" element={<Users />} />
                    <Route path="Users/Newuser" element={<Newuser />} />
                    <Route path="Users/:id" element={<Userview />} />
                    <Route path="Users/edit/:id" element={<Edit />} />

                    <Route path="/Product" element={<Product />}/>
                    <Route path="Product/create" element={<CreateProduct/>}/>
                    <Route path="Product/View/:id" element={<ViewProduct/>}/>
                    <Route path="product/edit/:id" element={<EditProduct/>}/>
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
