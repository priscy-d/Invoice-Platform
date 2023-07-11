import React from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

export default function DeleteCustomerModal({ show, setShow }) {
  const handleClose = () => {
    setShow(false);
  };

  const handleDelete = async () => {
    const id = localStorage.getItem("customerId");
    const url = `http://0.0.0.0:8080/customers/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        
            toast.success("Customer  Deleted ", {
             position: toast.POSITION.TOP_CENTER,
             autoClose: 3000
           })
        handleClose()
      } else {
        const errorText = await response.text();
        if (
          response.status === 404 &&
          errorText.includes("customer not found")
        ) {
          console.error(`customer not found.`);
        } else {
          console.error(
            `Failed to delete customer. Status code: ${response.status}`
          );
          console.error(`Error message: ${errorText}`);
        }
      }
    } catch (error) {
      console.error(`Failed to delete product. Error: ${error.message}`);
    }
  };
  return (
    <Modal size="auto" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {" "}
          Are you sure you want to delete this customer?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
        <Button
          className=" w-50"
          variant="danger"
          onClick={handleDelete}>
         Continue
        </Button>
      </Modal.Body>
    </Modal>
  );
}
