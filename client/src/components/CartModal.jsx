import ModalContext from '../store/ModalContext';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CartModal = () => {
  const [state, dispatch] = useContext(ModalContext);
  const { isShow } = state;
  return (
    <>
      <Modal show={isShow} onHide={() => {dispatch({ type: 'HIDE' })}} style={{zIndex: '999999'}} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {dispatch({type: 'HIDE'})}}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;