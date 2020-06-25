import React from "react";
import { Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Ingredients</h4>
        <ul className="list-group">
          {props.ingredients.map(ing => (
            <li key={ing} className="list-group-item">
              {ing}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Receipe = ({ title, image, ingredientLines }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="col-lg-3 col-md-4 mx-0 my-2">
      <div className="d-flex justify-content-center flex-column">
        <h3>{title}</h3>
        <img src={image} className="rounded mx-auto w-50 h-50" alt="" />
      </div>
      <Button
        variant="
      "
        onClick={() => setModalShow(true)}
      >
        Read Ingredients
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        ingredients={ingredientLines}
      />
    </div>
  );
};

export default Receipe;
