import classes from './FoodItem.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const FoodItem = () => {
    return ( 
        <Card className={classes['item-card']}>
            <Card.Body>
                <Link to='menu/1'>
                    <Card.Img variant="top" src="https://static.kfcvietnam.com.vn/images/items/lg/combo1010.jpg?v=LDoDO3" alt="" />
                    <Card.Title className={classes.title} >
                            Combo Lunch-Fried Chicken Rice
                    </Card.Title>
                    <Card.Text className={classes.price} >
                        99.000đ
                    </Card.Text>
                    <Card.Text className={classes.description} >
                        1 Rice F.Chicken + 1 Lipton (L). *Applicable only from 10:00 - 14:00, from Monday to Friday of the week.
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