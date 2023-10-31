import { useDispatch } from 'react-redux';
import { addItemToCart} from '../../features/cart/cartSlice';
import { formatPrice } from '../../util/format'
import classes from './FoodItem.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useRouteLoaderData, useNavigate } from 'react-router-dom';

const FoodItem = (props) => {

    const token = useRouteLoaderData('root');
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const addEventHandler = () => {

        dispatch(addItemToCart({
            id: props.id,
            image: props.image,
            title: props.title,
            price: props.price,
            quantity: 1
        }))
    }

    return ( 
        <Card className={classes['item-card']}>
            <Card.Body>
                <Link to={`menu/${props.id}`}>
                    <Card.Img className={classes.image} variant="top" src={props.image} alt="" />
                    <Card.Title className={classes.title} >
                            {props.title}
                    </Card.Title>
                    <Card.Text className={classes.price} >
                        {`${formatPrice(props.price)}đ`}
                    </Card.Text>
                    <Card.Text className={classes.description} >
                        {props.description}
                    </Card.Text>
                </Link>
                <div className='d-grid' >
                    <Button onClick={token ? addEventHandler : navigate.bind(null, '/account?mode=login')} size='lg' variant='danger' className={classes.btn} >Add</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default FoodItem;