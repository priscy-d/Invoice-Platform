import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./components/dashboard/dashboard";
import Invoices from "./components/invoice/invoices";
import Items from "./components/product/items";
import Customers from "./components/customer/customer";
import CreateInvoice from "./components/invoice/createInvoice";
import CreateProduct from "./components/product/createProduct";
import CreateCustomer from "./components/customer/createCustomer";
import EditProduct from "./components/product/editItem";

import ViewInvoice from "./components/invoice/viewInvoice";
import ViewCustomer from "./components/customer/viewCustomer";
import Recurring from "./components/invoice/recurring";

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
            <Route index element={<Customers />} />
            <Route path="create-customer" element={<CreateCustomer />}></Route>
            <Route path="view-customer" element={<ViewCustomer />}></Route>
          </Route>

          <Route path="invoices">
            <Route index element={<Invoices />}></Route>
            <Route path="create-invoice" element={<CreateInvoice />}></Route>
            <Route path="view-invoice" element={<ViewInvoice />}></Route>
            <Route path="recurring-templates" element={<Recurring />}></Route>
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
