import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, reduceItemFromCart } from '../features/cart/cartSlice';
import classes from './CartItem.module.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/esm/Badge';
import { formatPrice } from '../util/format';


const CartItem = (props) => {
    const dispatch = useDispatch()

    const addEventHandler = () => {
      dispatch(addItemToCart({
        id: props.id,
        image: props.image,
        title: props.title,
        price: props.price / props.quantity,
        quantity: 1
      }));
    }

    const reduceItemHandler = () => {
      dispatch(reduceItemFromCart({
        id: props.id,
        image: props.image,
        title: props.title,
        price: props.price / props.quantity,
        quantity: 1
      }))
    }

    return (
      <div className={classes['cart-item']} >
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <div>
          <Button onClick={reduceItemHandler} variant='danger' >-</Button>
          <Badge bg='light' className={classes.quantity}>{props.quantity}</Badge>
          <Button onClick={addEventHandler} variant='danger' >+</Button>
        </div>
        <p>{`${formatPrice(props.price)}đ`}</p>
      </div>
    );
}

export default CartItem;