import classes from './CartItem.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CartItem = () => {
    return (
      <div className={classes['cart-item']} >
        <img src="https://static.kfcvietnam.com.vn/images/items/lg/Rice-F.Chicken.jpg?v=4BJPY4" alt="" />
        <h2>Combo Happy Meal 99k</h2>
        <div>
          <Button variant='danger' >-</Button>
          <input value='1' type="text" />
          <Button variant='danger' >+</Button>
        </div>
        <p>18.000</p>
      </div>
    );
}

export default CartItem;