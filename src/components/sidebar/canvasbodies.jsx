import { Offcanvas, Stack } from "react-bootstrap";
import {
  AiOutlineEdit,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineFileSync,
} from "react-icons/ai";
import { BsCurrencyDollar, BsFillPersonFill } from "react-icons/bs";
import { HiReceiptTax } from "react-icons/hi";
import { FaFileInvoiceDollar, FaOpencart } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";

import { Link } from "react-router-dom";

function Profile() {
  return (
    <Offcanvas.Body>
      <Stack>
        <Link to="settings\currencies" className="nav-items mx-2 ">
          <AiOutlineEdit /> <p className="mx-2 text">Edit Details</p>
        </Link>
        <Link to="settings\currencies" className="nav-items mx-2 ">
          <AiOutlineLogout /> <p className="mx-2 text">Logout</p>
        </Link>
      </Stack>
    </Offcanvas.Body>
  );
}
function Settings() {
  return (
    <Offcanvas.Body>
      <Stack>
        <Link to="settings\currencies" className="nav-items mx-2 ">
          <BsCurrencyDollar /> <p className="mx-2 text">Currency</p>
        </Link>
        <Link to="settings\currencies" className="nav-items mx-2 ">
          <AiOutlineMail /> <p className="mx-2 text">Email configuration</p>
        </Link>
        <Link to="settings\currencies" className="nav-items mx-2 ">
          <AiOutlineMail /> <p className="mx-2 text">Company </p>
        </Link>
        <Link to="settings\currencies" className="nav-items mx-2 ">
          <BsCurrencyDollar /> <p className="mx-2 text">Operation countries</p>
        </Link>
        <Link to="settings\currencies" className="nav-items mx-2 ">
          <HiReceiptTax /> <p className="mx-2 text">Configure taxes</p>
        </Link>
        <Link to="settings\currencies" className="nav-items mx-2 ">
          <AiOutlineFileSync /> <p className="mx-2 text">Active Log</p>
        </Link>
      </Stack>
    </Offcanvas.Body>
  );
}
function Notification() {
  return (
    <Offcanvas.Body>
      <p className="mx-2 text">Ops! no new notifications</p>
    </Offcanvas.Body>
  );
}

function CreateNew() {
  return (
    <Offcanvas.Body>
      <Stack>
        <Link
          to="/invoice-platform/invoices/create-invoice"
          className="nav-items mx-2 "
        >
          <FaFileInvoiceDollar /> <p className="mx-2 text">Invoice</p>
        </Link>
        <Link
          to="/invoice-platform/subscriptions/create-subscription"
          className="nav-items mx-2 "
        >
          <MdSubscriptions /> <p className="mx-2 text">Subscription</p>
        </Link>
        <Link
          to="/invoice-platform/products/create-product"
          className="nav-items mx-2 "
        >
          <FaOpencart /> <p className="mx-2 text">Product</p>
        </Link>
        <Link
          to="/invoice-platform/customers/create-customer"
          className="nav-items mx-2 "
        >
          <BsFillPersonFill /> <p className="mx-2 text">Customer</p>
        </Link>
      </Stack>
    </Offcanvas.Body>
  );
}

let componentArray = [
  <Profile />,

  <CreateNew />,
  <Notification />,
  <Settings />,
];

export default componentArray;
