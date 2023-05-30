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

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Navigate replace to={"dashboard"} />} />
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="invoices" element={<Invoices />}></Route>
          <Route path="items" element={<Items />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
