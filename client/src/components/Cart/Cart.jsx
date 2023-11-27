import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { showing, hide, getItemsFromCart } from '../../features/cart/cartSlice';
import CartItem from './CartItem';
import CarIcon from '../UI/CartIcon';
import { formatPrice } from '../../util/format';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classes from './Cart.module.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { show, products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsFromCart());
  }, [])

 
  let total = 0;
  if(products.length > 0) {
    total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }
  

  return (
    <>
      <Modal className={classes.cart} show={show} onHide={() => dispatch(hide())}>
        <Modal.Header closeButton>
          <Modal.Title>
            <CarIcon />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={classes.body} >
          {products.length === 0 ? <h2>There are no products in the cart!</h2> : products.map((product) =>
            <CartItem
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <p className={classes['total-price']} >Total: {`${formatPrice(total)}đ`}</p>
          <Button onClick={() => dispatch(hide())} className={classes.btn} size='lg' variant="danger">
            <Link to='/order' >Order</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;