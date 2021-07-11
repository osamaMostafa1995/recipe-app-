import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
const Recipe = ({ title, img, ingredients }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="recipe">
      <div class="card">
        <div className="img-contain">
          <img src={img} className="card-img-top" alt="..." />
          <div className="overlay">
            <Button variant="primary" onClick={handleShow}>
              Know More
            </Button>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-text">{title}</h5>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                {ingredients.map((ingredient) => (
                  <li>
                    <p>{ingredient.text}</p>
                  </li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
