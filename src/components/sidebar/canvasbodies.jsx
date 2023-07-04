import { Offcanvas, Form, Stack } from "react-bootstrap";
import {
  AiOutlineSetting,
  AiOutlineEdit,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
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
          <BsCurrencyDollar /> <p className="mx-2 text">Email Templates</p>
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
function Search() {
  return (
    <Offcanvas.Body>
      <Form.Control
        type="text"
        placeholder="search"
        className="my-4 search-input"
      ></Form.Control>
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
          <BsCurrencyDollar /> <p className="mx-2 text">Invoice</p>
        </Link>
        <Link
          to="/invoice-platform/subscriptions/create-subscription"
          className="nav-items mx-2 "
        >
          <BsCurrencyDollar /> <p className="mx-2 text">Subscription</p>
        </Link>
        <Link
          to="/invoice-platform/products/create-product"
          className="nav-items mx-2 "
        >
          <BsCurrencyDollar /> <p className="mx-2 text">Product</p>
        </Link>
        <Link
          to="/invoice-platform/customers/create-customer"
          className="nav-items mx-2 "
        >
          <BsCurrencyDollar /> <p className="mx-2 text">Customer</p>
        </Link>
      </Stack>
    </Offcanvas.Body>
  );
}

let componentArray = [
  <Profile />,
  <Search />,
  <CreateNew />,
  <Notification />,
  <Settings />,
];

export default componentArray;
