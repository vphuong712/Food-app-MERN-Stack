import classes from './FoodItem.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const FoodItem = (props) => {

    const formatPrice =  new Intl.NumberFormat('en-IN').format(props.price);

    return ( 
        <Card className={classes['item-card']}>
            <Card.Body>
                <Link to={`menu/${props.id}`}>
                    <Card.Img className={classes.image} variant="top" src={props.image} alt="" />
                    <Card.Title className={classes.title} >
                            {props.title}
                    </Card.Title>
                    <Card.Text className={classes.price} >
                        {`${formatPrice}đ`}
                    </Card.Text>
                    <Card.Text className={classes.description} >
                        {props.description}
                    </Card.Text>
                </Link>
                <div className='d-grid' >
                    <Button size='lg' variant='danger' className={classes.btn} >Add</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default FoodItem;