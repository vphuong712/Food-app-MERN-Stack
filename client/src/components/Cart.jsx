import { useSelector, useDispatch } from 'react-redux';
import { showing, hide } from '../features/modals/cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classes from './Cart.module.css';

const CartModal = () => {
  const show = useSelector((state) => state.cart.show);
  const dispatch = useDispatch();

  return (
    <>
      <Modal className={classes.cart} show={show} onHide={() => dispatch(hide())}  style={{zIndex: '999999'}} >
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button className={classes.btn} size='lg' variant="secondary" onClick={() => dispatch(hide())}>
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