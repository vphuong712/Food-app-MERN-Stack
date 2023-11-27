import classes from './OrderItem.module.css';
import Badge from 'react-bootstrap/esm/Badge';
import { formatPrice } from '../../util/format';

const OrderItem = (props) => {


    return (
        <div className={classes['order-item']} >
          <img src={props.image} alt="" />
          <h2>{props.title}</h2>
          <div>
            <Badge bg='light' className={classes.quantity}>{props.quantity}</Badge>
          </div>
          <p>{`${formatPrice(props.price * props.quantity)}đ`}</p>
        </div>
      );
}

export default OrderItem;