import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./components/dashboard";
import Invoices from "./components/invoices";
import Items from "./components/items";
import Customers from "./components/customer";
import CreateInvoice from "./components/createInvoice";
import CreateProduct from "./components/createProduct";
import CreateCustomer from "./components/createCustomer";
import EditProduct from "./components/editItem";
import Signup from "./components/signup";
import Login from "./components/login";


const Routing = () => {
  return (
   
    <Router>
      <Routes>
        {/* <Route exact path="/">
          <Route index element={<Navigate replace to={"auth/login"} />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/signup" element={<Signup />} />
        </Route> */}

        <Route exact path="/invoice-platform" element={<Layout />}>
          <Route index element={<Navigate replace to={"dashboard"} />} />
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="customers">
            <Route index element={<Customers />}/>
            <Route path="create-customer" element={<CreateCustomer />}></Route>
          </Route>

          <Route path="invoices">
            <Route index element={<Invoices />}></Route>
            <Route path="create-invoice" element={<CreateInvoice />}></Route>
          </Route>

          <Route path="products">
            <Route index element={<Items />}></Route>
            <Route path="edit-product" element={<EditProduct />}></Route>
            <Route path="create-product" element={<CreateProduct />}></Route>
          </Route>
        </Route>
      </Routes>
    </Router>
    
  );
};

export default Routing;
