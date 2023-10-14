import { useSelector, useDispatch } from 'react-redux';
import { showing, hide } from '../features/modals/cartSlice';
import CartItem from './CartItem';
import CarIcon from './UI/CartIcon';
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
          <Modal.Title>
            <CarIcon />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={classes.body} >
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Modal.Body>
        <Modal.Footer>
          <Button className={classes.btn} size='lg' variant="danger">
            Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;