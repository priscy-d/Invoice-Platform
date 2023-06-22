import React from "react";
import { Nav } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  return (
    <div className=" d-flex justify-content-center align-items-center">
      <Nav className="mt-2">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            {" "}
            <Nav.Link onClick={() => setCurrentPage(currentPage - 1)} href="#">
              <IoIosArrowBack />
            </Nav.Link>
          </li>
          {pageNumbers.map((pgn) => (
            <li
              key={pgn}
              className={`page-item ${currentPage === pgn ? "active" : ""}`}
            >
              <Nav.Link onClick={() => setCurrentPage(pgn)} href="#">
                {pgn}
              </Nav.Link>
            </li>
          ))}
          <Nav.Link href="#" onClick={() => setCurrentPage(currentPage + 1)}>
            <IoIosArrowForward />
          </Nav.Link>
        </ul>
      </Nav>
    </div>
  );
};

export default Pagination