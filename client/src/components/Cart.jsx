import CartContext from '../store/CartContext';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classes from './Cart.module.css';

const CartModal = () => {
  const [state, dispatch] = useContext(CartContext);
  const { isShow } = state;
  return (
    <>
      <Modal className={classes.cart} show={isShow} onHide={() => {dispatch({ type: 'HIDE' })}} style={{zIndex: '999999'}} >
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button className={classes.btn} size='lg' variant="secondary" onClick={() => {dispatch({type: 'HIDE'})}}>
            Close
          </Button>
          <Button className={classes.btn} size='lg' variant="danger">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;