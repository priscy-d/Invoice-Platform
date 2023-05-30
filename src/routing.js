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

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Navigate replace to={"dashboard"} />} />
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="invoices" element={<Invoices />}></Route>
          <Route path="items" element={<Items />}></Route>
          <Route path="create-invoice" element={<CreateInvoice />}></Route>
          <Route path="create-product" element={<CreateProduct />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
